import React, { useEffect, useRef, useCallback } from "react";
import representation from "../../../img/DataStructure/Array/Array.svg";
import back from "../../../img/DataStructure/back.svg";
import { gsap } from "gsap";

const ArrayDS = () => {
  const HeadingRef = useRef(null);
  const containerRef = useRef(null);

  const Animations = useCallback(() => {
    var t = gsap.timeline();
    t.from(HeadingRef.current, {
      delay: 0.7,
      duration: 0.7,
      xPercent: 75,
      yPercent: 100,
      scale: 2,
      ease: "expo.out",
    });
    t.from(containerRef.current, {
      opacity: 0,
      duration: 1,
    });
  }, []);

  useEffect(() => {
    Animations();
    return () => { };
  }, []);

  return (
    <div className= "relative z-20">
      
    <div className="text-l text-gray82 pb-28">
      
      <div className="bg-primary-1 w-full relative">
        <div className="p-12 pb-8 text-8xl" ref={HeadingRef}>
          Array
        </div>
        <div className="md:pl-16 md:pr-28 md:pb-10 p-5 " ref={containerRef}>
          <h1 className="text-3xl text-yellow-200 mb-5">Introduction</h1>
          <p>
            <span className="text-xl">A</span>n array is a collection of items
            stored at contiguous memory locations. The idea is to store multiple
            items of the same type together.We can think of an array as a fleet
            of stairs where on each step is placed a value (let’s say one of
            your friends). Here, you can identify the location of any of your
            friends by simply knowing the count of the step they are on.
            <br /> Remember: “Location of next index depends on the data type we
            use”.
            <br />
            <br /> This makes it easier to calculate the position of each
            element by simply adding an offset to a base value, i.e., the memory
            location of the first element of the array (generally denoted by the
            name of the array). The base value is index 0 and the difference
            between the two indexes is the offset.
            <br />
            Types of indexing in an array:
            <br /> &emsp;&emsp;0 (zero-based indexing): The first element of the
            array is indexed by a subscript of 0.
            <br /> &emsp;&emsp;1 (one-based indexing): The first element of the
            array is indexed by the subscript of 1.
            <br /> &emsp;&emsp;n (n-based indexing): The base index of an array
            can be freely chosen.
          </p>
          <h1 className="text-3xl text-yellow-200 mb-5 mt-5">Array Representation</h1>
          <div className="relative h-60 w-full p-8">
            <img
              className="absolute top-4 bottom-0 object-cover h-full"
              src={representation}
              alt="Array Representation"
            />
          </div>
          <p className="text-3xl text-yellow-200 mb-5 mt-8">Basic Operations</p>
          <p>
            Following are the basic operations supported by an array.
            <br /> &emsp;&emsp;<strong>Traverse</strong> − print all the array
            elements one by one.
            {/* <br /> */}
            {/* <div className="bg-emerald-900 w-fit p-2 rounded-lg">
              <p>
                int v[] = &#123;1, 2, 3, 4, 5&#125; ;
                <br />
                for (int n : v)
                <br />
                &emsp;cout &#8810; n &#8810; endl;
              </p>
            </div> */}
            <br /> &emsp;&emsp; <strong>Insertion</strong> − Adds an element at
            the given index.
            <br /> &emsp;&emsp; <strong>Deletion</strong> − Deletes an element
            at the given index.
            <br /> &emsp;&emsp; <strong>Search</strong> − Searches an element
            using the given index or by the value.
            <br /> &emsp;&emsp; <strong>Update</strong> − Updates an element at
            the given index.
          </p>
          <h1 className="text-3xl text-yellow-200 mb-5 mt-8">Advantages Of Array</h1>
          <p>
            &emsp;1. Arrays represent multiple data items of the same type using
            a single name.
            <br />
            &emsp;2. In arrays, the elements can be accessed randomly by using
            the index number.
            <br />
            &emsp;3. Arrays allocate memory in contiguous memory locations for
            all its elements.
            <br />
            &emsp;&emsp;Hence there is no chance of extra memory being allocated
            in case of arrays.
            <br />
            &emsp;&emsp;This avoids memory overflow or shortage of memory in
            arrays.
            <br />
            &emsp;4. Using arrays, other data structures like linked lists,
            stacks, queues, trees, graphs etc can be implemented.
            <br />
            &emsp;5. Two-dimensional arrays are used to represent matrices.
            <br />
            &emsp;6. Maintains multiple variable names using a single name.
          </p>
          <h1 className="text-3xl text-yellow-200 mb-5 mt-8">Disadvantages Of Array</h1>
          <p>
            &emsp;1. The number of elements to be stored in an array should be
            known in advance.
            <br />
            &emsp;2. An array is a static structure (which means the array is of
            fixed size).
            <br />
            &emsp;3. Insertion and deletion are quite difficult in an array as
            shifting operation is costly.
            <br />
            &emsp;4. Allocating more memory than the requirement leads to
            wastage of memory space.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArrayDS;
