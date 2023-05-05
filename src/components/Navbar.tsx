export function Navbar() {
  return (
    <header className="text-stone-50 bg-slate-800">
      <nav className="flex justify-between py-4 items-center max-w-[1440px] px-8 mx-auto">
        <a href="#">
          <img src="/Logo.svg" alt="logo" width="70%" height="70%" />
        </a>

        <a href="#">
          <img src="/Github.svg" alt="GitHub" width="70%" height="70%" />
        </a>
      </nav>
    </header>
  );
}
