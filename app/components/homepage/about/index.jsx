// @flow strict
"use client";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      id="about" 
      className="my-12 lg:my-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <motion.div className="order-2 lg:order-1" variants={itemVariants}>
          <motion.p variants={itemVariants} className="font-bold mb-5 text-secondary text-xl uppercase">
            About me
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-200 text-base lg:text-lg">
            {personalData.description}
          </motion.p>
        </motion.div>
        <motion.div className="flex justify-center order-1 lg:order-2" variants={imageVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={personalData.profile}
              width={300}
              height={300}
              alt="NPKhang"
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};