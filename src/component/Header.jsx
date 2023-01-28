import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center   text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="paper-plane-sharp"></ion-icon>
          </span>
          Travel Agency
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20}" : "top-[-490px]"
          }`}
        >
          <li className="mx-4 text-xl my-6 md:my-0">
            <Link
              className="uppercase rounded-xl hover:text-gray-800 duration-500"
              to="/travels"
            >
              TRAVELS
            </Link>
          </li>
          <li className="mx-4 text-xl my-6 md:my-0">
            <Link
              className="uppercase rounded-xl hover:text-gray-800 duration-500"
              to="/about"
            >
              ABOUT US
            </Link>
          </li>
          <li className="mx-4 text-xl my-6 md:my-0">
            <Link
              className="uppercase rounded-xl hover:text-gray-800 duration-500"
              to="/testimonials"
            >
              Testimonials
            </Link>
          </li>

          {/* 
          {links.map((Link) => (
            <li
              key={Link.name}
              className="md:ml-8 text-xl md:my-0 my-7 text-bold"
            >
              <a
                href={Link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {Link.name}
              </a>
            </li>
          ))} */}
        </ul>
      </div>
    </div>
    </>
  );
};

export default Header;
