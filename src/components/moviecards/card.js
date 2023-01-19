"use client";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ url = "/static/images/demo.jpg", size = "medium", id }) => {
  const [imageSrc, setImageSrc] = useState(url);
  const classMap = {
    small: "image-card-small",
    medium: "image-card-medium",
    large: "image-card-large",
  };

  const handleError = () => {
    setImageSrc("/static/images/demo.jpg");
  };

  const transform = id === 0 ? { scaleY: 1.2 } : { scale: 1.2 };

  return (
    <motion.div
      className={`relative ${classMap[size]} relative inline-block hover:z-10 hover:drop-shadow-md`}
      whileHover={transform}
    >
      <Image
        src={imageSrc}
        alt="Tailwind CSS Carousel component"
        className="max-w-full object-center object-cover rounded-lg top-0 right-0 left-0 bottom-0 w-auto h-auto"
        onError={handleError}
        layout="fill"
        priority
      />
    </motion.div>
  );
};

export default Card;
