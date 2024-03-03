// Importing necessary dependencies and constants
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"; // Importing constants from constants file
import Image from "next/image"; // Importing Image component from next/image
import Link from "next/link"; // Importing Link component from next/link

// Footer component
const Footer = () => {
  return (
    // Footer section
    <footer className="flexCenter mb-24">
      {/* Container for footer content */}
      <div className="padding-container max-container flex w-full flex-col gap-14">
        {/* Footer content */}
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          {/* Logo */}
          <Link href="/" className="mb-10">
            <Image
              src="hilink-logo.svg"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>
          {/* Footer columns */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* Mapping through each column in FOOTER_LINKS and rendering FooterColumn component */}
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                {/* List of links */}
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {/* Mapping through each link in the column and rendering Link component */}
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            {/* Contact information column */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {/* Mapping through each link in FOOTER_CONTACT_INFO and rendering Link component */}
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            {/* Social media column */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                {/* List of social media links */}
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {/* Mapping through each social media link and rendering Image component */}
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border bg-gray-20" />
        {/* Copyright */}
        <p className="regular-14 w-full text-center text-gray-30">2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

// Interface for FooterColumn props
type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

// FooterColumn component
const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    // Footer column
    <div className="flex flex-col gap-5">
      {/* Column title */}
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {/* Children components */}
      {children}
    </div>
  );
};

export default Footer; // Exporting Footer component as default
