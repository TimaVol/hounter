import Logo from "@/public/icons/Logo.svg";
import ArrowDown from "@/public/icons/Header/ArrowDown.svg";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Portal } from "../Portal";
import Burger from "./Burger";

const styles = {
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
    left: "0",
    width: "100vw",
  },
  bmMenu: {
    background: "white",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    top: "0",
    left: "0",
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function Header() {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleHamburger = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <div className="container relative">
      <header className="absolute left-0 top-[40px] z-10 flex w-full items-center justify-between px-[15px]">
        <Logo className="z-10" />
        <div className="block lg:hidden">
          <Hamburger
            color="#1b1c57"
            toggled={isHamburgerOpen}
            toggle={handleHamburger}
          />
        </div>
        <nav className="hidden text-[14px] font-semibold text-white lg:flex">
          <Link
            href={"#"}
            className="mr-[20px] xl:mr-[24px] flex items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
          >
            About Us
          </Link>
          <Link
            href={"#"}
            className="mr-[20px] xl:mr-[24px] flex items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
          >
            Article
          </Link>
          <div className="relative">
            <Link
              href={"#"}
              className="peer h-full mr-[40px] xl:mr-[56px] flex items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
            >
              Property <ArrowDown className="ml-[14px]" />
            </Link>
            <div className="invisible absolute mt-2 w-3/4 rounded-lg bg-[rgba(255,255,255,0.1)] p-4 opacity-0 transition-all hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
              <Link
                className="mb-3 transition-all hover:text-gray-200"
                href={"#"}
              >
                House
              </Link>
              <Link
                className="mb-3 transition-all hover:text-gray-200"
                href={"#"}
              >
                Villa
              </Link>
              <Link className="transition-all hover:text-gray-200 " href={"#"}>
                Apartment
              </Link>
            </div>
          </div>
          <Link
            href={"#"}
            className="flex items-center rounded-full bg-lightGreen px-[24px] py-[12px] text-[#047857] transition-all hover:bg-darkGreen hover:text-lightGreen"
          >
            Sign Up!
          </Link>
        </nav>
      </header>
      <div className="absolute left-[-200px] top-[-200px] h-[523px] w-[741px]">
        <div className="absolute left-0 top-[100px] h-[494px] w-[438px] rounded-full bg-[#82F7FF] opacity-30 blur-[60px]"></div>
        <div className="absolute left-[320px] top-0 h-[494px] w-[438px] rounded-full bg-[#82FFD2] opacity-30 blur-[60px]"></div>
      </div>

      <Portal>
        <Menu
          styles={styles}
          customBurgerIcon={false}
          isOpen={isHamburgerOpen}
          onClose={handleHamburger}
        >
          <Burger />
        </Menu>
      </Portal>
    </div>
  );
}
