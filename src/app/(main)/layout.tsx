import CtaSection from "@/components/CtaSection";
import Footer from "@/components/footer/footer";
import BottomMenu from "@/components/header/bottomMenu";
import Navbar from "@/components/header/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <CtaSection />
      {/* <BottomMenu /> */}
      <Footer />
    </>
  );
}
