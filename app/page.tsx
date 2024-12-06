import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Link href={"/overview"}>
        <button className="bg-white text-black px-2 py-4 rounded-md hover:opacity-80">
          Generate checkout URL
        </button>
      </Link>
    </div>
  );
}
