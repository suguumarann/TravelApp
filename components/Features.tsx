// Importing necessary dependencies and constants
import { FEATURES } from "@/constants"; // Importing FEATURES constant from constants file
import Image from "next/image"; // Importing Image component from next/image

// Features component
const Features = () => {
  return (
    // Section containing features
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      {/* Container for features */}
      <div className="max-container padding-container relative w-full flex justify-end">
        {/* Image of phone */}
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image 
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        {/* Features content */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          {/* Title */}
          <div className="relative">
            {/* Icon */}
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          {/* List of features */}
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {/* Mapping through each feature and rendering FeatureItem component */}
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// Interface for FeatureItem props
type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

// FeatureItem component
const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    // Feature item
    <li className="flex w-full flex-1 flex-col items-start">
      {/* Icon */}
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image
          src={icon}
          alt="map"
          width={28}
          height={28}
        />
      </div>
      {/* Title */}
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      {/* Description */}
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Features; // Exporting the Features component as default
