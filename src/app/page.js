import { FaChevronRight } from "react-icons/fa";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-wrap items-center justify-between w-[80vw] max-w-4xl mx-auto my-20">
        <section className="flex flex-col gap-4 items-start">
          <h1 className="text-5xl font-extrabold">Amina</h1>
          <p className="text-sm max-w-md">Hi, I'm Amina, a Danish student at the Center for Medie og Kommunikation (CMK) at Roskilde Tekniske Skole.
            I'm focused on building creative, user-friendly websites and enjoy working on both the visual and technical sides of web development.</p>
          <Link href='/contact' className="flex items-center justify-center gap-1 font-bold bg-green px-13 py-3 rounded border border-lime mt-3 text-heading">Get in touch <FaChevronRight /></Link>
        </section>
        <Image src='/amina.png' alt="Amina profile picture" width={250} height={50} className="rounded-full" />
      </main>
      <Footer />
    </>
  );
}
