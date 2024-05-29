import React from "react";
import next from "../assets/whitenext.svg";
import logo from "../assets/Frame 55.svg";

const Footer = () => {
  return (
    <div className="footer h-[1300px] -skew-y-2">
      <div className="relative flex justify-center ">
        <div className=" w-[1300px] flex justify-center items-center h-[481px] bg-[#525AA0] mt-16 mx-20">
          <h2 className=" skew-y-2 w-[683px] text-center text-[#fff] font-[600] text-[54px] leading-[64px] flex flex-col items-center">
            Need a job done, and done well? Get started
            <div className=" relative bg-[#202229] w-[73px] h-[73px] rounded-[28.89px] mt-9">
              <img
                className="w-[24.91px] h-[14.95px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 "
                src={next}
                alt=""
              />
            </div>
          </h2>
        </div>
      </div>

      <div className="footer-grid skew-y-2">
        <div className="flex flex-col justify-start mt-36 ml-16">
          <img
            className="w-[120px] h-[29.31px]  mb-[28.69px]"
            src={logo}
            alt="zwilt"
          />

          <p className=" text-[#fff] opacity-80 font-[300] text-[14px] leading-[22px] w-[284px] mb-[49px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world’s highly qualified talent pool.
          </p>

          <p className=" text-[#fff] opacity-40 font-[400] text-[14px] leading-[32px] w-[149px] mb-[16px]">
            LINKS AND REDIRECTS
          </p>

          <div className="flex">
            <button className=" text-[#EDEFFF] font-[400] text-[14.68px] leading-[12.16px] mb-[49px] px-[51px] py-[18px] rounded-[20.27px] bg-[#292B34]">
              Hire now
            </button>

            <button className=" text-[#EDEFFF] font-[400] text-[14.68px] leading-[12.16px] mb-[49px] px-[44px] py-[18px] rounded-[20.27px] bg-[#292B34] ml-2">
              Apply now
            </button>
          </div>
        </div>

        <div className=" mt-36 mr-16">
          <h1 className="w-[779px] text-[#fff] font-[600] text-[54px] leading-[64px]">
            Connecting the right people to the right businesses.
          </h1>
          <div className="link-grid">
            <div>
              <h3>PLATFORM</h3>
              <ul>
                <li>Find Work</li>
                <li>Find Talent</li>
                <li>Categories</li>
                <li>About Us</li>
              </ul>
            </div>

            <div>
              <h3>CATEGORY</h3>
              <ul>
                <li>Data Science</li>
                <li>IT & Networking</li>
                <li>Web & Mobile</li>
              </ul>
            </div>

            <div>
              <h3>HELP</h3>
              <ul>
                <li>FAQ's</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h3>
                GET IN TOUCH{" "}
                <span dangerouslySetInnerHTML={{ __html: "&commat;" }} />
              </h3>
              <ul>
                <li>Instagram</li>
                <li>Find Talent</li>
                <li>Linkedln</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-border skew-y-2 pb-80">
        <div className="flex items-center mx-20 ">
          <p className="text-[#fff] font-[300] text-[16px] leading-[31.25px]">
            All rights reserved by Zwilt
          </p>
          <div className="ml-auto ">
            <span className="text-[#fff] font-[300] opacity-60 text-[16px] leading-[31.25px] mr-[34px] underline">
              Privacy Policy
            </span>
            <span className="text-[#fff] font-[300] opacity-60 text-[16px] leading-[31.25px] underline">
              Terms and Conditions
            </span>
          </div>
        </div>
        <div className=" h-[200px] mt-3 w-screen bg-[#202229] skew-y-1"></div>
      </div>
    </div>
  );
};

export default Footer;
