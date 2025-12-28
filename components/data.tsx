import { ProductsType } from "@/types";
import {
  BookOpen,
  LibraryBig,
  FlaskConical,
  BookMarked,
  Laptop,
} from "lucide-react";

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
    image: "/images/first_class.png",
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
    title: "CBT Centers Equipment",
    description:
      "Supply and setup of modern laptops and computers for Computer based Test (CBT) centers.",
    icon: Laptop,
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
    title: "Teachers training and Seminars",
    description:
      "Production and marketing of literature books, short stories, fables, and other creative works.",
    icon: BookMarked,
  },
];
export const seminarContents = [
  {
    title: "Teacher Training Workshops",
    text: "Our teacher-focused seminars provide practical guidance on classroom management, curriculum delivery, modern teaching techniques, and subject-specific mastery. Ideal for schools seeking to enhance teacher performance and student engagement.",
  },
  {
    title: "Pupil Development Programs",
    text: "We conduct engaging student workshops on study skills, reading improvement, exam readiness, leadership, and motivation—helping learners build confidence, discipline, and strong academic habits.",
  },
  {
    title: "School Administrator Seminars",
    text: "Our leadership and management workshops help administrators adopt modern tools, strategic planning methods, and best practices that improve school operations and long-term educational success.",
  },
];
