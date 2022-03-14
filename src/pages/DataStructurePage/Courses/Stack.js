import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import stack1 from "../../../img/DataStructure/Stack/stack1.svg";
import stack2 from "../../../img/DataStructure/Stack/stack2.svg";
import { Link as SLink } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);

const StackDs = () => {
    const StackRef = useRef(null);
    const headingRef = useRef(null);
    const hsquare1 = useRef(null);
    const hsquare2 = useRef(null);
    const image = useRef(null);
    const el1 = useRef(null);
    const el2 = useRef(null);
    const el3 = useRef(null);
    const el4 = useRef(null);
    const el5 = useRef(null);
    const el_1 = useRef(null);
    const el_2 = useRef(null);
    const el_3 = useRef(null);
    const el_4 = useRef(null);
    const el_5 = useRef(null);
    const intro = useRef(null);
    const introdetail = useRef(null);
    const operation = useRef(null);

    const scrollAnimations = useCallback(() => {
        gsap.fromTo(StackRef.current, {
            x: 50,
            opacity: 0,
        }, {
            x: 50,
            delay: 1.3,
            opacity: 1,
            ease: "expo.in",
            duration: 0.5,
        });
        gsap.fromTo(intro.current, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1.3,
            ease: "expo.in",
            duration: 0.5
        });
        gsap.fromTo(headingRef.current, {
            y: 220,
            x: 450,
        }, {
            y: 10,
            x: 90,
            fontSize: 80,
            delay: 0.8,
            duration: 0.7,
            ease: "expo.out",
        });
        gsap.fromTo(hsquare1.current, {
            x: 500,
            opacity: 0
        }, {
            x: 0,
            delay: 1.5,
            duration: 0.5,
            opacity: 1
        });

        gsap.fromTo(hsquare2.current, {
            x: 400,
            opacity: 0
        }, {
            x: 0,
            delay: 1.5,
            duration: 0.5,
            opacity: 1
        });

        gsap.fromTo(el5.current, {
            y: -500,
            opacity: 0,
        }, {
            y: 0,
            delay: 2,
            duration: 2,
            
            opacity: 1,
        });

        gsap.fromTo(el4.current, {
            y: -500,
            opacity: 0,
        }, {
            y: 0,
            delay: 3,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el3.current, {
            y: -500,
            opacity: 0
        }, {
            y: 0,
            delay: 4,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el2.current, {
            y: -500,
            opacity: 0
        }, {
            y: 0,
            delay: 5,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el1.current, {
            y: -500,
            opacity: 0,
        }, {
            y: 0,
            delay: 6,
            duration: 2,
            opacity: 1,
        });
        gsap.to(el_1.current, {
            y: -450,
            delay: 2.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_2.current, {
            y: -450,
            delay: 3.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_3.current, {
            y: -450,
            delay: 4.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_4.current, {
            y: -450,
            delay: 5.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_5.current, {
            y: -450,
            delay: 6.2,
            opacity: 0,
            duration: 2
        });

    }, []);
    useEffect(() => {
        scrollAnimations();
        return () => { };
    }, []);



    return (
        <>
            <div className="bg-primary-1 overflow-hidden pb-24">
                <div className="text-9xl text-yellow-200 py-9 font-display" ref={headingRef}> STACK </div>
                <div className="flex">
                    <div className="px-10 py-10 w-1/2 h-1/2" ref={StackRef}>
                        <div className="text-5xl w-3/4 text-white font-serif font-bold h-fit"> Let's learn about Stack it will be fun........ </div>
                    </div>
                    <div className="h-72 w-24 border-r-2 border-b-2 border-slate-900 rounded-b-2xl  border-l-2 px-1 bg-zinc-900 mx-7" ref={hsquare1}>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 mt-28" ref={el1}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el2}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el3}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el4}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el5}></div>
                    </div>
                    <div className="h-72 w-24 border-r-2 border-b-2 border-slate-900 rounded-b-2xl border-l-2 px-1 bg-zinc-900 mx-7" ref={hsquare2}>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 mt-28" ref={el_1}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el_2}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el_3}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el_4}></div>
                        <div className="w-96px h-7 bg-green-800 rounded border-2 border-lime-700 my-1" ref={el_5}></div>
                    </div>
                </div>
                <div ref={intro}>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif" ><h1>Introduction To Stack</h1></div>
                    <div className="text-2xl px-28 text-slate-300"> A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example – a deck of cards or a pile of plates, etc.Stack Example - A real-world stack allows operations at one end only. For example, we can place or remove a card or plate from the top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack. Stack is a linear data structure that follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
                        <br />
                        <br />
                        Mainly the following three basic operations are performed in the stack:
                        <br />
                        <br />
                        <li>Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.</li>
                        <li>Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.</li>
                        <li>Peek or Top: Returns the top element of the stack.</li>
                        <li>isEmpty: Returns true if the stack is empty, else false.</li>

                        <div className="py-7  pr-28 text-white text-2xl " ref={operation}>
                            <div className="flex" ref={image}>
                                <img
                                    className=" h-96 mt-10  "
                                    src={stack1}
                                    alt="Stack"
                                />
                                <img
                                    className=" h-96 w-30 mt-8 ml-20 "
                                    src={stack2}
                                    alt="Stack"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif">Time Complexities of operations on stack:</div>
                    <div className="text-2xl px-32 pb-16 text-center text-slate-300">push(), pop(), isEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.</div>
                    <div className="text-5xl text-center text-yellow-200 font-serif">Applications of stack:</div>
                    <div className="text-2xl pt-9 px-28 text-slate-300">
                        <li>Balancing of symbols</li>
                        <li>Infix to Postfix /Prefix conversion</li>
                        <li>Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.</li>
                        <li>Backtracking is one of the algorithm designing techniques. Some examples of backtracking are the Knight-Tour problem, N-Queen problem, find your way through a maze, and game-like chess or checkers in all these problems we dive into someway if that way is not efficient we come back to the previous state and go into some another path. To get back from a current state we need to store the previous state for that purpose we need a stack.</li>
                        <li>In Memory management, any modern computer uses a stack as the primary management for a running purpose. Each program that is running in a computer system has its own memory allocations</li>
                        <li>String reversal is also another application of stack. Here one by one each character gets inserted into the stack. So the first character of the string is on the bottom of the stack and the last element of a string is on the top of the stack. After Performing the pop operations on the stack we get a string in reverse order.</li>
                        <a className="text-red-300 text-4xl" target="_blank" href="https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm">Read More......</a>
                    </div>
                </div>
            </div>
        </>
    )
};

export default StackDs;

