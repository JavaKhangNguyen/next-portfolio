// @flow strict
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { CodeLine } from "./code-line";
import { personalData } from "@/utils/data/personal-data";
import { skillsData } from "@/utils/data/skills";
import { RolesOfInterest } from "./roles";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
          src="/hero.svg"
          alt="Hero"
          width={1572}
          height={1572}
          className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            className="text-xl md:text-3xl xl:text-4xl font-bold leading-10 text-white md:font-extrabold lg:leading-[3.5rem]"
          >
            Hi! I am{" "}
            <span className="bg-nemesia text-transparent bg-clip-text">
              <ReactTyped
                strings={[personalData.name]}
                typeSpeed={30}
                backSpeed={50}
                loop
              />
            </span>
            <br />
          </motion.h1>

          <motion.div
            className="my-5 flex items-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={personalData.github}
                target="_blank"
                aria-label="GitHub"
                className="transition-all text-teal-300 hover:!text-white duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                aria-label="LinkedIn"
                className="transition-all text-teal-300 hover:text-linkedin duration-300 ease-in-out"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-4 flex items-center gap-3"
          >
            <Link
              href="#contact"
              aria-label="Contact me"
              className="bg-amaranthus p-[1px] rounded-full transition-all duration-300"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] hover:bg-candy rounded-full border-none text-center md:text-sm font-extrabold uppercase text-[#ffff] no-underline transition-all duration-200 ease-out md:font-bold flex items-center gap-1 hover:gap-2"
              >
                <span>Contact me</span>
                <FontAwesomeIcon
                  icon={faAddressCard}
                  size="lg"
                  className="ml-2"
                />
              </motion.button>
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full uppercase bg-amaranthus hover:bg-candy px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-bold text-white no-underline transition-all ease-in-out duration-300 hover:text-white hover:no-underline md:font-extrabold"
                role="button"
                target="_blank"
                aria-label="Download CV"
                href={personalData.resume}
              >
                <span>Download CV</span>
                <FontAwesomeIcon
                  icon={faFileArrowDown}
                  size="lg"
                  className="ml-2"
                  bounce
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]"
        >
          <motion.div
            className="flex flex-row"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="h-[1px] w-full bg-amaranthus"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </motion.div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <motion.div
                className="h-3 w-3 rounded-full bg-red-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              ></motion.div>
              <motion.div
                className="h-3 w-3 rounded-full bg-orange-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              ></motion.div>
              <motion.div
                className="h-3 w-3 rounded-full bg-green-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              ></motion.div>
            </div>
          </div>
          <motion.div
            className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <motion.code
              className="font-sans text-xs md:text-sm lg:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <CodeLine delay={1.0} className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </CodeLine>
              <CodeLine delay={1.1}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </CodeLine>
              <CodeLine delay={1.2} className="ml-4 lg:ml-8 mr-2">
                <span className="text-white">skills: </span>
                <span className="text-gray-400">{`['`}</span>
                {skillsData.map((skill, index) => (
                  <React.Fragment key={index}>
                    <span className="text-amber-300">{skill}</span>
                    {index < skillsData.length - 1 ? (
                      <span className="text-gray-400">{"', '"}</span>
                    ) : (
                      <span className="text-gray-400">{"'"}</span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">{"],"}</span>
              </CodeLine>
              <CodeLine delay={1.3}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </CodeLine>
              <CodeLine delay={1.4}>
                <span className="ml-4 lg:ml-8 mr-2 text-white">
                  quickLearner:
                </span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </CodeLine>
              <CodeLine delay={1.5}>
                <span className="ml-4 lg:ml-8 mr-2 text-emerald-400">
                  hireable:
                </span>
                <span className="text-orange-400">{personalData.hirable}</span>
                <span className="text-gray-400">,</span>
              </CodeLine>
              <CodeLine delay={1.6}>
                <span className="ml-4 lg:ml-8 mr-2 text-cyan-400">currentEmployment:</span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">{personalData.currentEmployment}</span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-gray-400">,</span>
              </CodeLine>
              <CodeLine delay={1.7}>
                <span className="ml-4 lg:ml-8 mr-2 text-fuchsia-400">
                  expLevel:
                </span>
                <span className="text-gray-400">{"'"}</span>
                <span className="text-amber-300">{personalData.exp}</span>
                <span className="text-gray-400">{"'"}</span>
              </CodeLine>
              <CodeLine delay={1.8} className="ml-4 lg:ml-8 mr-2">
                {personalData.rolesOfInterest && (<RolesOfInterest roles={personalData.rolesOfInterest} />)}
              </CodeLine>
              <CodeLine delay={1.9}>
                <span className="text-gray-400">{`};`}</span>
              </CodeLine>
            </motion.code>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
