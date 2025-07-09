import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Homepage from "./home/page";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}
