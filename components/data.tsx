import {
  BookOpen,
  LibraryBig,
  FlaskConical,
  BookMarked,
  Laptop,
  Award,
  Palette,
  CheckCircle,
} from "lucide-react";

export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
  { href: "/seminars", label: "Seminar" },
];

export const services = [
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
export const quickLinks = [
  { title: "About Us", path: "/about" },
  { title: "Our Blog", path: "/blogs" },
  { title: "Seminars", path: "/seminars" },
  { title: "Products", path: "/products" },
];
export const whyChooseus = [
  { icon: <CheckCircle />, title: "Curriculum Compliance", rate: 91 },
  { icon: <BookOpen />, title: "Book Quality", rate: 92 },
  { icon: <Palette />, title: "Beautiful Illustrations", rate: 86 },
  { icon: <Award />, title: "Quick Delivery", rate: 88 },
];
export const seminars = [{ image: "", title: "", date: "" }];
