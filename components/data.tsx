import { ProductsType } from "@/types";
import { BookOpen, LibraryBig, FlaskConical, BookMarked } from "lucide-react";

export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/blog", label: "Blog" },
];
export const products: ProductsType[] = [
  {
    title: "Meekman Modern Nursery Mathematics ",
    description: "Colorful and engaging books tailored for nursery pupils.",
    image: "/images/01.jpg",
  },
  {
    title: "Meekman Modern Nursery English",
    description: "Curriculum-aligned books for primary school learners.",
    image: "/images/02.jpg",
  },
  {
    title: "Meekman First class English",
    description:
      "Comprehensive textbooks for junior and senior secondary students.",
    image: "/images/03.jpg",
  },
  {
    title: "Meekman First class Mathematics",
    description: "Fables, short stories, and novels to build reading culture.",
    image: "/images/03.jpg",
  },
  {
    title: "Meekman Analytical Approach to Quantitative Reasoning",
    description: "Visual learning aids for classrooms and libraries.",
    image: "/images/02.jpg",
  },
  {
    title: "Meekman Analytical Approach to Verbal Reasoning",
    description: "Visual learning aids for classrooms and libraries.",
    image: "/images/02.jpg",
  },
];
export // Services array
const services = [
  {
    title: "Textbook Production & Marketing",
    description:
      "Production and marketing of textbooks for nursery, primary, and secondary schools.",
    icon: BookOpen,
  },
  {
    title: "Library Equipment",
    description:
      "Equipment of libraries with modern textbooks and excelling publications.",
    icon: LibraryBig,
  },
  {
    title: "Laboratory Equipment",
    description:
      "Supply and setup of laboratory equipment for science education in schools.",
    icon: FlaskConical,
  },
  {
    title: "Literature & Storybook Publishing",
    description:
      "Production and marketing of literature books, short stories, fables, and other creative works.",
    icon: BookMarked,
  },
  {
    title: "Conferences & Workshops",
    description:
      "Production and marketing of literature books, short stories, fables, and other creative works.",
    icon: BookMarked,
  },
  {
    title: "Teachers training and Workshops",
    description:
      "Production and marketing of literature books, short stories, fables, and other creative works.",
    icon: BookMarked,
  },
];
