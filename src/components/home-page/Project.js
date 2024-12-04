import ProjectCard from "./ProjectCard"

export const Project = () => {
    const Projects = [
        {
            imgsrc:"/assessts/img/react_map_1.png",
            title:"React Map App",
            description:"A web Application for searching restaurants and hotels based on your location.",
        },
        {
            imgsrc:"/assessts/img/Nox-platform.png",
            title:"Nox Platform A web3 Application",
            description:"Build a web3 application for secure transfer of official documents over the blockchain network",
        }
    ]
  return (
    <div className="max-w-screen-xl mx-auto py-12 md:py-36 text-white" id="Projects">
        {/* Heading */}
        <div className="flex flex-wrap items-center mb-16 ">
            <p className="font-bold text-xl ">01</p>
            <h2 className="text-3xl sm:text-4xl text-[#ABABB5] font-bold">Projects</h2>
        </div>
        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 item-center gap-12 ">
            {
                Projects.map((projectss, index) =>(
                    <ProjectCard key={index} 
                    imgsrc={projectss.imgsrc}
                    title={projectss.title}
                    description={projectss.description}
                    />
                ))
            }

        </div>
    </div>
  )
}
