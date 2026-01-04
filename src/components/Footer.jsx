import React from "react";
import { styles } from "../styles";
import { logo } from "../assets";
import { socialLinks } from "../constants";

const Footer = () => {
    return (
        <footer className={`${styles.paddingX} w-full flex flex-col md:flex-row justify-between items-center py-6 bg-primary border-t border-t-[#1f1f38]`}>
            <div className="flex flex-col items-center md:flex-row md:gap-4 md:mr-4 mb-4 md:mb-0">
                <div className="flex items-center gap-2">
                    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                        Omkar &nbsp;
                        <span className='sm:block hidden'> |&nbsp; FullStack Developer</span>
                    </p>
                </div>
                <p className="text-secondary text-[14px] mt-2">
                    &copy; {new Date().getFullYear()} Omkar. All rights reserved.
                </p>
            </div>

            <div className="flex gap-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-tertiary flex justify-center items-center cursor-pointer hover:bg-[#915eff] transition-colors"
                        title={link.name}
                    >
                        <img
                            src={link.icon}
                            alt={link.name}
                            className="w-3/5 h-3/5 object-contain"
                        />
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
