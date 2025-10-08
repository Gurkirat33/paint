"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTAButton({ text = "Get Started", href = "#" }) {
  return (
    <a href={href} className="relative inline-block group">
      {/* Animated border shine effect */}
      <motion.div
        className="absolute -inset-0.5 bg-blue-600 rounded-lg opacity-75 blur"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Rotating shine effect */}
      <motion.div
        className="absolute -inset-1 rounded-lg overflow-hidden"
        style={{
          background: "conic-gradient(from 0deg, transparent 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Button content */}
      <motion.button
        className="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center gap-2 overflow-hidden"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Shimmer effect overlay */}
        <motion.div
          className="absolute inset-0 w-1/4 bg-white opacity-20 skew-x-12"
          animate={{
            x: ["-200%", "400%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
        
        {/* Button text and icon */}
        <span className="relative z-10">{text}</span>
        <motion.div
          className="relative z-10"
          animate={{
            x: [0, 4, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>

        {/* Pulsating dots around the button */}
        <motion.div
          className="absolute -right-1 -top-1 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -left-1 -bottom-1 w-2 h-2 bg-white rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.button>
    </a>
  );
}

// Demo
function Demo() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Navbar CTA Button</h1>
          <p className="text-gray-400 mb-8">Multiple animated effects for maximum attention</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <CTAButton text="Get Started" href="#" />
          <CTAButton text="Start Free Trial" href="#" />
          <CTAButton text="Book Demo" href="#" />
        </div>

        <div className="mt-12 p-6 bg-gray-800 rounded-lg max-w-2xl">
          <h3 className="text-white font-semibold mb-3">Features:</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li>• Pulsating glow effect around the button</li>
            <li>• Rotating conic gradient border</li>
            <li>• Shimmer sweep effect across button</li>
            <li>• Animated arrow icon</li>
            <li>• Pulsating corner dots</li>
            <li>• Smooth hover and tap interactions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}