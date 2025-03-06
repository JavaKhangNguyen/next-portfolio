// @flow strict
"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { educations } from "@/utils/data/educations";
import lottieFile from '@/app/assets/lottie/study.json';
import AnimationLottie from "@/app/components/helper/animation-lottie";
import GlowCard from "@/app/components/helper/glow-card";

export default function Education() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
      }
    }
  };

  const headerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
      }
    }
  };

  const lottieVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
      }
    }
  };

  const educationCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1 
      }
    })
  };

  return (
    <motion.div 
      id="education" 
      className="relative z-50 my-12 lg:my-24 pt-4 scroll-mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <Image
        src="/section.svg"
        loading="lazy"
        alt="Education"
        width={1572}
        height={1572}
        className="absolute top-0 -z-10 pt-4 scroll-mt-6"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="relative">
            <div className="h-[1px] bg-section-line w-full">
              <motion.div 
                className="absolute flex items-center inset-x-0 -top-4"
                variants={headerVariants}
              >
                <span className="bg-primary w-fit mx-auto font-semibold text-white p-2 px-5 text-lg sm:text-xl rounded-md">
                  <FontAwesomeIcon icon={faGraduationCap} className="mr-2 !hidden sm:!inline-block" bounce/>Education
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-5 my-5 lg:gap-16">
          <motion.div 
            className="flex justify-center items-start"
            variants={lottieVariants}
          >
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} width='95%'/>
            </div>
          </motion.div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map((education, index) => (
                  <motion.div
                    key={education.id}
                    custom={index}
                    variants={educationCardVariants}
                  >
                    <GlowCard identifier={`education-${education.id}`}>
                      <div className="p-3 relative text-white">
                        <Image
                          src="/blur-23.svg"
                          loading="eager"
                          alt="Hero"
                          width={1080}
                          height={1080}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-sm sm:text-lg text-secondary font-bold">
                            {education.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <motion.div 
                            className="text-violet-500 transition-all duration-300 hover:scale-125"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Image
                              src={education.logo}
                              loading="lazy"
                              alt="IU"
                              width={70}
                              height={70}
                            />
                          </motion.div>
                          <div>
                            <p className="text-sm sm:text-xl mb-2 font-medium uppercase">
                              {education.title}
                            </p>
                            <p className="text-xs sm:text-base">{education.institution}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};