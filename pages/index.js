import Footer from "@/components/common/Footer/Footer";
import Navbar from "@/components/common/Navbar/Navbar";

export default function Home() {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <div class="flex-grow">
        <h1>Home Home Website</h1>
      </div>
      <Footer />
    </div>
  );
}
