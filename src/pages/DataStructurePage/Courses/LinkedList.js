import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import list from "../../../img/DataStructure/LinkedList/list.svg";
import list1 from "../../../img/DataStructure/LinkedList/list1.svg";
import list2 from "../../../img/DataStructure/LinkedList/list2.svg";
import { Link as SLink } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);

const LinkedListDs = () => {




  return (
    <>
      <div className="bg-slate-800 overflow-hidden pb-24">
        <div className="text-8xl px-16  text-yellow-200 py-9 font-display ml-10 mt-10 " > Linked List </div>

        <div className="bg-slate-800 pb-24 px-28" >
          <div className="text-5xl py-16 font-serif text-yellow-200" ><h1>Introduction To Linked List</h1></div>
          <div className="text-2xl text-slate-300">
            A linked list is a data structure used for storing collections of data. A linked list has the following
            properties.
            <br />
            <br />
            <li>Successive elements are connected by pointers</li>
            <li>The last element points to NULL</li>
            <li> Can grow or shrink in size during execution of a program</li>
            <li>Can be made just as long as required (until systems memory exhausts)</li>
            <li>Does not waste memory space (but takes some extra memory for pointers). It
              allocates memory as list grows.</li>
          </div>
          <div className="text-5xl py-16 font-serif text-yellow-200" ><h1>LinkedList ADT</h1></div>
          <div className="text-2xl  text-slate-300">
            The following operations make a LikedList an ADT.
            <br />
            <br />
            <strong className="text-yellow-100">Main Linked Lists Operations</strong>
            <br />
            <br />
            <li>Insert: inserts an element into the list</li>
            <li>Delete: removes and returns the specified position element from the list</li>
            <br />
            <strong className="text-yellow-100">Auxiliary LinkedList Operations</strong>
            <br />
            <br />
            <li>Delete List: removes all elements of the list (disposes the list)</li>
            <li>Count: returns the number of elements in the list</li>
            <li> Find nth node from the end of the list</li>
            <br />
          </div>
          <div className="text-yellow-200 text-5xl font-serif py-7">Types of LinkedList</div>
          <div className="text-2xl py-9 text-slate-300"><strong className="text-yellow-100 text-3xl">Singly LinkedList</strong>
            <br />
            <br />
            Generally “linked list” means a singly linked list. This list consists of a number of nodes in which
            each node has a next pointer to the following element (contains the address of the next element). The link of the last node in the list is
            NULL, which indicates the end of the list and there is one head pointer which points to first element of a linked list.
            <img className=" h-96" src={list} />
            <strong className="text-yellow-100 text-2xl">Basic Operations on a List</strong>
            <br />
            <br />
            <li>Traversing the list</li>
            <li>Inserting an item in the list</li>
            <li>Deleting an item from the list</li>
          </div>
          <div className="text-2xl py-9 text-slate-300"><strong className="text-yellow-100 text-3xl">Doubly LinkedList</strong>
            <br />
            <br />
            In a doubly linked list each element has two pointers(previous and next) previous pointer contains the address of the previos element and
            the next pointer contains th address of the next element. The advantage of a doubly linked list (also called two – way linked list) is that given a node in
            the list, we can navigate in both directions. A node in a singly linked list cannot be removed
            unless we have the pointer to its predecessor. But in a doubly linked list, we can delete a node
            even if we don’t have the previous node’s address (since each node has a left pointer pointing to
            the previous node and can move backward).
            <img className="h-96 ml-20 items-center" src={list1} />
            <strong className="text-yellow-100 text-2xl"> The primary disadvantages of doubly linked lists are:</strong>
            <br />
            <br />
            <li>Each node requires an extra pointer, requiring more space.</li>
            <li>The insertion or deletion of a node takes a bit longer (more pointer operations).</li>
          </div>
          <div className="text-2xl py-9 text-slate-300"><strong className="text-yellow-100 text-3xl">Circular LinkedList</strong>
            <br />
            <br />
            In singly linked lists and doubly linked lists, the end of lists are indicated with NULL value. But
            circular linked lists do not have ends. While traversing the circular linked lists we should be
            careful; otherwise we will be traversing the list infinitely. In circular linked lists, each node has a
            successor and When we reach to the last element then it's next pointer will not point to the null It will point
            to the first element of a linkedlist (as the name suggest i.e. circular) Note that unlike singly linked lists, there is no node with NULL pointer in a circularly
            linked list. In some situations, circular linked lists are useful.
            <br />
            <br />
            For example, when several processes are using the same computer resource (CPU) for the same
            amount of time, we have to assure that no process accesses the resource before all other
            processes do (round robin algorithm).
            <img className="ml-20 h-96" src={list2} />
            The circular list is accessible through the node marked head. To count the nodes, the list has to be
            traversed from the node marked head, with the help of a dummy node current, and stop the
            counting when current reaches the starting node head.
            If the list is empty, head will be NULL, and in that case set count = 0. Otherwise, set the current
            pointer to the first node, and keep on counting till the current pointer reaches the starting node.

          </div>
        </div>
      </div>
    </>
  )
};

export default LinkedListDs;

