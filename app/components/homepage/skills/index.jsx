// @flow strict
"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import { motion } from "framer-motion";

export default function Skills() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.div
      id="skills"
      className="relative z-50 my-12 lg:my-24 pt-4 scroll-mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={containerVariants}
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full">
          <div className="relative">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="h-[1px] bg-section-line w-full"
            >
              <motion.div
                className="absolute flex items-center inset-x-0 -top-4"
                variants={titleVariants}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, delay: 1.0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-primary w-fit mx-auto font-semibold text-white p-2 px-5 text-lg sm:text-xl rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    className="mr-2 !hidden sm:!inline-block"
                    fade
                  />
                  Tech Stacks
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div className="w-full my-12" variants={skillCardVariants}>
        <Marquee
          gradient={false}
          speed={100}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <motion.div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg font-semibold">
                    {skill}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
