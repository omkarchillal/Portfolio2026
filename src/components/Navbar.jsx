import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Omkar &nbsp;
            <span className='sm:block hidden'> |&nbsp; FullStack Developer</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className="text-[18px] font-medium cursor-pointer">
            <a
              href="/FullStack_and_Mobile_developer_Omkar_Chillal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915eff] text-white px-4 py-2 rounded-md hover:bg-[#804dee] transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformOrigin: "top right" }}
                className={`fixed inset-4 z-30 bg-primary flex flex-col p-8 rounded-3xl shadow-[0_0_40px_-5px_rgba(255,255,255,0.2)]`}
              >
                {/* Close Button Area */}
                <div className="w-full flex justify-end mb-8">
                  <img
                    src={close}
                    alt='close'
                    className='w-[28px] h-[28px] object-contain cursor-pointer'
                    onClick={() => setToggle(!toggle)}
                  />
                </div>

                {/* Main Navigation Links */}
                <ul className='list-none flex flex-col gap-6 mt-16'>
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`font-bold cursor-pointer text-[32px] flex justify-between items-center border-b border-gray-800 pb-2 ${active === nav.title ? "text-white" : "text-white"
                        }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                      <span className="text-secondary text-[24px] font-light">+</span>
                    </li>
                  ))}
                  <li className="font-bold cursor-pointer text-[32px] flex justify-between items-center border-b border-gray-800 pb-2">
                    <a
                      href="/FullStack_and_Mobile_developer_Omkar_Chillal_resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      Resume
                    </a>
                    <span className="text-secondary text-[24px] font-light">+</span>
                  </li>
                </ul>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
