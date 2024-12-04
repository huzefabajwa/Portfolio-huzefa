import Image from "next/image";
import Banner from "@/components/home-page/banner";
import { Project } from "@/components/home-page/Project";
export default function Home() {
  return (
   <div className="bg-[#060608] px-5">
    <Banner/>
    <Project/>
   </div>
  );
}
