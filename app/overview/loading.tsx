import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Loader2 className="text-white animate-spin" width={50} height={50} />
    </div>
  );
}
