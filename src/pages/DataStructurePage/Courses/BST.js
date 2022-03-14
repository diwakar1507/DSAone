import React, { useEffect, useRef, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Tree from "../../../img/DataStructure/Tree/Tree.svg";
import bst1 from "../../../img/DataStructure/BST/bst1.png";
import bst2 from "../../../img/DataStructure/BST/bst2.png";
import bst3 from "../../../img/DataStructure/BST/bst3.png";
import bst4 from "../../../img/DataStructure/BST/bst4.png";
import bst5 from "../../../img/DataStructure/BST/bst5.png";
import bst6 from "../../../img/DataStructure/BST/bst6.png";


gsap.registerPlugin(ScrollTrigger);

const BSTDs = () => {
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
                        <div className="text-9xl text-yellow-200 py-9 font-display " ref={headingRef}> BST </div>
                        <div className="px-10  py-10 h-1/2" ref={StackRef}>
                            <div className="text-5xl w-5/6 text-white font-serif font-bold h-fit"> Let's learn about <br />Binary search tree it <br />will be fun...... </div>
                        </div>
                    </div>
                    <img
                        className=" mt-10"
                        src={Tree}
                        alt="Tree"
                        ref={image}
                    />
                </div>
                <div className="bg-primary-1 text text-2xl text-left text-slate-300 pb-24 pt-10 px-28 " ref={intro}>
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Introduction To BST</h1>
                    In previous sections we have discussed different tree representations and in all of them we did
                    not impose any restriction on the nodes data. As a result, to search for an element we need to
                    check both in left subtree and in right subtree. Due to this, the worst case complexity of search
                    operation is O(n).<br /><br />
                    In this section, we will discuss another variant of binary trees: Binary Search Trees (BSTs). As
                    the name suggests, the main use of this representation is for searching. In this representation we
                    impose restriction on the kind of data a node can contain. As a result, it reduces the worst case
                    average search operation to O(logn).

                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200"> BST Property</h1>
                    In binary search trees, all the left subtree elements should be less than root data and all the right
                    subtree elements should be greater than root data. This is called binary search tree property. Note
                    that, this property should be satisfied at every node in the tree.<br /><br />
                    <li> The left subtree of a node contains only nodes with keys less than the nodes key.</li>
                    <li>The right subtree of a node contains only nodes with keys greater than the nodes key.</li>
                    <li>Both the left and right subtrees must also be binary search trees.</li>
                    Example: The left tree is a binary search tree and the right tree is not a binary search tree (at
                    node 6 it’s not satisfying the binary search tree property).
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Binary Search Tree Declaration</h1>
                    There is no difference between regular binary tree declaration and binary search tree declaration.
                    The difference is only in data but not in structure. But for our convenience we change the structure
                    name as:
                    <img className="my-10"
                        src={bst1} />
                    <h2 className="text-5xl font-serif text-center py-10 text-yellow-200">Operations on Binary Search Trees</h2>
                    Main operations: Following are the main operations that are supported by binary search trees:<br /><br />
                    <li>Find/ Find Minimum / Find Maximum element in binary search trees</li>
                    <li>Inserting an element in binary search trees</li>
                    <li>Deleting an element from binary search trees</li>
                    <br />
                    <br />
                    Auxiliary operations: Checking whether the given tree is a binary search tree or not  <br /><br />
                    <li> Finding k-th smallest element in tree</li>
                    <li>Sorting the elements of binary search tree and many more</li>
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Important Notes on Binary Search Trees</h1>
                    <li>Since root data is always between left subtree data and right subtree data,
                        performing inorder traversal on binary search tree produces a sorted list.</li>
                    <li> While solving problems on binary search trees, first we process left subtree, then
                        root data, and finally we process right subtree. This means, depending on the
                        problem, only the intermediate step (processing root data) changes and we do not
                        touch the first and third steps.</li>
                    <li>If we are searching for an element and if the left subtree root data is less than the
                        element we want to search, then skip it. The same is the case with the right subtree..
                        Because of this, binary search trees take less time for searching an element than
                        regular binary trees. In other words, the binary search trees consider either left or
                        right subtrees for searching an element but not both.</li>
                    <li>The basic operations that can be performed on binary search tree (BST) are
                        insertion of element, deletion of element, and searching for an element. While
                        performing these operations on BST the height of the tree gets changed each time.
                        Hence there exists variations in time complexities of best case, average case, and
                        worst case.</li>
                    <li> The basic operations on a binary search tree take time proportional to the height of
                        the tree. For a complete binary tree with node n, such operations runs in O(lgn)
                        worst-case time. If the tree is a linear chain of n nodes (skew-tree), however, the
                        same operations takes O(n) worst-case time.
                    </li>
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Finding an Element in Binary Search Trees</h1>
                    Find operation is straightforward in a BST. Start with the root and keep moving left or right using
                    the BST property. If the data we are searching is same as nodes data then we return current node.
                    If the data we are searching is less than nodes data then search left subtree of current node;
                    otherwise search right subtree of current node. If the data is not present, we end up in a NULL
                    link.<br />
                    <img className="my-10"
                        src={bst2} />
                    Time Complexity: O(n), in worst case (when BST is a skew tree).
                    <br /> Space Complexity: O(n), for
                    recursive stack.
                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Finding Minimum Element in Binary Search Trees</h1>
                    In BSTs, the minimum element is the left-most node, which does not has left child. In the BST
                    below, the minimum element is 4.
                    <img className="my-10"
                        src={bst3} />
                    <br />Time Complexity: O(n), in worst case (when BST is a left skew tree).
                    <br /> Space Complexity: O(n), for recursive stack.

                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Finding Maximum Element in Binary Search Trees</h1>
                    In BSTs, the maximum element is the right-most node, which does not have right child. In the BST
                    below, the maximum element is 16.<br />
                    <img className="my-10"
                        src={bst4} />
                    Time Complexity: O(n), in worst case (when BST is a right skew tree).
                    <br /> Space Complexity: O(n), for recursive stack.

                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Insertion in Binary Tree</h1>
                    To insert data into binary search tree, first we need to find the location for that element. We can
                    find the location of insertion by following the same mechanism as that of find operation. While
                    finding the location, if the data is already there then we can simply neglect and come out.
                    Otherwise, insert data at the last location on the path traversed.<br /><br />
                    As an example let us consider the following tree. The dotted node indicates the element (5) to be
                    inserted. To insert 5, traverse the tree using find function. At node with key 4, we need to go right,
                    but there is no subtree, so 5 is not in the tree, and this is the correct location for insertion.
                    Note: In the above code, after inserting an element in subtrees, the tree is returned to its parent.
                    As a result, the complete tree will get updated.
                    <img className="my-10"
                        src={bst5} />
                    Time Complexity:O(n).
                    Space Complexity:O(n), for recursive stack. For iterative version, space complexity is O(1).

                    <h1 className="text-5xl font-serif text-center py-10 text-yellow-200">Deleting an Element from Binary Search Tree</h1>
                    The delete operation is more complicated than other operations. This is because the element to be
                    deleted may not be the leaf node. In this operation also, first we need to find the location of the
                    element which we want to delete.<br />
                    Once we have found the node to be deleted, consider the following cases:<br /><br />
                    <li>If the element to be deleted is a leaf node: return NULL to its parent. That means
                        make the corresponding child pointer NULL. In the tree below to delete 5, set NULL
                        to its parent node 2.</li>
                    <li>If the element to be deleted has one child: In this case we just need to send the
                        current node’s child to its parent. In the tree below, to delete 4, 4 left subtree is set
                        to its parent node 2.</li>
                    <li>If the element to be deleted has both children: The general strategy is to replace the
                        key of this node with the largest element of the left subtree and recursively delete
                        that node (which is now empty). The largest node in the left subtree cannot have a
                        right child, so the second delete is an easy one. As an example, let us consider the
                        following tree. In the tree below, to delete 8, it is the right child of the root. The key
                        value is 8. It is replaced with the largest key in its left subtree (7), and then that
                        node is deleted as before (second case).</li>
                    <img className="my-10"
                        src={bst6} />
                    Note: We can replace with minimum element in right subtree also.
                    <br />

                    Time Complexity: O(n). Space Complexity: O(n) for recursive stack. For iterative version, space
                    complexity is O(1).

                </div>



            </div>
        </>
    )
};

export default BSTDs;

