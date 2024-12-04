"Use Client"
import Link from "next/link";
import BannerIcon from "./bannericon";

const Banner = () => {
    return (
        <div className=" max-w-screen-xl mx-auto">
        <div className="text-white min-h-screen flex flex-col justify-center items-start py-16 md:py-36">
            <p className="text-[#C8C8CF] font-semibold mb-2 text-xl pt-28">Hello, I&apos;m Huzefa Bajwa</p>
            <h1 className="text-4xl md:text-7xl font-bold leading-snug text-[#ABABB5]">
                An Enthusiastic Software Engineer <br/> with a passion for coding and problem-solving.
            </h1>
            {/* BUTTON */}
            <div>
                <Link href="https://www.linkedin.com/in/huzefa-bajwa-a726a61b5/" className="inline-block bg-transparent border border-white text-white py-2 px-4 rounded-full hover:bg-white
                hover:text-black transition-all duration-200 ease-in mt-5">LinkedIn Profile</Link>
            </div>
            {/* Icon animations*/}
            <BannerIcon/>
        </div>
        </div>
    );
}
export default Banner;