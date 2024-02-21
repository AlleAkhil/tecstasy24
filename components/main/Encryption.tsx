"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import ContactCard from "../sub/ContactCard"

const Encryption = () => {
  const iconSize = "150px";
  const contacts = [
    { name: "Dr B.Veera Jyothi", phoneNumber: "+91 6304084209", imageSrc: "/1.jpg" },
    { name: "Dr S.Rakesh", phoneNumber: "+91 9951397356", imageSrc: "/2.jpg" },
    { name: "Akhil Alle", phoneNumber: "+91 6302459159", imageSrc: "/3.jpg" },
    { name: "S Pavan", phoneNumber: "+91 9133453099", imageSrc: "/5.jpg" },
    { name: "M Sai Prasad", phoneNumber: "+91 6303138084", imageSrc: "/4.jpg" }
  ];

  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="coords">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Faculty
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Student Coordinators
        </motion.div>
      </div>

      <div className="flex items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
            imageSrc={contact.imageSrc}
            iconSize={iconSize}
          />
        ))}
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
        Need assistance or have questions? Contact us for prompt support and clarity!
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          style={{ maxWidth: '100%', height: 'auto' }}
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
