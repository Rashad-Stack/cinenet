import { Header } from "@/components";
import { getVideoById } from "@/lib/videos";
import { useRouter } from "next/router";
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export const getStaticProps = async (context) => {
  const videoId = context.params.video;

  const videoData = await getVideoById(videoId);

  return {
    props: {
      videoData: videoData.length > 0 ? videoData[0] : {},
    },
    revalidate: 10,
  };
};

export const getStaticPaths = () => {
  const videoId = ["KK8FHdFluOQ", "da7BYWyvwO8", "962rJlJ_wyQ"];
  const paths = videoId.map((video) => ({ params: { video } }));

  return { paths, fallback: "blocking" };
};

const Video = (props) => {
  const router = useRouter();

  const { video } = router.query;

  const {
    title,
    publishTime,
    description,
    channelTitle,
    statistics: { viewCount },
  } = props.videoData;

  return (
    <>
      <Header />
      <section>
        <Modal
          isOpen={true}
          contentLabel="Watch video"
          onRequestClose={() => router.back()}
          className="absolute left-0 right-0 top-20 mx-auto w-11/12 lg:w-3/4 xl:w-3/5 border border-gray-800"
          overlayClassName={`fixed top-0 right-0 bottom-0 left-0`}
        >
          <iframe
            className="rounded-t-xl modal-shadow"
            width="100%"
            height="480px"
            src={`https://www.youtube-nocookie.com/embed/${video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullscreen
          ></iframe>
          <div className="py-8 max-h-96 overflow-y-scroll scrollbar-none">
            <div className=" flex items-center gap-10">
              <div className="w-1/2">
                <h4 className="text-lg font-semibold text-teal-300">
                  {publishTime}
                </h4>
                <h1 className="text-xl font-bold tracking-wide">
                  {title} | {channelTitle}
                </h1>
              </div>
              <div className="">
                <h3 className="text-lg font-semibold text-gray-500">
                  Cast: <span className="text-white">{channelTitle}</span>
                </h3>
                <h3 className="text-lg font-semibold text-gray-500">
                  View Count: <span className="text-white">{viewCount}</span>
                </h3>
              </div>
            </div>
            <div className="text-lg font-medium mt-8 tracking-wide leading-relaxed">
              {description} {description} {description} {description}
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
};

export default Video;
