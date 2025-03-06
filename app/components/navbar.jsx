//@flow strict
"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faHouse,
  faBriefcase,
  faScrewdriverWrench,
  faGraduationCap,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  // Animation variants
  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        delay: custom * 0.05,
      }
    })
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  // Smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // If the link is to another page, navigate normally
    if (!href.startsWith('/#')) {
      router.push(href);
      return;
    }
    
    // For hash links, scroll smoothly
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without reload
      window.history.pushState({}, '', href);
    }
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <motion.div 
          className="flex flex-shrink-0 items-center"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Link
            href="/"
            aria-label="Homepage"
            className="bg-nemesia text-transparent bg-clip-text text-3xl font-bold"
            onClick={(e) => handleNavClick(e, '/')}
          >
            <FontAwesomeIcon icon={faLaptopCode} className="text-secondary text-xl lg:text-3xl mr-2" flip/>
            Khang Nguyen
          </Link>
        </motion.div>
        <motion.ul
          className="hidden md:flex mt-4 h-auto w-auto md:mt-0 md:flex-row md:space-x-1 md:border-0"
          id="navbar-default"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.li custom={0} variants={navItemVariants}>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="/#about"
              aria-label="About"
              onClick={(e) => handleNavClick(e, '/#about')}
            >
              <div className="text-xs md:text-sm lg:text-base xl:text-xl text-white font-semibold transition-colors duration-300 hover:text-secondary">
                <FontAwesomeIcon icon={faHouse} className="!hidden lg:!inline-block lg:text-xs xl:text-xl mr-2" />About
              </div>
            </a>
          </motion.li>
          <motion.li custom={1} variants={navItemVariants}>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="/#experience"
              aria-label="Experience"
              onClick={(e) => handleNavClick(e, '/#experience')}
            >
              <div className="text-xs md:text-sm lg:text-base xl:text-xl text-white font-semibold transition-colors duration-300 hover:text-secondary">
                <FontAwesomeIcon icon={faBriefcase} className="!hidden lg:!inline-block lg:text-xs xl:text-xl mr-2" />Experiences
              </div>
            </a>
          </motion.li>
          <motion.li custom={2} variants={navItemVariants}>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="/#skills"
              aria-label="Skills"
              onClick={(e) => handleNavClick(e, '/#skills')}
            >
              <div className="text-xs md:text-sm lg:text-base xl:text-xl text-white font-semibold transition-colors duration-300 hover:text-secondary">
                <FontAwesomeIcon icon={faScrewdriverWrench} className="!hidden lg:!inline-block lg:text-xs xl:text-xl mr-2" />Skills
              </div>
            </a>
          </motion.li>
          <motion.li custom={3} variants={navItemVariants}>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="/#education"
              aria-label="Education"
              onClick={(e) => handleNavClick(e, '/#education')}
            >
              <div className="text-xs md:text-sm lg:text-base xl:text-xl text-white font-semibold transition-colors duration-300 hover:text-secondary">
                <FontAwesomeIcon icon={faGraduationCap} className="!hidden lg:!inline-block lg:text-xs xl:text-xl mr-2" />Education
              </div>
            </a>
          </motion.li>
          <motion.li custom={4} variants={navItemVariants}>
            <a
              className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
              href="/#projects"
              onClick={(e) => handleNavClick(e, '/#projects')}
            >
              <div className="text-xs md:text-sm lg:text-base xl:text-xl text-white font-semibold transition-colors duration-300 hover:text-secondary">
                <FontAwesomeIcon icon={faClipboardList} className="!hidden lg:!inline-block lg:text-xs xl:text-xl mr-2" />Projects
              </div>
            </a>
          </motion.li>
        </motion.ul>
      </div>    
    </nav>
  );
}