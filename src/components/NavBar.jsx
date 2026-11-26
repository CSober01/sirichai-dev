import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu.svg";

export function NavBar() {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-[#DAD6D1] px-6 lg:h-20 lg:px-[120px]">
      <img src={logo} alt="Logo" className="size-6 lg:size-11" />

      <button type="button" aria-label="Open menu" className="lg:hidden">
        <img src={menuIcon} alt="" className="size-6" />
      </button>

      <div className="hidden items-center gap-2 lg:flex">
        <a
          href="/login"
          className="flex h-12 items-center rounded-full border border-[#75716B] bg-white px-10 text-base font-medium text-[#26231E]"
        >
          Log in
        </a>
        <a
          href="/signup"
          className="flex h-12 items-center rounded-full bg-[#26231E] px-10 text-base font-medium text-white"
        >
          Sign up
        </a>
      </div>
    </nav>
  );
}


