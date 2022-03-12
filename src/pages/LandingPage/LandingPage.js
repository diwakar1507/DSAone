import React, { useEffect, useRef, useCallback } from "react";
import "./Styles.css";
import hillBack from "../../img/Landing Page/Section 1/Hills/Hill Back.svg";
import hillMiddle from "../../img/Landing Page/Section 1/Hills/Hill Middle.svg";
import hillFront from "../../img/Landing Page/Section 1/Hills/Hill Front.svg";
import Moon from "../../img/Landing Page/Section 1/Moon.svg";
import illustration1 from "../../img/Landing Page/Section 2/Illustration.svg";
import illustration2 from "../../img/Landing Page/Section 3/Illustration.svg";
import illustration3 from "../../img/Landing Page/Section 4/Illustration.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Link as SLink } from "react-scroll";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  // Section1 Refs
  const meteoRef = useRef(null);
  const topbarRef = useRef(null);
  const dsaRef = useRef(null);
  const lineRef = useRef(null);
  const oneRef = useRef(null);
  const learnRef = useRef(null);
  const backRef = useRef(null);
  const moonRef = useRef(null);
  const middleRef = useRef(null);
  const frontRef = useRef(null);

  // Section2 Refs
  const illustration1Ref = useRef(null);
  const Container1Ref = useRef(null);
  const Heading1Ref = useRef(null);
  const Button1Ref = useRef(null);
  const Data1Ref = useRef(null);

  // Section3 Refs
  const illustration2Ref = useRef(null);
  const Container2Ref = useRef(null);
  const Heading2Ref = useRef(null);
  const Button2Ref = useRef(null);
  const Data2Ref = useRef(null);

  // Section4 Refs
  const illustration3Ref = useRef(null);
  const Container3Ref = useRef(null);
  const Heading3Ref = useRef(null);
  const Button3Ref = useRef(null);
  const Data3Ref = useRef(null);

  const scrollAnimations = useCallback(() => {
    gsap.to(topbarRef.current, {
      scrollTrigger: {
        trigger: topbarRef.current,
        start: "top 0%",
        scrub: true,
      },
      delay: 0.6,
      duration: 0.3,
      y: -50,
      opacity: 0,
    });

    gsap.to(dsaRef.current, {
      scrollTrigger: {
        trigger: dsaRef.current,
        start: "center 10%",
        scrub: true,
      },
      duration: 0.6,
      ease: "Power1.out",
      opacity: 0,
    });

    gsap.to(lineRef.current, {
      scrollTrigger: {
        trigger: lineRef.current,
        start: "center 40%",
        scrub: true,
      },
      duration: 0.6,
      ease: "Power1.out",
      opacity: 0,
    });

    gsap.to(oneRef.current, {
      scrollTrigger: {
        trigger: oneRef.current,
        start: "center 45%",
        scrub: true,
      },
      duration: 0.3,
      y: -60,
      opacity: 0,
    });

    gsap.to(learnRef.current, {
      scrollTrigger: {
        trigger: learnRef.current,
        start: "center 50%",
        scrub: true,
      },
      duration: 0.1,
      // x: 60,
      opacity: 0,
      ease: "Power1.out",
    });

    gsap.to(backRef.current, {
      scrollTrigger: {
        trigger: backRef.current,
        start: "top 15%",
        scrub: true,
      },
      duration: 2,
      y: 330,
    });

    gsap.to(moonRef.current, {
      scrollTrigger: {
        trigger: moonRef.current,
        start: "center 75%",
        scrub: true,
      },
      duration: 1.4,
      y: 200,
      ease: "Power1.out",
    });

    gsap.to(middleRef.current, {
      scrollTrigger: {
        trigger: middleRef.current,
        start: "top 5%",
        scrub: true,
      },
      duration: 2,
      y: 160,
      ease: "Power1.out",
    });

    gsap.to(frontRef.current, {
      scrollTrigger: {
        trigger: frontRef.current,
        start: "top 20%",
        scrub: true,
      },
      duration: 2,
      y: 20,
      ease: "Power1.out",
    });

    // Section 2
    gsap.from(illustration1Ref.current, {
      scrollTrigger: {
        trigger: illustration1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Container1Ref.current, {
      scrollTrigger: {
        trigger: Container1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Heading1Ref.current, {
      scrollTrigger: {
        trigger: Heading1Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button1Ref.current, {
      scrollTrigger: {
        trigger: Button1Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data1Ref.current, {
      scrollTrigger: {
        trigger: Data1Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });

    // Section 3
    gsap.from(illustration2Ref.current, {
      scrollTrigger: {
        trigger: illustration2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Container2Ref.current, {
      scrollTrigger: {
        trigger: Container2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Heading2Ref.current, {
      scrollTrigger: {
        trigger: Heading2Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button2Ref.current, {
      scrollTrigger: {
        trigger: Button2Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data2Ref.current, {
      scrollTrigger: {
        trigger: Data2Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });

    // Section 4
    gsap.from(illustration3Ref.current, {
      scrollTrigger: {
        trigger: illustration3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: 250,
      ease: "Power2.out",
    });

    gsap.from(Container3Ref.current, {
      scrollTrigger: {
        trigger: Container3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      duration: 0.8,
      x: -250,
      ease: "Power2.out",
    });

    gsap.from(Heading3Ref.current, {
      scrollTrigger: {
        trigger: Heading3Ref.current,
        start: "top 75%",
      },
      y: 200,
      delay: 0.6,
      duration: 0.5,
      ease: "Power2.out",
    });

    gsap.from(Button3Ref.current, {
      scrollTrigger: {
        trigger: Button3Ref.current,
        start: "top 75%",
      },
      y: -200,
      opacity: 0,
      delay: 0.6,
      duration: 0.6,
      ease: "Power2.out",
    });

    gsap.from(Data3Ref.current, {
      scrollTrigger: {
        trigger: Data3Ref.current,
        start: "top 75%",
      },
      opacity: 0,
      delay: 0.8,
      duration: 0.4,
      ease: "Power2.out",
    });
  }, []);

  useEffect(() => {
    scrollAnimations();
    return () => {};
  }, [scrollAnimations]);

  useEffect(() => {
    meteors();
    return () => {};
  }, []);

  const meteors = () => {
    let amount = 20;
    let i = 0;
    while (i < amount) {
      let meteor = document.createElement("i");
      let size = Math.random() * 5;
      let posX = Math.floor(Math.random() * window.innerWidth);
      let delay = Math.random() * -20;

      meteor.style.width = 0.2 + size + "px";
      meteor.style.left = posX + "px";
      meteor.style.animationDelay = delay + "s";
      meteoRef.current.appendChild(meteor);
      i++;
    }
  };

  return (
    <div className="text-l text-gray82">
      <div
        className="w-full h-8 pt-6 absolute mix-blend-screen z-50 cursor-pointer select-none"
        ref={topbarRef}>
        <div className="flex">
          <div className="basis-1/2 flex">
            <div className="pl-24 basis-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="19"
                viewBox="0 0 32 19">
                <g transform="translate(-96 -50)">
                  <g
                    transform="translate(96 50)"
                    fill="#d1d1d1"
                    stroke="#d1d1d1"
                    strokeWidth="1">
                    <rect width="14" height="3" rx="1.5" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="13"
                      height="2"
                      rx="1"
                      fill="none"
                    />
                  </g>
                  <g
                    transform="translate(96 58)"
                    fill="#d1d1d1"
                    stroke="#d1d1d1"
                    strokeWidth="1">
                    <rect width="32" height="3" rx="1.5" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="2"
                      rx="1"
                      fill="none"
                    />
                  </g>
                  <g
                    transform="translate(114 66)"
                    fill="#d1d1d1"
                    stroke="#d1d1d1"
                    strokeWidth="1">
                    <rect width="14" height="3" rx="1.5" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="13"
                      height="2"
                      rx="1"
                      fill="none"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex pl-28 justify-around basis-3/4">
              <SLink to="data" smooth={true} duration={700}>
                <div>DataStructures</div>
              </SLink>
              <SLink to="algorithm" smooth={true} duration={1400}>
                <div>Algorithm</div>
              </SLink>
              <SLink to="about" smooth={true} duration={2100}>
                <div>About</div>
              </SLink>
            </div>
          </div>
          <div className="basis-1/2 flex justify-end pr-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.849"
              height="30.848"
              viewBox="0 0 30.849 30.848">
              <path
                d="M32.463,28.179l-7.307-6.215A3.261,3.261,0,0,0,22.94,21,11.57,11.57,0,1,0,21.645,22.3a3.261,3.261,0,0,0,.962,2.216l6.215,7.307a2.592,2.592,0,1,0,3.641-3.641ZM14.139,21.208A7.712,7.712,0,1,1,21.851,13.5a7.712,7.712,0,0,1-7.712,7.712Z"
                transform="translate(-2.571 -1.928)"
                fill="#d1d1d1"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-horizon h-screen w-screen relative" id="main">
        <div
          className="absolute w-full h-full z-0 skew-x-12"
          ref={meteoRef}></div>
        <div className="absolute h-1/3 w-3/12 left-56 top-36">
          <div className="text-plain-white text-9xl z-50 mix-blend-screen" ref={dsaRef}>
            DSA
          </div>
          <div className="z-50 mix-blend-screen" ref={lineRef}>
            <svg height="2" width="350">
              <line x1="25" x2="300" stroke="#b6b6b6" strokeWidth="4" />
            </svg>
          </div>
          <div className="text-7xl ml-28 z-20 mix-blend-screen" ref={oneRef}>
            one
          </div>
          <div className="text-3xl ml-11 mt-5 mix-blend-screen" ref={learnRef}>
            Learn By Fun...
          </div>
        </div>
        <div className="absolute h-screen w-full top-20">
          <div className="w-full h-screen relative pt-20">
            <img
              className=" absolute w-full h-full bottom-0 left-0 object-cover "
              src={hillBack}
              ref={backRef}
              alt="Hill"
            />
            <img
              className=" absolute h-2/5 bottom-20 left-56 mix-blend-screen"
              src={Moon}
              ref={moonRef}
              alt="Moon"
            />
            <img
              className=" absolute w-full h-full bottom-14 left-0 object-cover "
              src={hillMiddle}
              ref={middleRef}
              alt="Hill"
            />
            <img
              className=" absolute w-full h-full bottom-6 left-0 object-cover "
              src={hillFront}
              alt="Hill"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="data">
        <div className="flex h-full w-full">
          <div className="basis-1/2 relative" ref={illustration1Ref}>
            <img
              src={illustration1}
              alt="Illustration"
              className="absolute w-9/12 bottom-24 left-24 object-cover"
            />
          </div>
          <div className="basis-1/2 relative" ref={Container1Ref}>
            <div className="absolute w-full h-3/4 top-24 flex flex-col">
              <div className="text-plain-white flex flex-col" ref={Heading1Ref}>
                <div className="text-9xl pt-4 pl-24">DATA</div>
                <div className="text-7xl self-end p-4 pr-24">STRUCTURE</div>
              </div>
              <div className=" w-3/4 self-center p-4 text-xl" ref={Data1Ref}>
                Data Structure is a way to store and organize data so that it
                can be used efficiently. Our Data Structure tutorial includes
                all important topics of Data Structure such as Array, Trees,
                Linked List, Stack, Queue, Graph etc.
              </div>
              <Link
                className="self-end mr-32 cursor-pointer"
                to="/DataStructure">
                <div
                  className=" w-fit p-4 rounded-full bg-primary-3 text-gray-900 text-2xl "
                  ref={Button1Ref}>
                  Learn More
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="algorithm">
        <div className="flex h-full w-full">
          <div className="basis-1/2 relative" ref={Container2Ref}>
            <div className="absolute w-full h-3/4 top-44 flex flex-col">
              <div className="text-plain-white text-8xl pt-4 pl-24" ref={Heading2Ref}>
                ALGORITHM
              </div>
              <div
                className=" w-3/4 self-center p-4 mt-8 text-xl"
                ref={Data2Ref}>
                Algorithm is a collection of steps to solve a particular
                problem. Our Algorithm tutorial includes mostly used algorithm
                design techniques such as Greedy, Divide & Conquer, Dynamic
                programming, Backtracking etc.
              </div>
              <div
                className=" w-fit p-4 rounded-full bg-primary-3 text-gray-900 text-2xl self-start ml-28 mt-8 cursor-pointer"
                ref={Button2Ref}>
                Learn More
              </div>
            </div>
          </div>
          <div className="basis-1/2 relative" ref={illustration2Ref}>
            <img
              src={illustration2}
              alt="Illustration"
              className="absolute w-9/12 bottom-24 left-24 object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary-1 h-screen w-screen relative" id="about">
        <div className="flex h-3/4 w-full">
          <div className="basis-1/2 relative" ref={illustration3Ref}>
            <img
              src={illustration3}
              alt="Illustration"
              className="absolute w-9/12 top-12 left-24 object-cover"
            />
          </div>
          <div className="basis-1/2 relative" ref={Container3Ref}>
            <div className="absolute w-full h-3/4 top-12 flex flex-col">
              <div className="text-plain-white flex flex-col" ref={Heading3Ref}>
                <div className="text-9xl pt-4 pl-24">ABOUT</div>
                <div className="text-7xl self-end p-4 pr-24">PROJECT</div>
              </div>
              <div className=" w-3/4 self-center p-4 text-xl" ref={Data3Ref}>
                Data Structure is a way to store and organize data so that it
                can be used efficiently. Our Data Structure tutorial includes
                all important topics of Data Structure such as Array, Trees,
                Linked List, Stack, Queue, Graph etc.
              </div>
              <div
                className=" w-fit p-4 rounded-full bg-primary-3 text-gray-900 text-2xl self-end mr-32 cursor-pointer"
                onClick={() => {
                  window.location.href = "https://www.google.com/";
                }}
                ref={Button3Ref}>
                Visit Github
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary-1 h-1/4 w-full pt-8">
          <div className="marquee mt-10">
            <ul className="scroll-track scroll1 list-none h-full flex">
              <li>Array</li>
              <li>Tree</li>
              <li>Quick</li>
              <li>Sort</li>
              <li>Merge</li>
              <li>Sort</li>
              <li>Algo</li>
              <li>Linked</li>
              <li>List</li>
              <li>Matrix</li>
              <li>Graph</li>
              <li>DFS</li>
              <li>BFS</li>
              <li>A-star</li>
              <li>Strassen</li>
              <li>Dijkstra</li>
              <li>Node</li>
              <li>Path</li>
              <li>Root</li>
              <li>n-Queen</li>
              <li>Array</li>
              <li>Tree</li>
              <li>Quick</li>
              <li>Sort</li>
              <li>Merge</li>
              <li>Sort</li>
              <li>Algo</li>
              <li>Linked</li>
              <li>List</li>
              <li>Matrix</li>
              <li>Graph</li>
              <li>DFS</li>
              <li>BFS</li>
              <li>A-star</li>
              <li>Strassen</li>
              <li>Dijkstra</li>
              <li>Node</li>
              <li>Path</li>
              <li>Root</li>
              <li>n-Queen</li>
            </ul>
          </div>
          <div className="marquee mt-4">
            <ul className="scroll-track scroll2 list-none h-full flex">
              <li>Data</li>
              <li>Structure</li>
              <li>Priority</li>
              <li>Queue</li>
              <li>Stack</li>
              <li>Heap</li>
              <li>RSA</li>
              <li>DFT</li>
              <li>FFT</li>
              <li>Spanning</li>
              <li>Prims</li>
              <li>Kruskal</li>
              <li>Duality</li>
              <li>Fibonacci</li>
              <li>Prime</li>
              <li>Radix</li>
              <li>Hash</li>
              <li>Table</li>
              <li>LCS</li>
              <li>Huffman</li>
              <li>Data</li>
              <li>Structure</li>
              <li>Priority</li>
              <li>Queue</li>
              <li>Stack</li>
              <li>Heap</li>
              <li>RSA</li>
              <li>DFT</li>
              <li>FFT</li>
              <li>Spanning</li>
              <li>Prims</li>
              <li>Kruskal</li>
              <li>Duality</li>
              <li>Fibonacci</li>
              <li>Prime</li>
              <li>Radix</li>
              <li>Hash</li>
              <li>Table</li>
              <li>LCS</li>
              <li>Huffman</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
