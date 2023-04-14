"use client";

import Link from "next/link";

function SideDrawer() {
  const toggleDrawer = () => {
    const drawer = document.getElementById("nav-drawer");
    if (drawer) {
      drawer.click();
    }
  };
  return (
    <div className="drawer-side">
      <label htmlFor="nav-drawer" className="drawer-overlay" />
      <ul className="p-2 shadow items-center menu gap-1 bg-base-100 rounded-box w-80">
        <li onClick={toggleDrawer} className="menu-title">
          <Link href="/">
            <h1 className=" text-3xl font-bold pb-2">Rohit Tokala</h1>
          </Link>
        </li>
        <li onClick={toggleDrawer} className="w-full">
          <Link
            className="btn btn-block rounded-md capitalize btn-ghost"
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li onClick={toggleDrawer} className="w-full">
          <Link
            className="btn btn-block rounded-md capitalize btn-ghost"
            href={"/projects"}
          >
            Projects
          </Link>
        </li>
        <li onClick={toggleDrawer} className="w-full">
          <Link
            className="btn btn-block rounded-md capitalize btn-ghost"
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideDrawer;
