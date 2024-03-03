import Image from "next/image"; // Importing Image component from next/image
import Button from "./Button"; // Importing Button component

// GetApp component
const GetApp = () => {
  return (
    // Section for promoting the app
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        {/* Content for promoting the app */}
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          {/* Heading */}
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          {/* Description */}
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          {/* Buttons for downloading the app */}
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            {/* Button for downloading from App Store */}
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            {/* Button for downloading from Play Store */}
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>
        {/* Image of smartphones */}
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones"
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp; // Exporting GetApp component as default
