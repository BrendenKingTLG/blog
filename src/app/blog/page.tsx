import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubNav from "@/components/SubNav";
import Blog from "@/components/BlogContainer";
import BottomList from "@/components/BottomList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between bg-white">
        {/* <SubNav /> */}
        <Blog />
      </main>
      <BottomList />
      <BottomList />
      <Footer />
    </div>
  );
}
