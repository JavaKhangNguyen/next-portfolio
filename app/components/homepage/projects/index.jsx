"use client";
import React from 'react';
import { faAngleLeft, faAngleRight, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Projects = () => {
  const swiperRef = useRef(null);

  return (
    <motion.div 
      id='projects' 
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
            <FontAwesomeIcon icon={faClipboardList} className="mr-2 !hidden sm:!inline-block" flip/>Projects
          </motion.span>
          <span className="w-full h-[1px] bg-section-line"></span>
        </div>
      </div>

      <motion.div 
        className="pt-24 relative max-w-7xl mx-auto"
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
        >
          <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        </motion.button>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            1024: {slidesPerView: 2, spaceBetween: 40}
          }}
          loop={true}
          autoplay={{delay: 3000, disableOnInteraction: false}}
          speed={1500}
          className="w-full py-8"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index} className="px-8 py-4">
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:shadow-[0_0_30px_0_rgba(120,80,220,0.3)] h-full">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next button */}
        <motion.button
          className="hidden absolute lg:flex items-center right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 w-12 h-12  justify-center bg-primary rounded-full shadow-md transition-all duration-300 hover:bg-candy text-white"
          onClick={() => swiperRef.current?.swiper.slideNext()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faAngleRight} size="lg" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Projects;