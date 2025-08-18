// SIN "use client" (Server Component), sin hooks
import { TEXTS } from "@/constants/texts";

export default function OpeningSection() {
  return (
    <section
      className="relative flex min-h-[60svh] items-center justify-center px-4 sm:px-6 text-center text-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* ... video y overlay iguales ... */}

      <div className="absolute  top-30 sm:left-4 sm:top-4">
        <img
          src="/logo/logo.png"
          alt="Logo"
          className="w-[156px] sm:w-[180px] md:w-[200px] h-auto"
        />
      </div>

      <div className="z-10  mt-4 sm:mt-60 ">
        <h1
          id="hero-title"
          className="m-0 font-extrabold tracking-tight leading-[1.05] text-[clamp(28px,8vw,66px)] [text-wrap:balance]"
        >
          {TEXTS.home.title}
        </h1>
        <h2 className=" mt-[clamp(4px,1.2vw,8px)] max-w-[70ch] font-normal text-[clamp(16px,4.5vw,40px)] [text-wrap:balance]">
          {TEXTS.home.subtitle}
        </h2>

        <div className="mt-6">
          <a
  href="#apply"
   className="
    inline-flex items-center justify-center
    rounded-xl px-5 py-3 text-sm font-semibold text-white
    bg-[var(--brand-primary)] ring-1 ring-black/10
    hover:bg-[var(--brand-primary-hover)] hover:ring-black/20
    transition
  "
>
            <span className="hidden sm:inline">{TEXTS.home.button}</span>
            <span className="inline sm:hidden">{TEXTS.home.button_short}</span>
          </a>
        </div>
        <p className="mt-2 text-xs sm:text-sm text-white/80 tracking-wide">
          In alliance with{" "}
          <span className="font-semibold">National Geographic</span>,
          <span className="font-semibold">History Channel</span>, and global
          cultural institutions
        </p>
      </div>
    </section>
  );
}
