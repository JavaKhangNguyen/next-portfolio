// @flow strict
"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { experiences } from "@/utils/data/experience";
import { cn } from "@/utils/utils";
import experience from '@/app/assets/lottie/code.json';
import AnimationLottie from "@/app/components/helper/animation-lottie";
import GlowCard from "@/app/components/helper/glow-card";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        priority={false}
        className="absolute top-0 -z-10"
      />

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center my-5 lg:py-8"
      >
        <div className="flex items-center">
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[2px]"
          ></motion.span>
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-primary w-fit text-white font-bold p-2 px-5 text-lg sm:text-xl rounded-md"
          >
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 !hidden sm:!inline-block" bounce/>Experiences
          </motion.span>
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-[2px]"
          ></motion.span>
        </div>
      </motion.div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-start"
          >
            <div className="w-full h-full"><AnimationLottie animationPath={experience} width='95%'/></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-6">
              {
                experiences.map((experience, index) => (
                  <motion.div 
                    key={experience.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <GlowCard identifier={`experience-${experience.id}`}>
                      <div className="p-3 relative">
                        <div className="flex justify-center">
                          <p className={cn("text-sm sm:text-lg font-bold", experience.active ? "text-pink-400" : "text-secondary")}>
                            {experience.duration}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <motion.div 
                            whileHover={{ scale: 1.25 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="transition-all duration-300"
                          >
                            <Image src={experience.logo} alt="IU" width={55} height={55} />
                          </motion.div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium">{experience.title}</p>
                            <p className="text-sm sm:text-base">{experience.company}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};