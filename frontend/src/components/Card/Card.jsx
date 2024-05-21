import React from "react";
import { Link } from "react-router-dom";
import {crypto, binexp, osint, reverseEng, steganography} from '../../assets/icons/index'
const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-10 lg:pb-20 lg:pt-[60px] flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-['Montserrat']">
        <div className="container">
          <h2 className="text-center mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Start Your Cybersecurity Adventure?</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="Advanced Web Exploitation"
              titleHref="/webExp"
              btnHref="/webExp"
              CardDescription="This module covers advanced topics such as server-side request forgery, cross-site scripting, and exploiting web application logic flaws, equipping you with the skills needed to tackle complex web security challenges."
              Button="Play game"
            />
            <SingleCard
              image={steganography}
              CardTitle="Steganography Techniques"
              titleHref="/steganography"
              btnHref="/steganography"
              CardDescription="This module delves into advanced steganographic methods, including image, audio, and video steganography, as well as techniques for detecting steganographic methods used by adversaries."
              Button="Play game"
            />
            <SingleCard
              image={osint}
              CardTitle="Expert Open-Source Intelligence (OSINT)"
              titleHref="/osint"
              btnHref="/osint"
              CardDescription="This comprehensive module covers advanced OSINT techniques, including data mining, and the use of specialized tools and frameworks to uncover actionable intelligence."
              Button="Play game"
            />
            <SingleCard
              image={crypto}
              CardTitle="Intermediate Cryptography"
              titleHref="/cryptography"
              btnHref="/cryptography"
              CardDescription="Build on your foundational knowledge of cryptography with a deeper understanding of cryptographic algorithms and protocols. This module includes topics such as public key cryptographic hash functions, and an introduction to cryptographic attacks."
              Button="Play game"
            />
            <SingleCard
              image={reverseEng}
              CardTitle="Introductory Reverse Engineering"
              titleHref="/reverseEng"
              btnHref="/reverseEng"
              CardDescription="This module introduces the basics of disassembling and analyzing software to understand its functionality, uncover vulnerabilities, and develop patches. Learn essential tools and techniques used in reverse engineering."
              Button="Play game"
            />
            <SingleCard
              image={binexp}
              CardTitle="Binary Exploitation"
              titleHref="/binaryExp"
              btnHref="/binaryExp"
              CardDescription="This module covers basic concepts such as buffer overflows, stack smashing, and simple return-oriented programming (ROP) techniques. Gain hands-on experience with exploiting binary vulnerabilities in a controlled environment."
              Button="Play game"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="mb-10 overflow-hidden rounded-lg bg-white shadow-lg duration-300 hover:shadow-3">
        <img src={image} alt="" className="w-full h-[230px]" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <Link
              to={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary  sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </Link>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-body-color ">
            {CardDescription}
          </p>

          {Button && (
            <Link
              to={btnHref ? btnHref : "/"}
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </Link>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
