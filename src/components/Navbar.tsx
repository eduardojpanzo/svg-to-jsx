import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="text-stone-50 bg-slate-800">
      <nav className="flex justify-between py-4 items-center max-w-[1440px] px-8 mx-auto">
        <a href="/">
          <Logo />
        </a>

        <a
          className="w-10"
          href="https://github.com/EduardoPanzo/svg-to-jsx"
          target="_blanck"
        >
          <img src="/Github.svg" alt="GitHub" width="100%" height="100%" />
        </a>
      </nav>
    </header>
  );
}
