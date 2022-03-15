import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Tree from "../../../img/DataStructure/Tree/Tree.svg";
import S from "../../../img/DataStructure/Tree/S.svg";
import ex1 from "../../../img/DataStructure/Tree/ex1.svg";
import tree1 from "../../../img/DataStructure/Tree/tree1.svg";
import treecode1 from "../../../img/DataStructure/Tree/treecode1.png";
import treecode2 from "../../../img/DataStructure/Tree/treecode2.png";
import treecode3 from "../../../img/DataStructure/Tree/treecode3.png";
import treecode4 from "../../../img/DataStructure/Tree/treecode4.png";
import ptree from "../../../img/DataStructure/Tree/ptree.svg";
import ftree from "../../../img/DataStructure/Tree/ftree.svg";
import { Link as SLink } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);

const TreeDs = () => {
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
                        <div className="text-8xl text-yellow-200 py-9 font-display " ref={headingRef}> TREE </div>
                        <div className="px-10  py-10 h-1/2" ref={StackRef}>
                            <div className="text-5xl w-3/4 text-white font-serif font-bold h-fit"> Let's learn about <br />Tree it will be fun........ </div>
                        </div>
                    </div>
                    <img
                        className=" mt-10"
                        src={Tree}
                        alt="Tree"
                        ref={image}
                    />
                </div>
                <div className="bg-primary-1 pb-24" ref={intro}>
                    <div className="text-5xl font-serif text-center py-16 text-yellow-200" ><h1>Introduction To Tree</h1></div>
                    <div className="text-2xl px-28 text-slate-300">A tree is a data structure similar to a linked list but instead of each node pointing simply to the
                        next node in a linear fashion, each node points to a number of nodes. Tree is an example of a nonlinear
                        data structure. A tree structure is a way of representing the hierarchical nature of a structure
                        in a graphical form.<br /><br />
                        In trees ADT (Abstract Data Type), the order of the elements is not important. If we need ordering
                        information, linear data structures like linked lists, stacks, queues, etc. can be used.
                        <img
                            className="h-96 mt-8 ml-20"
                            src={S}
                            alt="Tree"
                        />
                    </div>
                    <div className="text-5xl text-center pb-9 text-yellow-200 font-serif" ><h1>Tree Terminologies</h1></div>
                    <div className="text-2xl px-28 text-slate-300">

                        <li> <strong className="text-yellow-100">Root : </strong> The root of a tree is the node with no parents. There can be at most one root node in
                            a tree (node A in the above example).  </li>
                        <br />
                        <li> <strong className="text-yellow-100">Edge : </strong>An edge refers to the link from parent to child (all links in the figure). </li>
                        <br />
                        <li> <strong className="text-yellow-100">Leaf : </strong>A node with no children is called leaf node (E,J,K,H and I). </li>
                        <br />
                        <li> <strong className="text-yellow-100">Child : </strong> All the nodes which are present below some node are called children of that node </li>
                        <br />
                        <li> <strong className="text-yellow-100">Parent : </strong>The node which is present above some nodes are called Parent of these nodes </li>
                        <br />
                        <li> <strong className="text-yellow-100">Sibling : </strong>Children of same parent are called siblings (B,C,D are siblings of A, and E,F are the
                            siblings of B). </li>
                        <br />
                        <li> <strong className="text-yellow-100"> Ancestor : </strong>A node p is an ancestor of node q if there exists a path from root to q and p appears
                            on the path. The node q is called a descendant of p. For example, A,C and G are the
                            ancestors of if. </li>
                        <br />
                        <img
                            className=" ml-36"
                            src={tree1}
                            alt="Tree"
                        />
                        <li> <strong className="text-yellow-100"> Level of a Tree : </strong> The set of all nodes at a given depth is called the level of the tree (B, C and D are
                            the same level). The root node is at level zero. </li>
                        <br />
                        <li> <strong className="text-yellow-100">Depth of a node : </strong>The depth of a node is the length of the path from the root to the node (depth of G is
                            2, A – C – G).</li>
                        <br />
                        <li> <strong className="text-yellow-100">Height of a node : </strong>The height of a node is the length of the path from that node to the deepest node. The
                            height of a tree is the length of the path from the root to the deepest node in the tree.
                            A (rooted) tree with only one node (the root) has a height of zero. In the previous
                            example, the height of B is 2 (B – F – J). </li>
                        <br />
                        <li> <strong className="text-yellow-100">Height of a Tree : </strong>Height of the tree is the maximum height among all the nodes in the tree and depth of
                            the tree is the maximum depth among all the nodes in the tree. For a given tree,
                            depth and height returns the same value. But for individual nodes we may get
                            different results. </li>
                        <br />
                        <li> <strong className="text-yellow-100">Skew Tree : </strong>If every node in a tree has only one child (except leaf nodes) then we call such trees
                            skew trees. If every node has only left child then we call them left skew trees.
                            Similarly, if every node has only right child then we call them right skew trees.  </li>

                    </div>
                    <div className="text-5xl text-center py-16 text-yellow-200 font-serif" ><h1>Binary Tree</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        A tree is called binary tree if each node has zero child, one child or two children. Empty tree is
                        also a valid binary tree. We can visualize a binary tree as consisting of a root and two disjoint
                        binary trees, called the left and right subtrees of the root.
                        <br />
                        <br />
                        <strong className="text-yellow-100 text-3xl">Types of Binary Trees</strong>
                        <br />
                        <br />
                        <strong className="text-yellow-100 text-3xl">Full Binary Tree</strong><br /><br />
                        A binary tree is called full binary tree if each node has exactly two or 0 children. Below are the following examples of full binary tree.
                        <div className="flex"><img
                            className=" ml-36"
                            src={ftree}
                            alt="Tree"
                        />
                            <img
                                className="mt-14"
                                src={tree1}
                                alt="Tree"
                            /></div>

                        <strong className="text-yellow-100 text-3xl">Complete Binary Tree</strong><br /><br />
                        Before defining the complete binary tree, let us assume that the height of
                        the binary tree is h. In complete binary trees, if we give numbering for the nodes by starting at the
                        root (let us say the root node has 1) then we get a complete sequence from 1 to the number of
                        nodes in the tree. While traversing we should give numbering for NULL pointers also. A binary
                        tree is called complete binary tree if all leaf nodes are at height h or h – 1 and also without any
                        missing number in the sequence.<br /><br />
                        A complete binary tree is a binary tree in which all the levels are completely filled except possibly the lowest one, which is filled from the left.
                        A complete binary tree is just like a full binary tree, but with two major differences<br/>
                        <li>All the leaf elements must lean towards the left.</li>
                        <li>The last leaf element might not have a right sibling i.e. a complete binary tree doesn't have to be a full binary tree.</li>
                        <img
                            className=" ml-36"
                            src={ftree}
                            alt="Tree"
                        />
                        <strong className="text-yellow-100 text-3xl">Perfect Binary Tree</strong><br /><br />A perfect binary tree is a type of binary tree in which every internal node has exactly two child nodes and all the leaf nodes are at the same level
                        All the internal nodes have a degree of 2.
                        <img
                            className=" ml-36"
                            src={ptree}
                            alt="Tree"
                        />

                    </div>
                    <div className="text-5xl text-center pb-16 text-yellow-200 font-serif" ><h1>Properties of Binary Tree</h1></div>
                    <div className="text-2xl px-28 text-slate-300">
                        For the following properties, let us assume that the height of the tree is h. Also, assume that root
                        node is at height zero.
                        <br />
                        <br />
                        <li>The number of nodes n in a full binary tree is 2h+1 – 1. Since, there are h levels we
                            need to add all nodes at each level [20 + 21+ 22 + ··· + 2h = 2h+1 – 1].</li>
                        <li>The number of nodes n in a complete binary tree is between 2h (minimum) and 2h+1
                            – 1 (maximum). For more information on this, refer to Priority Queues chapter.</li>
                        <li>The number of leaf nodes in a full binary tree is 2h.</li>
                        <li>The number of NULL links (wasted pointers) in a complete binary tree of n nodes is
                            n + 1.</li>
                    </div>
                    <div className="text-5xl font-serif text-center py-16 text-yellow-200" ><h1>Binary Tree Traversal</h1></div>
                    <div className="text-2xl px-28 text-slate-300">In order to process trees, we need a mechanism for traversing them, and that forms the subject of
                        this section. The process of visiting all nodes of a tree is called tree traversal. Each node is
                        processed only once but it may be visited more than once. As we have already seen in linear data
                        structures (like linked lists, stacks, queues, etc.), the elements are visited in sequential order. But,
                        in tree structures there are many different ways.<br /><br />
                        Tree traversal is like searching the tree, except that in traversal the goal is to move through the
                        tree in a particular order. In addition, all nodes are processed in the traversal but searching
                        stops when the required node is found.<br /><br />
                        <strong className="text-yellow-100 text-3xl">Traversal Methods</strong><br /><br />
                        <li>Preorder (DLR) Traversal</li>
                        <li>Inorder (LDR) Traversal</li>
                        <li> Postorder (LRD) Traversal</li><br />
                        There is another traversal method which does not depend on the above orders and it is:<br /><br />
                        <li>Level Order Traversal: This method is inspired from Breadth First Traversal (BFS
                            of Graph algorithms).</li> <br />
                        Let us use the diagram below for the remaining discussion
                        <img
                            className="h-96 mt-8 ml-20"
                            src={ex1}
                            alt="Tree"
                        />
                        <strong className="text-yellow-100 text-3xl">Preorder Traversal</strong><br /><br />
                        In preorder traversal, each node is processed before (pre) either of its subtrees. This is the
                        simplest traversal to understand. However, even though each node is processed before the
                        subtrees, it still requires that some information must be maintained while moving down the tree.
                        In the example above, 1 is processed first, then the left subtree, and this is followed by the right
                        subtree.<br /><br />
                        Therefore, processing must return to the right subtree after finishing the processing of the left
                        subtree. To move to the right subtree after processing the left subtree, we must maintain the root
                        information. The obvious ADT for such information is a stack. Because of its LIFO structure, it is
                        possible to get the information about the right subtrees back in the reverse order.
                        Preorder traversal is defined as follows: <br /><br />
                        <li>Visit the root.</li>
                        <li>Traverse the left subtree in Preorder.</li>
                        <li>Traverse the right subtree in Preorder.</li><br />
                        The nodes of tree would be visited in the order: 1 2 4 5 3 6 7
                        <img
                            className=" mt-10 ml-36"
                            src={treecode1}
                            alt="Tree"
                        />
                        <br /><br />
                        <strong className="text-yellow-100 text-3xl">Inorder Traversal</strong><br /><br />
                        In Inorder Traversal the root is visited between the subtrees. Inorder traversal is defined as
                        follows:
                        <br /><br />
                        <li>Traverse the left subtree in Inorder.</li>
                        <li>Visit the root.</li>
                        <li>Traverse the right subtree in Inorder.</li><br />
                        The nodes of tree would be visited in the order: 4 2 5 1 6 3 7
                        <img
                            className=" mt-10 ml-36"
                            src={treecode2}
                            alt="Tree"
                        />
                        <br /><br />
                        <strong className="text-yellow-100 text-3xl">Postorder Traversal</strong><br /><br />
                        In postorder traversal, the root is visited after both subtrees. Postorder traversal is defined as
                        follows:
                        <br /><br />
                        <li>Traverse the left subtree in Postorder.</li>
                        <li>Traverse the right subtree in Postorder.</li>
                        <li> Visit the root.</li><br />
                        The nodes of the tree would be visited in the order: 4 5 2 6 7 3 1
                        <img
                            className=" mt-10 ml-36"
                            src={treecode3}
                            alt="Tree"
                        />
                        <br /><br />
                        <strong className="text-yellow-100 text-3xl">Levelorder Traversal</strong><br /><br />
                        Level order traversal is defined as follows:
                        <br /><br />
                        <li>Visit the root.</li>
                        <li>While traversing level (, keep all the elements at level {"("} + 1 in queue.</li>
                        <li>Go to the next level and visit all the nodes at that level.</li>
                        <li> Repeat this until all levels are completed.</li>
                        <br />
                        The nodes of the tree are visited in the order: 1 2 3 4 5 6 7
                        <img
                            className=" mt-10 ml-36"
                            src={treecode4}
                            alt="Tree"
                        />
                    </div>
                   
                </div>
            </div>
        </>
    )
};

export default TreeDs;

