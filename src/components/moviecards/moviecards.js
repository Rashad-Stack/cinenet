import Link from "next/link";
import React from "react";
import Card from "./card";

const MovieCards = ({ title, size, videos = [] }) => {
  return (
    <section className="text-white py-8">
      <div className="relative container mx-auto lg:flex lg:items-center">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
          </div>
          <div className="container flex space-x-1 overflow-hidden overflow-x-scroll scrollbar-none py-8">
            {videos.map((video, i) => (
              <Link key={video.id} href={`/video/${video.id}`}>
                <Card id={i} url={video.image} size={size} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCards;
