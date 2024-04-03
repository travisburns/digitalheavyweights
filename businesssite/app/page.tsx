import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">

      {/* Bottom right corner elements (horse & cliff) */}
      <div className="absolute bottom-0 right-0 z-10">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="fixed bottom-right" // Use fixed positioning with bottom-right
        />
        <div className="fixed bottom-right">
          <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
        </div>
      </div>

      {/* Text element in bottom center */}
      <div className="absolute bottom-0 mx-auto text-center z-15">
        {/* Add content here */}
      </div>

      {/* Trees image at bottom */}
      <div className="absolute bottom-0 z-5 w-full h-auto">
        <Image src="/trees.webp" alt="trees" width={4000} height={4000} className="fixed bottom-0" />
      </div>

      {/* Stars image */}
      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-20 left-20" />

    
      <div className="flex items-center w-full h-full bg-cover bg-center fixed" style={{ backgroundImage: "url(/bg-4.png)" }}>
          <Header />
      </div>
    </main>
  );
}