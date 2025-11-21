// ProjectCard.jsx
import React from "react";
import { motion } from "framer-motion";


const ProjectCardPic = ({ title, info, tag, imageSrc, videoSrc, alt }) => {
  return (
     <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col md:flex-row items-center gap-6 border-2 rounded-md border-stone-300/80"
    >

    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Left - Text */}
      <div className="flex flex-col justify-between p-6 md:w-1/2">
        <div>
          <h3 className="text-xl font-semibold text-stone-700 font-custom">
            {title}
          </h3>
          <p className="text-sm text-stone-500 pt-2">{info}</p>
        </div>
        {tag && (
          <span className="inline-block mt-6 px-4 py-1 bg-stone-400 text-white text-sm rounded-md w-fit">
            {tag}
          </span>
        )}
      </div>

      {/* Right - Image or Video */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden">
        <div className="relative w-[90%] h-[300px] py-2 overflow-hidden rounded-xl">
          {videoSrc ? (
            <video
              src={videoSrc}
              className="object-cover w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={imageSrc}
              alt={alt || title}
              className="object-cover w-full h-full overflow-hidden"
            />
          )}
        </div>
      </div>
    </div>
  </motion.div>

  );
};

export default ProjectCardPic;
