import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex-grow flex flex-col items-center justify-center min-h-screen overflow-hidden bg-black selection:bg-gold-500/30 selection:text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/bg-image.png"
          alt="Luxury Real Estate Property at Twilight"
          fill
          priority
          className="object-cover object-center animate-slow-zoom brightness-75 transition-all duration-700"
          quality={100}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl px-6 py-12 md:py-24 mx-auto flex flex-col items-center justify-center text-center h-full flex-grow">



        {/* Main Hero Content */}
        <div className="flex flex-col items-center max-w-4xl mt-16">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-white leading-tight mb-8 animate-fade-in-up drop-shadow-xl tracking-tight">
            Under <span className="italic font-light text-white/90">Construction</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-12 animate-fade-in-up-delay-1 font-light leading-relaxed">
            A new standard in luxury real estate.
          </p>


        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-6 md:p-10 flex justify-center text-xs font-light text-white/50 tracking-widest uppercase z-10">
        <div>&copy; {new Date().getFullYear()} TheAddressRealty. All rights reserved.</div>
      </footer>
    </main>
  );
}
