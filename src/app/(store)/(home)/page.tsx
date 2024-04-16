import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-ai-side.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          width={780}
          height={780}
          quality={100}
        />
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          width={380}
          height={380}
          quality={100}
        />
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          alt=""
          className="transition-transform duration-500 group-hover:scale-105"
          width={380}
          height={380}
          quality={100}
        />
      </Link>
    </div>
  );
}
