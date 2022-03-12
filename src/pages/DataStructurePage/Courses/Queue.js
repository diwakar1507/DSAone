import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import queue1 from "../../../img/DataStructure/Queue/queue1.png";
import queue2 from "../../../img/DataStructure/Queue/queue2.svg";
import { Link as SLink } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);

const QueueDs = () => {
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
            y: -500,
            opacity: 0
        }, {
            y: 0,
            delay: 1.5,
            duration: 0.5,
            opacity: 1
        });

        gsap.fromTo(hsquare2.current, {
            y: -400,
            opacity: 0
        }, {
            y: 0,
            delay: 1.5,
            duration: 0.5,
            opacity: 1
        });

        gsap.fromTo(el5.current, {
            x: 500,
            opacity: 0,
        }, {
            x: 0,
            delay: 2,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el4.current, {
            x: 500,
            opacity: 0,
        }, {
            x: 0,
            delay: 3,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el3.current, {
            x: 500,
            opacity: 0
        }, {
            x: 0,
            delay: 4,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el2.current, {
            x: 500,
            opacity: 0
        }, {
            x: 0,
            delay: 5,
            duration: 2,
            opacity: 1,
        });

        gsap.fromTo(el1.current, {
            x: 500,
            opacity: 0,
        }, {
            x: 0,
            delay: 6,
            duration: 2,
            opacity: 1,
        });
        gsap.to(el_1.current, {
            x: -450,
            delay: 2.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_2.current, {
            x: -450,
            delay: 3.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_3.current, {
            x: -450,
            delay: 4.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_4.current, {
            x: -450,
            delay: 5.2,
            opacity: 0,
            duration: 2
        });
        gsap.to(el_5.current, {
            x: -450,
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
            <div className="bg-slate-800 overflow-hidden pb-24">
                <div className="text-9xl text-yellow-200 py-9 font-display " ref={headingRef}> QUEUE </div>
                <div className="flex">
                    <div className="px-10 py-10 w-1/2 h-1/2" ref={StackRef}>
                        <div className="text-5xl w-3/4 text-white font-serif font-bold h-fit"> Let's learn about Queue it will be fun........ </div>
                    </div>
                    <div className="block">
                        <div className="h-28 w-96 bg-zinc-900 border-y-2 border-slate-700 ml-10 flex " ref={hsquare1}>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 " ref={el5}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el4}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el3}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el2}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el1}></div>
                        </div>
                        <div className="h-28 w-96 bg-zinc-900 border-y-2 border-slate-700 mt-10 ml-10 flex" ref={hsquare2}>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el_1}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el_2}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el_3}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el_4}></div>
                            <div className="h-24 w-9 mt-1 border-lime-700 border-2 rounded ml-2 bg-green-800 "ref={el_5}></div>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 pb-24" ref={intro}>
                    <div className="text-5xl font-serif text-center py-16 text-yellow-200" ><h1>Introduction To Queue</h1></div>
                    <div className="text-2xl px-28 text-slate-300">A queue is a data structure used for storing data (similar to Linked Lists and Stacks). In queue, the
                        order in which data arrives is important. In general, a queue is a line of people or things waiting
                        to be served in sequential order starting at the beginning of the line or sequence.
                        <br />
                        <br />
                        <strong className="text-yellow-100">Definition:</strong> A queue is an ordered list in which insertions are done at one end (rear) and
                        deletions are done at other end (front). The first element to be inserted is the first one to be
                        deleted. Hence, it is called First in First out (FIFO) or Last in Last out (LILO) list.
                        <br />
                        <br />
                        Similar to Stacks, special names are given to the two changes that can be made to a queue. When
                        an element is inserted in a queue, the concept is called EnQueue, and when an element is
                        removed from the queue, the concept is called DeQueue.
                        DeQueueing an empty queue is called underflow and EnQueuing an element in a full queue is
                        called overflow. Generally, we treat them as exceptions.
                        <div className="flex">
                        <img
                            className="w-30 h-1/2 mt-20"
                            src={queue1}
                            alt="queue"
                        />
                         <img
                            className=" h-72 w-30 mt-20"
                            src={queue2}
                            alt="queue"
                        />
                      </div>
                    </div>
                    <div className="text-5xl text-center py-16 font-serif text-yellow-200" ><h1>How are Queues Used?</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        The concept of a queue can be explained by observing a line at a reservation counter. When we
                        enter the line we stand at the end of the line and the person who is at the front of the line is the one
                        who will be served next. He will exit the queue and be served.
                        <br />
                        <br />
                        As this happens, the next person will come at the head of the line, will exit the queue and will be
                        served. As each person at the head of the line keeps exiting the queue, we move towards the head
                        of the line. Finally we will reach the head of the line and we will exit the queue and be served.
                        This behavior is very useful in cases where there is a need to maintain the order of arrival
                    </div>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif" ><h1>Queue ADT</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        The following operations make a queue an ADT. Insertions and deletions in the queue must
                        follow the FIFO scheme. For simplicity we assume the elements are integers.
                        <br />
                        <br />
                        <strong className="text-yellow-100"> Main Queue Operations</strong>
                        <br />
                        <br />
                        <li>EnQueue(int data): Inserts an element at the end of the queue</li>
                        <li>int DeQueue(): Removes and returns the element at the front of the queue</li>
                        <br />
                        <strong className="text-yellow-100">Auxiliary Queue Operations</strong>
                        <br />
                        <br />
                        <li>int Front(): Returns the element at the front without removing it</li>
                        <li>int QueueSize(): Returns the number of elements stored in the queue</li>
                        <li>int IsEmptyQueueQ: Indicates whether no elements are stored in the queue or not</li>
                        <br />
                        <strong className="text-yellow-100">Exception</strong>
                        <br />
                        <br />
                        Similar to other ADTs, executing DeQueue on an empty queue throws an “Empty Queue
                        Exception” and executing EnQueue on a full queue throws “Full Queue Exception”.
                    </div>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif" ><h1>Applications</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        Following are some of the applications that use queues.
                        <br />
                        <br />
                        <strong className="text-yellow-100">Direct Applications</strong>
                        <br />
                        <br />
                        <li>Operating systems schedule jobs (with equal priority) in the order of arrival (e.g., a
                            print queue).</li>
                        <li> Simulation of real-world queues such as lines at a ticket counter or any other firstcome
                            first-served scenario requires a queue.</li>
                        <li>Multiprogramming.</li>
                        <li>Asynchronous data transfer (file IO, pipes, sockets).</li>
                        <li>Waiting times of customers at call center.</li>
                        <li> Determining number of cashiers to have at a supermarket.</li>
                        <br />
                        <strong className="text-yellow-100">Indirect Applications</strong>
                        <br />
                        <br />
                        <li>Auxiliary data structure for algorithm </li>
                        <li>Component of other data structures</li>
                    </div>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif" ><h1>Implementation of Queue</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        There are many ways (similar to Stacks) of implementing queue operations and some of the
                        commonly used methods are listed below.
                        <br />
                        <br />
                        <li>Simple circular array based implementation</li>
                        <li> Dynamic circular array based implementation</li>
                        <li>Linked list implementation</li>
                    </div>
                </div>
            </div>
        </>
    )
};

export default QueueDs;

