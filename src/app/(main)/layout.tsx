import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-1">{children}</section>
      <Footer />
    </main>
  );
}
