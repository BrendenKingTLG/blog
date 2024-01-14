import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNav from "@/components/SubNav";
import Blog from "@/components/BlogContainer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <SubNav />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
