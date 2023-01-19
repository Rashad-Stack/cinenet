import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Banner = ({ videoId, videoName, title, category }) => {
  const router = useRouter();
  const handlePlay = (e) => {
    e.preventDefault();
    router.push(`video/${videoId}`);
  };

  return (
    <section className="relative bg-[url(/static/images/banner.jpeg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25" />
      <div className="relative container mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left text-white">
          <div className="flex gap-3 items-center mb-8 sm:justify-start justify-center">
            <h1 className="text-7xl font-extrabold text-red-700">C</h1>
            <p className="text-2xl">{category}</p>
          </div>
          <h1 className="text-3xl sm:text-5xl leading-relaxed block font-extrabold text-white">
            {videoName}
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-sans">
            {title}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center sm:justify-start justify-center">
            <button
              className="flex gap-x-3 items-center rounded bg-rose-600 px-12 py-3 text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto tracking-wide"
              onClick={handlePlay}
            >
              <Image
                src={"/static/icons/play.svg"}
                width={10}
                height={10}
                alt="nav play"
                priority
                className="h-auto w-auto"
              />
              Play
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
