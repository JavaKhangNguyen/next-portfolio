import React from "react";
import { motion } from "framer-motion";
export function CodeLine({ children, delay, className = "" }) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        {children}
      </motion.div>
    );
}