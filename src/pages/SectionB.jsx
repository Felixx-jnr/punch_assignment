import React from "react";
import profile from "../assets/profile.svg";
import category from "../assets/category.svg";
import skill from "../assets/skill.svg";
import shopify from "../assets/shopify.svg";
import magneto from "../assets/magnito.svg";
import data from "../assets/data.svg";
import webflow from "../assets/webflow.svg";
import dotnet from "../assets/dotnet.svg";
import next from "../assets/next.svg";
import previous from "../assets/previous.svg";
import figma from "../assets/figma.svg";
import photoshop from "../assets/photoshop.svg";
import illustrator from "../assets/illustrator.svg";
import unreal from "../assets/unreal.svg";
import cinema from "../assets/cinema.svg";
import Talent from "../components/Talent";

const SectionB = () => {
  return (
    <div className="my-10">
      <div className=" bg-[#EDEFFF] -skew-y-2 h-[1100px] -mt-4">
        <div className=" pt-[183px] skew-y-2 text-center">
          <h2 className=" text-center  font-[700] lg:text-5xl lg:px-3 sm:text-5xl text-4xl lg:leading-[64px] text-[#202229] pb-[90px] max-w-[90%] mx-auto">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>

          <div className=" talent-box max-md:grid-cols-1 mb-[30px] mx-1 max-sm:grid-rows-1 px-4">
            <div>
              <h2 className=" font-[500] lg:text-[24px] md:text-xl sm:text-lg  leading-[34px] text-left text-[#202229] mb-5">
                Find Dev and IT professionals to scale your business.
              </h2>

              <div className=" talent">
                <img
                  src={skill}
                  alt="skills"
                />
                <img
                  src={category}
                  alt="skills"
                />
                <img
                  src={profile}
                  alt="skills"
                />
              </div>
            </div>

            <div className=" lg:h-[224px] md:h-[190px] h-[200px] bg-white rounded-[7px]  max-xs:h-[120px]">
              <h3 className="text-[16px] leading-[23.78px] font-[500] text-left py-[18px] max-md:py-1 px-3 text-[#202229] max-md:mb-6">
                IT & Development
              </h3>

              <div className="flex justify-around max-md:grid max-md:grid-cols-6 max-sm:grid-rows-1 ">
                <Talent
                  icon={shopify}
                  name="Shopify Developer"
                />

                <Talent
                  icon={magneto}
                  name="Mageto Developer"
                />

                <Talent
                  icon={data}
                  name="Data Scientist"
                />

                <Talent
                  icon={webflow}
                  name="Webflow Developer"
                />

                <Talent
                  icon={dotnet}
                  name="Dot Net Developer"
                />

                <Talent
                  icon={next}
                  name=""
                />
              </div>
            </div>
          </div>

          <div className=" talent-box max-md:grid-cols-1 mb-[30px] mx-1 max-sm:grid-rows-1 px-4">
            <div>
              <h2 className=" font-[500] lg:text-[24px] md:text-xl sm:text-lg  leading-[34px] text-left text-[#202229] mb-5">
                Explore Creative individuals with a keen eye for detail.
              </h2>

              <div className=" talent">
                <img
                  src={skill}
                  alt="skills"
                />
                <img
                  src={category}
                  alt="skills"
                />
                <img
                  src={profile}
                  alt="skills"
                />
              </div>
            </div>

            <div className=" lg:h-[224px] md:h-[190px] h-[200px] bg-white rounded-[7px]  max-xs:h-[120px]">
              <h3 className="text-[16px] leading-[23.78px] font-[500] text-left py-[18px] max-md:py-1 px-3 text-[#202229] max-md:mb-6">
                Design & Creative
              </h3>

              <div className="flex justify-around max-md:grid max-md:grid-cols-6 max-sm:grid-rows-1 ">
                <Talent
                  icon={previous}
                  name=""
                />

                <Talent
                  icon={figma}
                  name="UX Designer"
                />

                <Talent
                  icon={photoshop}
                  name="Graphics Designer"
                />

                <Talent
                  icon={illustrator}
                  name="Illustrator Artist"
                />

                <Talent
                  icon={unreal}
                  name="Unreal Engine"
                />

                <Talent
                  icon={cinema}
                  name="Cinema 4D"
                />
              </div>
            </div>
          </div>

          {/* <div className=" explore talent-box gap-16">
            <div className="flex place-items-center">
              <div className="inline-flex place-items-center justify-center w-[74px] h-[74px] bg-[#202229] rounded-[30px] ">
                <img
                  className="w-[25px] h-[15px]"
                  src={whitenext}
                  alt="zwilt"
                />
              </div>
              <span className="mx-3 text-[22px] font-[500] leading-[18px] text-[#202229]">
                Explore More
              </span>
            </div>

            <p className="text-left font-[700] text-[22px] leading-8 text-[#202229] opacity-80">
              30 more <span className="font-[500] my-20">to explore</span>{" "}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SectionB;
