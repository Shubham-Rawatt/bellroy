import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaPinterestP, FaTiktok,} from "react-icons/fa";

const footerLinks = {
  help: [
    "Customer Care",
    "Shipping & Returns",
    "Extended Warranties",
    "Luggage Repair Program",
    "Cleaning & Care",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
    "Web Accessibility Statement",
  ],

  products: [
    "Shop All Products",
    "Backpacks",
    "Crossbody Bags",
    "Bags & Luggage",
    "Phone Cases",
    "Wallets",
    "Passport Holders",
    "RFID Protected",
    "Travel",
    "Key Holders",
    "Accessories",
  ],

  range: [
    "Collections",
    "Bestsellers",
    "New Releases",
    "The Outlet",
    "Coming Soon",
  ],

  about: [
    "Our Story",
    "Our Materials",
    "Responsible Business",
    "Good Business Update",
    "Journal",
    "Collaborations",
    "Stores & Stockists",
    "Affiliate Program",
    "Corporate Gifting",
    "Students & Graduates",
    "Creators",
    "Press",
    "Careers",
    "Sitemap",
  ],
};

const socialIcons = [
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaYoutube />, label: "YouTube" },
  { icon: <FaLinkedinIn />, label: "LinkedIn" },
  { icon: <FaPinterestP />, label: "Pinterest" },
  { icon: <FaTiktok />, label: "TikTok" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#222222] text-[#aaa]">
      {/* Main Footer */}
      <div className="px-8 py-5 md:px-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.25fr_auto]">
          {/* Help */}
          <div>
            <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[1px] text-[#bcbcbc]">
              Help
            </h3>

            <ul className="space-y-2">
              {footerLinks.help.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.7px] transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop Products */}
          <div>
            <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[1px] text-[#bcbcbc]">
              Shop Products
            </h3>

            <ul className="space-y-2">
              {footerLinks.products.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.7px] transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[1px] text-[#bcbcbc]">
              Navigate the Range
            </h3>

            <ul className="space-y-2">
              {footerLinks.range.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.7px] transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="mb-3 text-[11px] font-medium uppercase tracking-[1px] text-[#bcbcbc]">
              About
            </h3>

            <ul className="space-y-2">
              {footerLinks.about.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[11px] tracking-[0.7px] transition hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-start gap-5 pt-0">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="text-[19px] text-[#aaa] transition hover:text-white"
              >
                {social.icon}
              </a>
            ))}

            {/* Bellroy text logo */}
            <span className="ml-1 whitespace-nowrap font-serif text-[17px] italic text-[#999]">
              Bellroy
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#666] px-8 py-4 md:px-12">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          {/* B Corp + Support */}
          <div className="flex items-center gap-4">
            {/* B Corp Badge */}
            <div className="flex flex-col items-center text-white">
              <span className="text-[8px] leading-none">Certified</span>

              <div className="my-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-[22px] font-bold">
                B
              </div>

              <span className="text-[7px] leading-none">Corporation</span>
            </div>

            <p className="text-[11px] tracking-[0.7px] text-[#aaa]">
              Got a question? Contact{" "}
              <a
                href="mailto:support@bellroy.com"
                className="text-[#e54b16] underline"
              >
                support@bellroy.com
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-[11px] tracking-[0.7px] text-[#aaa]">
            All rights reserved © 2026 Bellroy Pty Ltd
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
