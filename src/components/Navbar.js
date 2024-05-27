import logo from "../assets/Frame 55.svg";

const Navbar = () => {
  return (
    <div className=" flex place-items-center w-[1300px] h-[60px] rounded-[15px] bg-[#525AA0] text-white px-4">
      <img
        src={logo}
        className="w-[112px] h-[27.35px]"
        alt="zwilt"
      />

      <ul className="flex ml-auto">
        <li className="mx-[30px]">Find Work</li>
        <li className="mx-[30px]">Find Talent</li>
        <li className="mx-[30px]">Articles</li>
        <li className="mx-[30px]">About Us</li>
        <li className="mx-[30px]">Contact Us</li>
      </ul>

      <ul className="flex items-center justify-center ml-auto">
        <li className="   ">Login</li>
        <li className="ml-[20px] py-[14px] px-[21px] text-[#202229] font-medium bg-white rounded-[16px]">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
