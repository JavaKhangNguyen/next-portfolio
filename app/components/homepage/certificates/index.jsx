// @flow strict
"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight, faAward} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import { certificates } from "@/utils/data/certifications";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const Certifications = () => {
  const swiperRef = useRef(null);

  return (
    <motion.div
      id="certifications"
      className="relative z-50 my-12 lg:my-24 pt-4 scroll-mt-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-center relative">
          <motion.span
            className="bg-primary absolute w-fit text-white font-bold px-5 py-3 text-lg sm:text-xl rounded-lg"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <FontAwesomeIcon
              icon={faAward}
              className="mr-2 !hidden sm:!inline-block"
              bounce
            />
            Certifications
          </motion.span>
          <span className="w-full h-[1px] bg-section-line"></span>
        </div>
      </div>
      <motion.div
        className="pt-20 relative max-w-7xl mx-auto"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {/* Prev button */}
        <motion.button
          className="hidden absolute lg:flex items-center left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 w-12 h-12  justify-center bg-primary rounded-full shadow-md transition-all duration-300 hover:bg-candy text-white"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous certificate"
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </motion.button>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1500}
          className="w-full"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index} className="px-8 py-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-full max-w-3xl mx-auto mb-4 overflow-hidden rounded-lg shadow-lg">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={certificate.img}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      className="object-contain"
                      priority={false}
                    />
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white text-center mt-2">{certificate.title}</h3>
                <p className="text-sm md:text-base font-light text-white text-center mt-1">{certificate.time}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next button */}
        <motion.button
          className="hidden absolute lg:flex items-center right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 w-12 h-12  justify-center bg-primary rounded-full shadow-md transition-all duration-300 hover:bg-candy text-white"
          onClick={() => swiperRef.current?.swiper.slideNext()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next certificate"
        >
          <FontAwesomeIcon icon={faAngleRight} size="lg" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Certifications
