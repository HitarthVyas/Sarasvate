"use client";
import { Dancing_Script } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const dancing = Dancing_Script({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="z-[3] h-[110vh]">
        <video
          src="/Home/home-video-new.mp4"
          className="z-[0] object-cover h-[110vh] w-full absolute"
          autoPlay
          loop
          muted
        />
        <div className="relative bg-black/50 z-[10] h-[110vh] space-y-0 leading-[65px] flex justify-center text-center">
          <div className="text-white pt-16 px-1">
            <motion.span
              className="font-bold sm:text-[16px] text-[14px]"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              WELCOME TO
            </motion.span>
            <motion.h1
              className={`lg:text-[84px] text-[52px] px-5 ${dancing.className}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sri Sri Giridhari Dauji
            </motion.h1>
            <motion.span
              className="font-medium sm:text-[18px]"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Temple | Jaipur, Mansarovar
            </motion.span>
          </div>
          <Link href='/contact/#map' className="absolute bottom-[20vh] hover:no-underline">
            <motion.button
              type="button"
              className=" text-white bg-gradient-to-r bg-[#d17a29] rounded-full hover:from-pink-500 hover:to-yellow-500 font-medium text-base lg:text-xl px-4 py-2 text-center flex gap-2 items-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src="/Home/Hero/location.svg" />
              <span>Location</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
