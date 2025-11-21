import React from 'react';

const ProjectCard = ({ title, info, tag1, tag2, videoSrc }) => {
  return (
    <div className="relative bg-stone-50 rounded-3xl overflow-hidden flex flex-col w-full shadow-sm min-h-[500px] border-2">

      {/* Text Section */}
      <div className="flex flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-semibold text-stone-700 font-custom">{title}</h3>
          <p className="text-sm text-stone-500 pt-2">{info}</p>
        </div>
      </div>

      {/* Full-width Video Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Tags on bottom-left */}
        <div className="absolute bottom-0 left-0 flex gap-2 p-4">
          <span className="px-4 py-1 bg-red-800/70 text-stone-50 text-sm rounded-md backdrop-blur-sm">
            {tag1}
          </span>
          <span className="px-4 py-1 bg-red-800/70 text-stone-50 text-sm rounded-md backdrop-blur-sm">
            {tag2}
          </span>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
