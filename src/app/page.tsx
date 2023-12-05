import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="border-primary border rounded-full px-5 py-1 font-500 mb-8 animate-pulse bg-primary">
        <p className="text-white text-sm">Coming Soon</p>
      </div>
      <h1 className="text-primary font-bold text-5xl">
        Tomc Designs v2 Lesssgoooo!
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-4"></div>
      </div>
    </main>
  );
}
