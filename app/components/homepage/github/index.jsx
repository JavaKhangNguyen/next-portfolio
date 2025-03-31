// @flow strict
"use client";
import React, { useState, useEffect } from "react";
import GitHubCalendar from 'react-github-calendar';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GitHubGraph(){
    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, when: "beforeChildren" } }
    };
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    const calendarVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }


    // Responsive block size and margin
    const [blockSize, setBlockSize] = useState(15);
    const [blockMargin, setBlockMargin] = useState(5);
    const [fontSize, setFontSize] = useState(16);
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) { 
                setBlockSize(8);
                setBlockMargin(2);
                setFontSize(10);
            } 
            else if (window.innerWidth <= 768) { 
                setBlockSize(10);
                setBlockMargin(3);
                setFontSize(12);
            } 
            else {
                setBlockSize(15);
                setBlockMargin(5);
                setFontSize(16);
            }
        };
        
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div 
            id="github" 
            className="relative z-50 my-12 lg:my-24 pt-4 scroll-mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
        >  
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
                                variants={headerVariants}
                            >
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, delay: 1.0 }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-primary w-fit mx-auto font-semibold text-white p-2 px-5 text-lg sm:text-xl rounded-md"
                                >
                                    <FontAwesomeIcon 
                                        icon={faGithub} 
                                        className="mr-2 !hidden sm:!inline-block" spin/>GitHub Contributions
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div className="flex justify-center w-full my-12" variants={calendarVariants}>
                <GitHubCalendar
                    username="JavaKhangNguyen"
                    blockSize={blockSize}
                    blockMargin={blockMargin}
                    fontSize={fontSize}
                    theme={{light: ['#ffffff', '#f0abfc', '#e879f9', '#d946ef', '#c026d3']}}
                    style={{ borderRadius: "10px" }}
                />
            </motion.div>
        </motion.div>
    )
}