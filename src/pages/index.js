import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

import Image from "next/image";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import backgroundImg from "../../public/background.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rachel Cilla Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Image src={backgroundImg} alt="web1" layout="fill" objectFit="cover" />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="marker:min-h-screen">
          {/* Nav */}
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="  text-l dark:text-white">developedByRach</h1>
            <ul className="flex items-center">
              <li>
                {/* Night Mode Icon */}
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl mr-3 lg:mr-8 dark:text-white"
                />
              </li>
              <li>
                {/* Resume Button */}
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-2"
                  href="#"
                >
                  Resume
                </a>
              </li>
              <li>
                {/* Linkedin Icon */}
                <div className="text-4xl flex justify-center gap-16 text-black ml-3 md:ml-8 dark:text-white">
                  <AiFillLinkedin />
                </div>
              </li>
            </ul>
          </nav>
          {/* End of Nav */}
          {/* Name + Bio */}
          <div className="text-center p-10">
            <h2 className="font-press2start text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-300">
              Rachel Cilla
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Front End Developer
            </h3>
            <p className="text-md pt-4 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Passionate front-end web developer with 3 years of experience
              using JavaScript, HTML5, and CSS to build all aspects of the user
              experience and user interface for client-facing landing pages.
              Specializes in using jQuery and AngularJS to build e-commerce
              sites.
            </p>
          </div>
          {/* Profile Image */}
          <div className="mb-10 overflow-hidden relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96">
            {/* <Image
              src={girl}
              alt="profile image"
              layout="fill"
              objectFit="cover"
            /> */}
            <video
              src="girl.mp4"
              alt="profile video"
              layout="fill"
              objectFit="cover"
              autoPlay
              muted
              loop
            />
          </div>
        </section>
        {/* SECTION 2  (Sevices I Offer)*/}
        <section>
          <div>
            <h3 className="text-3xl pb-1 pt-8 text-center md:text-left dark:text-white">
              Services I Offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center md:text-left dark:text-gray-300">
              Since the beginning of my journeyt as a freelance developer, Ive
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              wih talented people to create prodcucts for both buisnesses and
              consumers and cosumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center md:text-left dark:text-gray-300 ">
              I offer a wide range of services, uincluding programming and
              teaching.
            </p>
          </div>
          {/* DESIGN CARD */}
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                alt="web1"
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            {/* CODE CARD */}

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
                alt="web1"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            {/* CONSULTING CARD */}

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image
                src={consulting}
                alt="consulting"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        {/* SECTION 3 */}
        <section>
          <div>
            <h3 className="text-3xl py-1 text-center md:text-left dark:text-white">
              {" "}
              Check out my <span className="dark:text-teal-400">Portfolio</span>
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 text-center md:text-left dark:text-gray-200">
              Since the beginning of my journeyt as a freelance developer, Ive
              done remote work for{" "}
              <span className="text-teal-500">agencies</span> consulted for{" "}
              <span className="text-teal-500">startups</span> and collaborated
              wih talented people to create prodcucts for both buisnesses and
              consumers and cosumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 text-center md:text-left dark:text-gray-200">
              I offer a wide range of services, uincluding programming and
              teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                alt="web1"
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
