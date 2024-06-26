import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

/**
 * Props for the NavItem component
 * @typedef {Object} NavItemProps
 * @property {string} text - The text to display in the navigation item
 * @property {() => void} onClick - Function to call when the navigation item is clicked
 * @property {boolean} isActive - Whether the navigation item is currently active
 */
type NavItemProps = {
  text: string;
  onClick: () => void;
  isActive: boolean;
};

/**
 * NavItem component for rendering a single navigation item
 * @param {NavItemProps} props - The props for the NavItem component
 * @returns {JSX.Element} The rendered NavItem component
 */
const NavItem: React.FC<NavItemProps> = ({ text, onClick, isActive }) => (
  <button
    className={`justify-center p-2.5 font-sans font-semibold whitespace-nowrap transition-colors duration-200 ${
      isActive ? "bg-gray-700" : "hover:bg-gray-700"
    }`}
    onClick={onClick}
  >
    {text}
  </button>
);

/**
 * Header component for rendering the main navigation header
 * @returns {JSX.Element} The rendered Header component
 */
const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const navItems = ["Buy $PNDA", "Whitepaper", "Pandanomics", "Contact"];
  const router = useRouter();

  /**
   * Handles the click event for a navigation item
   * @param {string} item - The text of the clicked navigation item
   */
  const handleNavItemClick = (item: string) => {
    setActiveItem(item);
    // scroll to section
    router.push(`#${item.toLowerCase().replaceAll(" ", "-")}`);
  };

  return (
    <header className="flex justify-center absolute w-full z-50 items-center px-16 py-6 text-xl font-medium tracking-wider leading-6 text-center text-white max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
        <Image
          src="/logo.svg"
          alt="Company logo"
          width={159}
          height={32}
          className="shrink-0 self-start max-w-full aspect-[5]"
        />
        <nav className="flex gap-5 justify-between max-md:flex-wrap">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              text={item}
              onClick={() => handleNavItemClick(item)}
              isActive={activeItem === item}
            />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;