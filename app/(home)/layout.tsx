import Footer from "@/components/component/Footer";
import Header from "@/components/component/Header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      <Footer />;
    </main>
  );
}
