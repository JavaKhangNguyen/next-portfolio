// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhoneVolume, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";

export default function ContactSection() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1,
        duration: 0.2 
      } 
    }
  };
  
  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };
  
  const contactItemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.3
      }
    }
  };
  
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 200
      }
    },
    hover: { 
      scale: 1.25, 
      transition: { 
        type: "spring", 
        stiffness: 400, 
        duration: 0.3 
      } 
    }
  };

  return (
    <motion.div 
      id="contact" 
      className="my-12 lg:my-16 relative mt-24 text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="relative">
            <div className="h-[1px] bg-section-line w-full">
              <motion.div 
                className="absolute flex items-center inset-x-0 -top-4"
                variants={titleVariants}
              >
                <span className="bg-primary w-fit mx-auto font-semibold text-white p-2 px-5 text-lg sm:text-xl rounded-md">
                    <FontAwesomeIcon icon={faAddressCard} className="mr-2 !hidden sm:!inline-block"/>Contacts
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="gap-8 lg:gap-16 pt-8 my-6 items-center">
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-5 lg:gap-9">
            <motion.p 
              className="flex items-center text-xs lg:text-base xl:text-xl gap-3"
              variants={contactItemVariants}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="transition-all text-teal-300 hover:scale-125 duration-500 ease-in-out"/>
              <span>{personalData.email}</span>
            </motion.p>
            <motion.p 
              className="flex items-center text-xs lg:text-base xl:text-xl gap-3"
              variants={contactItemVariants}
            >
              <FontAwesomeIcon icon={faPhoneVolume} size="2x" className="transition-all text-teal-300 hover:scale-125 duration-500 ease-in-out" shake/>
              <span>
                {personalData.phone}
              </span>
            </motion.p>
            <motion.p 
              className="flex items-center text-xs lg:text-base xl:text-xl gap-3"
              variants={contactItemVariants}
            >
              <FontAwesomeIcon icon={faLocationDot} size="2x" className="transition-all text-teal-300 hover:scale-125 duration-500 ease-in-out" bounce/>
              <span>
                {personalData.address}
              </span>
            </motion.p>
            <motion.div 
              className="flex items-center my-4 gap-3"
              variants={contactItemVariants}
            >
              <motion.div 
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Link
                  href={personalData.github}
                  target='_blank'
                  className="text-teal-300 hover:!text-white"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
              </motion.div>
              <motion.div 
                variants={socialIconVariants}
                whileHover="hover"
              >
                <Link
                  href={personalData.linkedIn}
                  target='_blank'
                  className="text-teal-300 hover:text-linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
              </motion.div>
            </motion.div>
          </div>         
        </div>
      </div>
    </motion.div>
  );
};