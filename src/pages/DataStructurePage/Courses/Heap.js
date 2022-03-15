import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Tree from "../../../img/DataStructure/Tree/Tree.svg";
import h1 from "../../../img/DataStructure/Heap/h1.svg";
import code1 from "../../../img/DataStructure/Heap/code1.png";
import code2 from "../../../img/DataStructure/Heap/code2.png";
import code3 from "../../../img/DataStructure/Heap/code3.png";
import code4 from "../../../img/DataStructure/Heap/code4.png";
import code5 from "../../../img/DataStructure/Heap/code5.png";
import code6 from "../../../img/DataStructure/Heap/code6.png";
import code7 from "../../../img/DataStructure/Heap/code7.png";
import code8 from "../../../img/DataStructure/Heap/code8.png";
import code9 from "../../../img/DataStructure/Heap/code9.png";
import code10 from "../../../img/DataStructure/Heap/code10.png";
import code41 from "../../../img/DataStructure/Heap/code41.png";
import h2 from "../../../img/DataStructure/Heap/h2.svg";
import h3 from "../../../img/DataStructure/Heap/h3.svg";
import h4 from "../../../img/DataStructure/Heap/h4.svg";
import h5 from "../../../img/DataStructure/Heap/h5.svg";
import h6 from "../../../img/DataStructure/Heap/h6.svg";
import h7 from "../../../img/DataStructure/Heap/h7.svg";
import h8 from "../../../img/DataStructure/Heap/h8.svg";
import h9 from "../../../img/DataStructure/Heap/h9.svg";
import h10 from "../../../img/DataStructure/Heap/h10.svg";
gsap.registerPlugin(ScrollTrigger);

const HeapDs = () => {
    const StackRef = useRef(null);
    const headingRef = useRef(null);
    const image = useRef(null);
    const intro = useRef(null);
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
        gsap.from(image.current, {
            y: -200,
            duration: 1,
            opacity: 0,
    
            ease: "expo.in",
            delay: 1
        })
    }, []);
    useEffect(() => {
        scrollAnimations();
        return () => { };
    }, []);



    return (
        <>
            <div className="bg-primary-1 overflow-hidden pb-24">
                <div className="flex">
                    <div className="block">
                        <div className="text-9xl text-yellow-200 py-9 font-display " ref={headingRef}> HEAP </div>
                        <div className="px-10  py-10 h-1/2" ref={StackRef}>
                            <div className="text-5xl w-3/4 text-white font-serif font-bold h-fit"> Let's learn about <br />Heap it will be fun........ </div>
                        </div>
                    </div>
                    <img
                        className=" mt-10"
                        src={Tree}
                        alt="Tree"
                        ref={image}
                    />
                </div>
                <div className="bg-primary-1 text-2xl text-left text-slate-300 pb-24 pt-10 px-28 " ref={intro}>
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Introduction To Heap</h1>
                     A heap is a tree with some special properties. The basic requirement of a heap is that the value of
                        a node must be ≥ (or ≤) than the values of its children. This is called heap property. A heap also
                        has the additional property that all leaves should be at h or h – 1 levels (where h is the height of
                        the tree) for some h {'>'} 0 (complete binary trees). That means heap should form a complete binary
                        tree (as shown below).
                        <img
                            className="mt-8 ml-40 "
                            src={h10}
                            alt="Tree"
                        />
                    <h1 className="text-5xl font-serif text-center py-10 block text-yellow-200" >Types of Heaps</h1>
                    Based on the property of a heap we can classify heaps into two types:<br /><br />
                        <strong className="text-3xl text-yellow-200">Min heap : </strong>  The value of a node must be less than or equal to the values of its
                        children 
                        <img
                            className="mt-8 ml-40 "
                            src={h9}
                            alt="Tree"
                        />
                        <strong className="text-3xl text-yellow-200">Max heap : </strong>  The value of a node must be greater than or equal to the values of its
                        children
                        <img
                            className="mt-8 ml-40 "
                            src={h8}
                            alt="Tree"
                        />
                    <h1 className="text-5xl font-serif text-center py-10 block text-yellow-200">Binary Heaps</h1>
                    In binary heap each node may have up to two children. In practice, binary heaps are enough and
                        we concentrate on binary min heaps and binary max heaps for the remaining discussion.
                        Representing Heaps: Before looking at heap operations, let us see how heaps can be
                        represented. One possibility is using arrays. Since heaps are forming complete binary trees, there
                        will not be any wastage of locations. For the discussion below let us assume that elements are
                        stored in arrays, which starts at index 0. The previous max heap can be represented as:
                        Note: For the remaining discussion let us assume that we are doing manipulations in max heap.

                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Declaration of Heap</h1> 
                    <img
                            className="mt-8 mb-8"
                            src={code1}
                            alt="Tree"
                        />
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Creating Heap</h1>

                    <img
                            className="mt-8 mb-8 "
                            src={code2}
                            alt="Tree"
                        />
                    Time Complexity: O(1).
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Parent of a Node</h1>
                    For a node at ith location, its parent is at location. In the previous example, the element 6 is at
                    second location and its parent is at 0th location.
                    <img
                            className="mt-8 mb-8"
                            src={code3}
                            alt="Tree"
                        />
                    Time Complexity: O(1).
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Children of a Node</h1>
                    Similar to the above discussion, for a node at ith location, its children are at 2 * i + 1 and 2 * i +
                    2 locations. For example, in the above tree the element 6 is at second location and its children 2
                    and 5 are at 5 (2 * i + 1 = 2 * 2 + 1) and 6(2 * i + 2 = 2 * 2) locations.
                    <div className="flex"> 
                    <img
                            className="mt-8 mr-5 mb-8"
                            src={code4}
                            alt="Tree"
                        />
                    <img
                            className="mt-8 mb-8"
                            src={code41}
                            alt="Tree"
                    />
                    </div>
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Getting the Maximum Element</h1>
                    <img
                            className="mt-8 mb-8"
                            src={code5}
                            alt="Tree"
                        />
                    Since the maximum element in max heap is always at root, it will be stored at h→array[O].<br/><br/>
                    Time Complexity: O(1).
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Heapifying an Element</h1>
                    After inserting an element into heap, it may not satisfy the heap property. In that case we need to
                    adjust the locations of the heap to make it heap again. This process is called heapifying. In maxheap,
                    to heapify an element, we have to find the maximum of its children and swap it with the
                    current element and continue this process until the heap property is satisfied at every node.
                    <img
                            className="mt-8 ml-40 "
                            src={h7}
                            alt="Tree"
                        />
                    Observation: One important property of heap is that, if an element is not satisfying the heap
                    property, then all the elements from that element to the root will have the same problem. In the
                    example below, element 1 is not satisfying the heap property and its parent 31 is also having the
                    issue. Similarly, if we heapify an element, then all the elements from that element to the root will
                    also satisfy the heap property automatically. Let us go through an example. In the above heap, the
                    element 1 is not satisfying the heap property. Let us try heapifying this element.
                    To heapify 1, find the maximum of its children and swap with that.
                    <img
                            className="mt-8 ml-40 "
                            src={h6}
                            alt="Tree"
                        />
                    We need to continue this process until the element satisfies the heap properties. Now, swap 1 with
                    8.
                    <img
                            className="mt-8 ml-40 "
                            src={h5}
                            alt="Tree"
                        />
                    Now the tree is satisfying the heap property. In the above heapifying process, since we are
                    moving from top to bottom, this process is sometimes called percolate down. Similarly, if we
                    start heapifying from any other node to root, we can that process percolate up as move from
                    bottom to top.<br/><br/>
                    <img
                            className="mt-8 mb-8 "
                            src={code6}
                            alt="Tree"
                        />
                    Time Complexity: O(logn). Heap is a complete binary tree and in the worst case we start at the
                    root and come down to the leaf. This is equal to the height of the complete binary tree. Space
                    Complexity: O(1).
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Deleting an Element</h1>
                    To delete an element from heap, we just need to delete the element from the root. This is the only
                    operation (maximum element) supported by standard heap. After deleting the root element, copy
                    the last element of the heap (tree) and delete that last element.<br/><br/>
                    After replacing the last element, the tree may not satisfy the heap property. To make it heap again,
                    call the PercolateDown function.
                    <l1>Copy the first element into some variable</l1> 
                    <l1> Copy the last element into first element location</l1>
                    <l1>PercolateDown the first element</l1>
                    <img
                            className="mt-8 mb-8"
                            src={code7}
                            alt="Tree"
                        /> 
                    Note: Deleting an element uses PercolateDown, and inserting an element uses PercolateUp.<br/><br/>
                    Time Complexity: same as Heapify function and it is O(logn).
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Inserting an Element</h1>
                    Insertion of an element is similar to the heapify and deletion process.
                    <l1>Increase the heap size</l1> 
                    <l1>Keep the new element at the end of the heap (tree)</l1> 
                    <l1> Heapify the element from bottom to top (root)</l1>
                    Before going through code, let us look at an example. We have inserted the element 19 at the end
                    of the heap and this is not satisfying the heap property.
                    <img
                            className="mt-8 ml-40 "
                            src={h4}
                            alt="Tree"
                        />
                    In order to heapify this element (19), we need to compare it with its parent and adjust them.
                    Swapping 19 and 14 gives:
                    <img
                            className="mt-8 ml-40 "
                            src={h3}
                            alt="Tree"
                        />
                    Again, swap 19 andl6:
                    <img
                            className="mt-8 ml-40 "
                            src={h2}
                            alt="Tree"
                        />
                    Now the tree is satisfying the heap property. Since we are following the bottom-up approach we<br/><br/>
                    sometimes call this process percolate up.
                    <img
                            className="mt-8 mb-8"
                            src={code8}
                            alt="Tree"
                        />
                    Time Complexity: O(logn). The explanation is the same as that of the Heapify function.
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Destroying Heap</h1>
                    <img
                            className="mt-8 "
                            src={code9}
                            alt="Tree"
                        />
                    <h1 className="text-5xl font-serif block text-center py-10 text-yellow-200">Heapifying the Array</h1>
                    One simple approach for building the heap is, take n input items and place them into an empty
                    heap. This can be done with n successive inserts and takes O(nlogn) in the worst case. This is
                    due to the fact that each insert operation takes O(logn).<br/><br/>
                    To finish our discussion of binary heaps, we will look at a method to build an entire heap from a
                    list of keys. The first method you might think of may be like the following. Given a list of keys,
                    you could easily build a heap by inserting each key one at a time. Since you are starting with a list
                    of one item, the list is sorted and you could use binary search to find the right position to insert the
                    next key at a cost of approximately O(logn) operations.<br/><br/>
                    However, remember that inserting an item in the middle of the list may require O(n) operations to
                    shift the rest of the list over to make room for the new key. Therefore, to insert n keys into the
                    heap would require a total of O(nlogn) operations. However, if we start with an entire list then
                    we can build the whole heap in O(n) operations.<br/><br/>
                    Observation: Leaf nodes always satisfy the heap property and do not need to care for them. The
                    leaf elements are always at the end and to heapify the given array it should be enough if we
                    heapify the non-leaf nodes. Now let us concentrate on finding the first non-leaf node. The last
                    element of the heap is at location h → count – 1, and to find the first non-leaf node it is enough to
                    find the parent of the last element.
                    <img
                            className="mt-8 ml-40 "
                            src={h1}
                            alt="Tree"
                        />
                    <img
                            className="mt-8 mb-8"
                            src={code10}
                            alt="Tree"
                        />
                    
                    Time Complexity: The linear time bound of building heap can be shown by computing the sum of
                    the heights of all the nodes. For a complete binary tree of height h containing n = 2h+1- 1 nodes,
                    the sum of the heights of the nodes is n – h - 1 = n – logn – 1 (for proof refer to Problems
                    Section). That means, building the heap operation can be done in linear time (O(n)) by applying a
                    PercolateDown function to the nodes in reverse level order.
                </div>



            </div>
        </>
    )
};

export default HeapDs;

