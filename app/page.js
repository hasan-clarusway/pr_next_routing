import Image from "next/image";
import Hero from "./components/Hero";
import photos from "@/public/photos/photos";
import Link from 'next/link'
import LoadMore from "./components/LoadMore";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 auto-rows-max gap-6 m-10">
          {
            photos.map(({id, imageSrc}) => (
              <Link key={id} href={`/photos/${id}`} > 
                <Image 
                  alt={imageSrc}
                  src={imageSrc}
                  height={600}
                  width={600}
                  className="w-full object-cover aspect-square rounded-[5rem] hover:shadow-2xl bg-cyan-500 shadow-lg shadow-cyan-500/50"
                />
              </Link>
            ))
          }
        </div> 
      <LoadMore />
      <Footer />
    </main>
  );
}


