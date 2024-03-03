// Importing necessary dependencies and components
import { PEOPLE_URL } from "@/constants"; // Importing PEOPLE_URL constant from constants file
import Image from "next/image"; // Importing Image component from next/image

// Interface for CampProps
interface CampProps {
  backgroundImage: string; // Background image for the camp site
  title: string; // Title of the camp site
  subtitle: string; // Subtitle of the camp site
  peopleJoined: string; // Number of people joined the camp site
}

// CampSite component
const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    // Camp site container with dynamic background image
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      {/* Content of the camp site */}
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Camp site details */}
        <div className="flexCenter gap-4">
          {/* Icon */}
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/folded-map.svg"
              alt="map"
              width={28}
              height={28}
            />
          </div>
          {/* Title and subtitle */}
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        {/* Number of people joined */}
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {/* Displaying images of people who joined */}
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          {/* Number of people joined */}
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

// Camp component
const Camp = () => {
  return (
    // Camp section
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* Camp sites */}
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {/* First camp site */}
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        {/* Second camp site */}
        <CampSite 
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>
      {/* Quote section */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          {/* Quote */}
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
          {/* Image of the quote */}
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp; // Exporting the Camp component as default
