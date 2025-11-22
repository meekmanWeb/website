import { ReactNode } from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"; // Install lucide-react if not yet
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

interface Socials {
  name: string;
  icon: ReactNode;
  href: string;
}
const socialLinks: Socials[] = [
  {
    name: "Facebook",
    icon: <Facebook className="h-5 w-5" />,
    href: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: <Instagram className="h-5 w-5" />,
    href: "https://instagram.com",
  },
];
export const quickLinks = ["Events", "Seminars", "Workshops", "Products"];
export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-white py-10 space-y-5 px-6">
        <section className="grid md:grid-cols-3 md:gap-6 gap-4 items-center lg:gap-10 lg:grid-cols-4">
          <div className="pr-4 col-span-2 max-w-lg">
            <p className="text-lg font-semibold">
              Meekman is a leading Book Publishing Company, dedicated to
              delivering innovative solutions that meet the evolving needs of
              our clients. With a strong commitment to excellence, we specialize
              in providing services designed to enhance performance, drive
              efficiency, and create value.
            </p>
          </div>
          <article className="">
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-base text-gray-200 font-medium">
                  <Link href={link} className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="">
            <h3 className="text-lg mb-6 font-bold">Quick Links</h3>
            <ul className="">
              {quickLinks.map((link, index) => (
                <li key={index} className="text-base text-gray-200 font-medium">
                  <Link href={link} className="hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between lg:gap-10 max-w-4xl mx-auto gap-4 pt-6 ">
          <div className="text-sm  space-y-1">
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} /> +234 800 000 0000
            </p>
            <p className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} /> info@meekmanbooks.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon, name, href }, i) => (
              <div key={i} className="text-sm text-gray-600">
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                  aria-label={`Follow us on ${name}`}
                >
                  {icon}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Contact Info & Social Icons */}
        </div>
        <div className=" text-center">
          {/* Footer Note */}
          <p className="text-sm  ">
            &copy; {new Date().getFullYear()} Meekman Books & Educational
            Services. All rights reserved.
          </p>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 border border-gray-50 bg-white size-14 md:size-16 rounded-full flex justify-center items-center">
        <a href="https://wa.me/+2349075318511">
          <FaWhatsapp className="size-10 md:size-[50]" color="green" />
        </a>
      </div>
    </>
  );
}
