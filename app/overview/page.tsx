import Safepay from "@sfpy/node-core";

export default async function Page() {
  const safepay = new Safepay(
    "ee4bc5d0a8d6713730ed4d402d53052f3e0eb3c66850142da395b56569f858ee",
    { authType: "secret", host: "https://sandbox.api.getsafepay.com" }
  );

  const { data: tbt } = await safepay.client.passport.create();
  const { data } = await safepay.payments.session.setup({
    merchant_api_key: "sec_5d4ce87d-b7e5-4027-93e2-83d8455fe11e",
    intent: "CYBERSOURCE",
    mode: "payment",
    currency: "PKR",
    amount: 10000,
  });

  console.log(tbt);

  console.log(data);

  const chekcoutUrl = await safepay.checkout.createCheckoutUrl({
    env: "sandbox",
    source: "hosted",
    tbt,
    tracker: data.tracker.token,
    cancel_url: "http://localhost:3001/overview",
    redirect_url: "https://www.google.com",
  });

  console.log(chekcoutUrl);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
