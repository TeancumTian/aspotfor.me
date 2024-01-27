import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
type NavbarProps = {
    toggle: () => void;
  };

const Navbar = ({ toggle }: NavbarProps) => {
  return (
    <>
      <div className="w-full h-20 bg-blue-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/rentparking">
                  <p>Rent Parking</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;