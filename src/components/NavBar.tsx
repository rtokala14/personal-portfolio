import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

function NavBar() {
  return (
    <nav className="sticky backdrop-blur-md navbar h-14 p-2 top-0 w-full flex items-center justify-between">
      <div className="navbar-start flex items-center gap-4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn md:hidden btn-square rounded-md btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/about"}>
                <button className="btn rounded-md capitalize btn-ghost btn-block">
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <button className="btn rounded-md capitalize btn-ghost btn-block">
                  Projects
                </button>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <button className="btn rounded-md capitalize btn-ghost btn-block">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link href="/">
            <h1 className=" text-lg font-bold">Rohit Tokala</h1>
          </Link>
        </div>
        <div className="menu menu-horizontal hidden md:flex gap-1 items-center">
          <Link href={"/about"}>
            <button className="btn btn-md rounded-md btn-ghost capitalize">
              About
            </button>
          </Link>
          <Link href={"/projects"}>
            <button className="btn btn-md rounded-md btn-ghost capitalize">
              Projects
            </button>
          </Link>
          <Link href={"/contact"}>
            <button className="btn btn-md rounded-md btn-ghost capitalize">
              Contact
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        <div>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
