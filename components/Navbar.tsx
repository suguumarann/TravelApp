import { NAV_LINKS } from "@/constants"; // Importing NAV_LINKS constant
import Image from "next/image"; // Importing Image component from Next.js
import Link from "next/link"; // Importing Link component from Next.js
import Button from "./Button"; // Importing Button component

// Navbar component
const Navbar = () => {
  return (
    // Navigation bar with flex layout, padding, and spacing
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo with a link to the home page */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Navigation links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          // Link component for each navigation item
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login button (visible on large screens) */}
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Menu icon (visible on small screens) */}
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar; // Exporting Navbar component as default
