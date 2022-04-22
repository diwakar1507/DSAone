import React from "react";
import one from "../../../../img/Algo/Quick Sort/one.svg";
const Quick = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Quick Sort
      </div>
      <p className="pb-5">
        The algorithm was developed by a British computer scientist Tony Hoare
        in 1959. The name "Quick Sort" comes from the fact that, quick sort is
        capable of sorting a list of data elements significantly faster (twice
        or thrice faster) than any of the common sorting algorithms. It is one
        of the most efficient sorting algorithms and is based on the splitting
        of an array (partition) into smaller ones and swapping (exchange) based
        on the comparison with 'pivot' element selected. Due to this, quick sort
        is also called as "Partition Exchange" sort. Like Merge sort, Quick sort
        also falls into the category of divide and conquer approach of
        problem-solving methodology.
      </p>
      <div className="pl-16 text-slate-50">
        <li>Table of Content</li>
        <li>Application</li>
        <li>Explanation</li>
        <li>Quick Sort Example</li>
        <li>Pseudocode of Quick sort algorithm</li>
        <li>Implementation of Quick Sort algorithm</li>
        <li>Complexity Analysis</li>
        <li>FAQs</li>
      </div>
      <div className="text-3xl py-5 text-yellow-100">1.) Application</div>
      <div className="text-3xl py-5 text-yellow-100">
        Understand the working of Quick sort
      </div>
      Before diving into any algorithm, its very much necessary for us to
      understand what are the real world applications of it. Quick sort provides
      a fast and methodical approach to sort any lists of things. Following are
      some of the applications where quick sort is used.
      <div className="pl-16 text-slate-50">
        <li>
          Commercial computing: Used in various government and private
          organizations for the purpose of sorting various data like sorting of
          accounts/profiles by name or any given ID, sorting transactions by
          time or locations, sorting files by name or date of creation etc.
        </li>
        <li>
          {" "}
          Numerical computations: Most of the efficiently developed algorithms
          use priority queues and inturn sorting to achieve accuracy in all the
          calculations.
        </li>
        <li>
          Information search: Sorting algorithms aid in better search of
          information and what faster way exists than to achieve sorting using
          quick sort.
        </li>
        Basically, quick sort is used everywhere for faster results and in the
        cases where there are space constraints.
      </div>
      <div className="text-3xl py-5 text-yellow-100">2.) Explanation:</div>
      Taking the analogical view in perspective, consider a situation where one
      had to sort the papers bearing the names of the students, by name from
      A-Z. One might use the approach as follows:
      <div className="pl-16 text-slate-50">
        <li>
          Select any splitting value, say L. The splitting value is also known
          as Pivot.
        </li>
        <li>
          Divide the stack of papers into two. A-L and M-Z. It is not necessary
          that the piles should be equal.
        </li>
        <li>
          Repeat the above two steps with the A-L pile, splitting it into its
          significant two halves. And M-Z pile, split into its halves. The
          process is repeated until the piles are small enough to be sorted
          easily.
        </li>
        <li>
          Ultimately, the smaller piles can be placed one on top of the other to
          produce a fully sorted and ordered set of papers.
        </li>
        <li>
          The approach used here is reduction at each split to get to the
          single-element array.
        </li>
        <li>
          At every split, the pile was divided and then the same approach was
          used for the smaller piles by using the method of recursion.
        </li>
      </div>
      Technically, quick sort follows the below steps:
      <strong>Step 1 −</strong> Make any element as pivot.
      <br />
      <strong>Step 2 −</strong>Partition the array on the basis of pivot
      <br />
      <strong>Step 3 −</strong> Apply quick sort on left partition recursively
      <br />
      <strong>Step 4 −</strong>Apply quick sort on right partition recursively
      <br />
      <div className="text-3xl py-5 text-yellow-100">Quick Sort Example:</div>
      <div className="text-2xl pb-5 text-yellow-100">Problem Statement</div>
      Consider the following array: 50, 23, 9, 18, 61, 32. We need to sort this
      array in the most efficient manner without using extra place (inplace
      sorting).
      <div className="text-2xl py-5 text-yellow-100">Solution</div>
      <strong>Step 1:</strong>
      <br />
      <li>
        Make any element as pivot: Decide any value to be the pivot from the
        list. For convenience of code, we often select the rightmost index as
        pivot or select any at random and swap with rightmost. Suppose for two
        values “Low” and “High” corresponding to the first index and last index
        respectively.
        <li>In our case low is 0 and high is 5.</li>
        <li> Values at low and high are 50 and 32 and value at pivot is 32.</li>
      </li>
      <li>
        Partition the array on the basis of pivot: Call for partitioning which
        rearranges the array in such a way that pivot (32) comes to its actual
        position (of the sorted array). And to the left of the pivot, the array
        has all the elements less than it, and to the right greater than it.
        <li>
          In the partition function, we start from the first element and compare
          it with the pivot. Since 50 is greater than 32, we don’t make any
          change and move on to the next element 23.
        </li>
        <li>
          {" "}
          Compare again with the pivot. Since 23 is less than 32, we swap 50 and
          23. The array becomes 23, 50, 9, 18, 61, 32
        </li>
        <li>
          {" "}
          We move on to the next element 9 which is again less than pivot (32)
          thus swapping it with 50 makes our array as 23, 9, 50, 18, 61, 32.
        </li>
        <li>
          Similarly, for next element 18 which is less than 32, the array
          becomes 23, 9, 18, 50, 61, 32. Now 61 is greater than pivot (32),
          hence no changes.
        </li>
        <li>
          {" "}
          Lastly, we swap our pivot with 50 so that it comes to the correct
          position.
        </li>
      </li>
      Thus the pivot (32) comes at its actual position and all elements to its
      left are lesser, and all elements to the right are greater than itself.
      <strong>Step 2:</strong>
      <br /> The main array after the first step becomes 23, 9, 18, 32, 61, 50
      <strong>Step 3:</strong>
      <br /> Now the list is divided into two parts:
      <li>Sublist before pivot element</li>
      <li>Sublist before pivot element</li>
      <strong> Step 4: </strong>
      <br />
      Repeat the steps for the left and right sublists recursively. The final
      array thus becomes 9, 18, 23, 32, 50, 61.
      <br />
      The following diagram depicts the workflow of the Quick Sort algorithm
      which was described above.
      <img src={one} />
      <div className="text-3xl py-5 text-yellow-100">Complexity Analysist</div>
      <div className="text-2xl py-5 text-yellow-100">
        Time Complexity of Quick sort
      </div>
      <div className="pl-5">
        <li>
          Best case scenario: The best case scenario occurs when the partitions
          are as evenly balanced as possible, i.e their sizes on either side of
          the pivot element are either are equal or are have size difference of
          1 of each other.
          <li>
            Case 1: The case when sizes of sublist on either side of pivot
            becomes equal occurs when the subarray has an odd number of elements
            and the pivot is right in the middle after partitioning. Each
            partition will have (n-1)/2 elements.
          </li>
          <li>
            Case 2: The size difference of 1 between the two sublists on either
            side of pivot happens if the subarray has an even number, n, of
            elements. One partition will have n/2 elements with the other having
            (n/2)-1.
          </li>
        </li>
        In either of these cases, each partition will have at most n/2 elements,
        and the tree representation of the subproblem sizes will be as below:
        <br />
        The best-case complexity of the quick sort algorithm is O(n logn)
        <li>
          Worst case Scenario: This happens when we encounter the most
          unbalanced partitions possible, then the original call takes n time,
          the recursive call on n-1 elements will take (n-1) time, the recursive
          call on (n-2) elements will take (n-2) time, and so on. The worst case
          time complexity of Quick Sort would be O(n2).
        </li>
      </div>
      <div className="text-2xl py-5 text-yellow-100">
        Space Complexity of Quick sort{" "}
      </div>
      The space complexity is calculated based on the space used in the
      recursion stack. The worst case space used will be O(n) . The average case
      space used will be of the order O(log n). The worst case space complexity
      becomes O(n), when the algorithm encounters its worst case where for
      getting a sorted list, we need to make n recursive calls.
      <div className="text-3xl py-5 text-yellow-100">FAQs</div>
      <div className="pl-5">
        <li>What is the average case run time complexity of Quick Sort?</li>
        The average case run time of quick sort is O(n logn) . This case happens
        when we dont exactly get evenly balanced partitions. We might get at
        worst a 3-to-1 split on either side of pivot element. The proof of this
        is quite mathematically rigorous and is out of scope of the discussion.
        <li>Is Quick Sort a stable algorithm?</li>
        Quick sort is not a stable algorithm because the swapping of elements is
        done according to pivot’s position (without considering their original
        positions). A sorting algorithm is said to be stable if it maintains the
        relative order of records in the case of equality of keys.
        <li>Is Quick Sort an inplace algorithm?</li>
        Quick sort is an inplace algorithm which means the numbers are all
        sorted within the original array itself.
        <li>
          Why Quick Sort is better than Merge Sort?
          <li>
            Auxiliary Space : Quick sort is an in-place sorting algorithm
            whereas Merge sort uses extra space. In-place sorting means no
            additional storage space is used to perform sorting (except
            recursion stack). Merge sort requires a new temporary array to merge
            the sorted arrays thereby making Quick sort the better option.
          </li>
          <li>
            Worst Cases : The worst case runtime of quick sort is O(n2) can be
            avoided by using randomized quicksort as explained in the previous
            point. Obtaining average case behavior by choosing random pivot
            element improves the performance and becomes as efficient as merge
            sort.
          </li>
          <li>
            Cache Friendly: Quick Sort is also a cache friendly sorting
            algorithm as it has good locality of reference when used for arrays.
          </li>
        </li>
        <li>Where is quick sort used?</li>
        Quick sort is basically used to sort any list in fast and efficient
        manner. Since the algorithm is inplace, quick sort is used when we have
        restrictions in space availability too. Please refer to the Application
        section for further details.
      </div>
    </div>
  );
};
export default Quick;
