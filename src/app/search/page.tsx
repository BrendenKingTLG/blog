import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomList from "@/components/BottomList";
import BlogList from "@/components/BlogList";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center bg-white py-4">
        <div className="flex items-center justify-center bg-white rounded-2xl w-80 h-10 border-2">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered input-sm w-full max-w-xs border-0 focus:outline-none"
          />
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center text-left p-4">
          <p>Results for: </p>
          <div className="px-1"></div>
          <div className="badge">default</div>
          <div className="badge">default</div>
          <div className="badge">default</div>
        </div>
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
        <BlogList
          title="Embracing the Future: The Rise of AI in Software Development"
          date="01/2024"
          author="TechTrekker"
          summary="This article discusses the impact of AI in software development..."
        />
      </main>
      <BottomList />
      <Footer />
    </div>
  );
}
