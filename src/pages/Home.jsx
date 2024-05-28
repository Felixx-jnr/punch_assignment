import React from "react";
import face from "../assets/face.gif";
import search from "../assets/Frame 626624.svg";
import bars from "../assets/Union.png";
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
import whitenext from "../assets/whitenext.svg";

import Talent from "../components/Talent";

const home = () => {
  return (
    <div className="home flex place-items-center mt-[144px] flex-col">
      <h2 className=" font-[700] font text-[54px] leading-[64px] w-[641px] text-center text-[#202229]">
        Finding the right fit{" "}
        <span>
          <img
            className="inline w-[68px] h-[43px]"
            src={face}
            alt="face"
          />
        </span>
        has never been easier.
      </h2>

      <p className=" w-[582px] h-[64px] mt-[20px] font-[400] opacity-80 text-[22px] text-center text-[#202229] ">
        With our rigorous pre-vetting process, you'll never have to worry about
        finding the ideal candidate ever again.
      </p>

      <div className="relative mt-[30px]">
        <input
          className=" w-[570px] h-[74px] border-[2px] border-[#F0F0F0] rounded-[15px] py-[29px] px-[27px]"
          type="text"
        ></input>
        <span className=" w-[75px] h-[75px]">
          <img
            className="absolute top-0 right-0"
            src={search}
            alt="zwilt"
          />
        </span>
      </div>

      <div className=" w-[920px] h-[230px] rounded-[15px] mt-[40px] bg-[#F8F8F8]">
        <div className=" flex h-[44px] max-w-[391px] mx-auto rounded-[15px] mt-[15px] bg-[#D2D2D2] ">
          <p className=" inline-block p-[10px] w-[192px] bg-[#C7F4C2] rounded-[15px] font-[600] text-[16px] text-center leading-[23.78px] ">
            IT & Development
          </p>

          <p className="  inline-block p-[10px] w-[192px] rounded-[15px] bg-[#D2D2D2] font-[500] text-[16px] text-center opacity-80 ">
            Design and Creative
          </p>
        </div>

        <div className="grid grid-cols-3 mt-[23px] ml-[65px] font-[400] text-[16px] leading-[16px] text-[#959595] mb-[74px]">
          <ul>
            <li className="mb-[18px] "> Phython Developer</li>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] text-[#202229] font-[500]">
              MERN Stack Developer
            </li>
            <li className="mb-[18px] ">Full Stack Developer</li>
          </ul>
          <ul>
            <li className="mb-[18px] ">Data Scientist</li>
            <li className="mb-[18px] ">Front End Developer</li>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] ">Phython Developer</li>
          </ul>
          <ul>
            <li className="mb-[18px] ">Shopify Developer</li>
            <li className="mb-[18px] ">Phython Developer</li>
            <li className="mb-[18px] ">Full Stack Developer</li>
            <li className="mb-[18px] text-[#202229] text-[500] font-[500] ">
              Explore More
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img
          className=" w-screen mt-[74px]"
          src={bars}
          alt="zwilt"
        />
      </div>

      {/* SECTION 2 */}

      <div className="flex justify-center relative h-[1130px] w-[110%] bg-[#EDEFFF] -rotate-2 -mt-4">
        <div className=" flex flex-col items-center mt-[183px] rotate-2 text-center ">
          <h2 className=" flex font-[700] text-[54px] leading-[64px] w-[977px]  h-[128px] text-[#202229] mb-[90px]">
            Your one-stop marketplace for finding the talent your business
            needs.
          </h2>

          <div className=" talent-box w-[1160px] mx-[70px] gap-16 mb-[30px] ">
            <div>
              <h2 className=" font-[500] text-[24px] leading-[34px] w-[380px] h-[68px] text-left text-[#202229] mb-5">
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

            <div className="w-[730px] h-[224px] bg-white px-7 rounded-[7px]">
              <h3 className="text-[16px] leading-[23.78px] font-[500] text-left py-[18px] text-[#202229]">
                IT & Development
              </h3>

              <div className="flex justify-around">
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

          <div className=" talent-box w-[1160px] mx-[70px] gap-16 mb-[30px] ">
            <div>
              <h2 className=" font-[500] text-[24px] leading-[34px] w-[380px] h-[68px] text-left text-[#202229] mb-5">
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

            <div className="w-[730px] h-[224px] bg-white px-7 rounded-[7px]">
              <h3 className="text-[16px] leading-[23.78px] font-[500] text-left py-[18px] text-[#202229]">
                Design & Creative
              </h3>

              <div className="flex justify-around">
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
                  name="Illustration Artist"
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

          <div className=" explore w-[1160px] gap-16">
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
              30 more <span className="font-[500]">to explore</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
