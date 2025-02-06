import About from "../aboutcomponents/AboutSection";
import BigCompany from "../aboutcomponents/BigCompany";
import Video from "../aboutcomponents/Video";
import MeetTeam from "../aboutcomponents/MeetTeam";
import Work from "../aboutcomponents/Work";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function AboutSection() {
  return (
    <div className="w-full h-full items-center mx-auto">
              <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">Bandage</div>
          <nav className="flex space-x-6 text-gray-600">
            <Link href="/" className="hover:text-gray-800">Home</Link>
            <Link href="/product" className="hover:text-gray-800">Product</Link>
            <Link href="/pricing" className="hover:text-gray-800">Pricing</Link>
            <Link href="/contact" className="hover:text-gray-800">Contact</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#login" className="text-gray-600 hover:text-gray-800">Login</Link>
            <Link href="#member" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Become a member →</Link>
          </div>
        </header>
      <About />
      <Video />
      <MeetTeam />
      <BigCompany />
      <Work />
      <Footer/>
    </div>
  );
}