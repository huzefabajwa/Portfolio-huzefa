
import Image from "next/image";
const BannerIcon = () => { 
    const icons = [
        "/assessts/img/icons8-express-js-512.png",
        "/assessts/img/icons8-react-160.png",
        "/assessts/img/icons8-nextjs-480.png",
        "/assessts/img/icons8-tailwindcss-480.png",
        "/assessts/img/Mongodb-PNG-Background.png",
        "/assessts/img/icons8-nodejs-480.png",

    ]
    return(
        <div className="overflow-hidden md:w-1/2 lg:w-full sm:w-1/3 py-20">
            <div className="flex items-center space-x-16 animate-marquee">
                {
                    icons.map((icon, index) => (
                        <div key={index} className="group flex-shrink-0 flex-wrap transform transition-all duration-300 hover:scale-110">
                            <Image width={600} height={600} src={icon} alt="icon" className="w-16 h-16 mx-auto 
                            rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"/>
                        </div>
                    ))
                }
            </div>
            </div>
    )
}

export default BannerIcon;