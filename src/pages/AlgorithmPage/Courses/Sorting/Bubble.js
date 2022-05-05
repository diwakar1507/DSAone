import React from "react";
import one from "../../../../img/Algo/Bubble Sort/one.svg";
import two from "../../../../img/Algo/Bubble Sort/two.svg";
import three from "../../../../img/Algo/Bubble Sort/three.svg";
import four from "../../../../img/Algo/Bubble Sort/four.svg";
import five from "../../../../img/Algo/Bubble Sort/five.svg";
import six from "../../../../img/Algo/Bubble Sort/six.svg";
import seven from "../../../../img/Algo/Bubble Sort/seven.svg";
import eight from "../../../../img/Algo/Bubble Sort/eight.svg";
import nine from "../../../../img/Algo/Bubble Sort/nine.svg";
const Bubble = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Bubble Sort
      </div>
      <p className="pb-5">
        Bubble sort, also referred to as comparison sort, is a simple sorting
        algorithm that repeatedly goes through the list, compares adjacent
        elements and swaps them if they are in the wrong order. This is the most
        simplest algorithm and inefficient at the same time. Yet, it is very
        much necessary to learn about it as it represents the basic foundations
        of sorting.
      </p>
      <div className="pl-16 text-slate-50">
        <li>Table of Content</li>
        <li>Application</li>
        <li>Explanation</li>
        <li>Bubble Sort Example</li>
        <li>Pseudocode of Bubble sort algorithm</li>
        <li>Implementation of Bubble Sort algorithm</li>
        <li>Complexity Analysis</li>
        <li>FAQs</li>
      </div>
      <div className="text-3xl py-5 text-yellow-100">1.) Application</div>
      <div className="text-3xl py-5 text-yellow-100">
        Understand the working of Bubble sort
      </div>
      Bubble sort is mainly used in educational purposes for helping students
      understand the foundations of sorting. This is used to identify whether
      the list is already sorted. When the list is already sorted (which is the
      best-case scenario), the complexity of bubble sort is only O(n). In real
      life, bubble sort can be visualised when people in a queue wanting to be
      standing in a height wise sorted manner swap their positions among
      themselves until everyone is standing based on increasing order of
      heights.
      <div className="text-3xl py-5 text-yellow-100">Algorithm:</div> We compare
      adjacent elements and see if their order is wrong (i.e a[i] {">"} a[j] for
      1 {"<="} i {"<"} j {"<="} size of array; if array is to be in ascending
      order, and vice-versa). If yes, then swap them.
      <div className="text-3xl py-5 text-yellow-100">Explanation:</div>
      <li>
        Let us say, we have an array of length n. To sort this array we do the
        above step (swapping) for n - 1 passes.
      </li>
      <li>
        In simple terms, first, the largest element goes at its extreme right
        place then, second largest to the last by one place, and so on. In the
        ith pass, the ith largest element goes at its right place in the array
        by swappings.
      </li>
      <li>
        In mathematical terms, in ith pass, at least one element from (n - i +
        1) elements from start will go at its right place. That element will be
        the ith (for 1 {"<="} i {"<="} n - 1) largest element of the array.
        Because in the ith pass of the array, in the jth iteration (for 1 {"<="}{" "}
        j {"<="} n - i), we are checking if a[j] {">"} a[j + 1], and a[j] will
        always be greater than a[j + 1] when it is the largest element in range
        [1, n - i + 1]. Now we will swap it. This will continue until ith
        largest element is at the (n - i + 1)th position of the array.
      </li>
      <div className="text-3xl py-5 text-yellow-100">Bubble Sort Example:</div>
      Consider the following array: Arr=14, 33, 27, 35, 10. We need to sort this
      array using bubble sort algorithm.
      <br />
      <br />
      Initial array
      <br />
      <br />
      <img className="h-32 m-5 "src={one} />
      First Pass:
      <br />
      <br />
      We proceed with the first and second element i.e., Arr[0] and Arr[1].
      Check if 14 {">"} 33 which is false. So, no swapping happens and the array
      remains the same.
      <img className="h-32 m-5 " src={one} />
      We proceed with the second and third element i.e., Arr[1] and Arr[2].
      Check if 33 {">"} 27 which is true. So, we swap Arr[1] and Arr[2].
      <img className="h-44 m-5 " src={two} />
      Thus the array becomes:
      <img className="h-32 m-5 " src={three} />
      We proceed with the third and fourth element i.e., Arr[2] and Arr[3].
      Check if 33 {">"} 35 which is false. So, no swapping happens and the array
      remains the same.
      <img className="h-32 m-5 " src={three} />
      We proceed with the fourth and fifth element i.e., Arr[3] and Arr[4].
      Check if 35 {">"} 10 which is true. So, we swap Arr[3] and Arr[4].
      <img className="h-44 m-5 " src={four} />
      Thus, after swapping the array becomes:
      <img className="h-32 m-5 " src={five} />
      Thus, marks the end of the first pass, where the Largest element reaches
      its final(last) position. Second Pass:
      <br />
      <br />
      We proceed with the first and second element i.e., Arr[0] and Arr[1].
      Check if 14 {">"} 27 which is false. So, no swapping happens and the array
      remains the same.
      <img className="h-32 m-5 " src={five} />
      We now proceed with the second and third element i.e., Arr[1] and Arr[2].
      Check if 27 {">"} 33 which is false. So, no swapping happens and the array
      remains the same.
      <br />
      <br />
      We now proceed with the third and fourth element i.e., Arr[2] and Arr[3].
      Check if 33 {">"} 10 which is true. So, we swap Arr[2] and Arr[3].
      <img className="h-44 m-5 " src={six} />
      Now, the array becomes
      <img className="h-32 m-5 " src={seven} />
      Thus marks the end of second pass where the second largest element in the
      array has occupied its correct position
      <br />
      <br />
      Third Pass:
      <br />
      <br />
      After the third pass, the third largest element will be at the third last
      position in the array.
      <img className="h-32 m-5 " src={eight} />
      enter image description here
      <br />
      <br />
      . . i-th Pass:
      <br />
      <br />
      After the ith pass, the ith largest element will be at the ith last
      position in the array.
      <br />
      <br />
      . . n-th Pass:
      <br />
      <br />
      After the nth pass, the nth largest element(smallest element) will be at
      nth last position(1st position) in the array, where ‘n’ is the size of the
      array.
      <br />
      <br />
      After doing all the passes, we can easily see the array will be sorted.
      <br />
      <br />
      Thus, the sorted array will look like this.
      <img className="h-32 m-5 " src={nine} />
      <div className="text-3xl py-5 text-yellow-100">Complexity Analysist</div>
      <div className="text-2xl py-5 text-yellow-100">
        Time Complexity of Bubble sort
      </div>
      <div className="pl-5">
        <li>
          Best case scenario: The best case scenario occurs when the array is
          already sorted. In this case, no swapping will happen in the first
          iteration (The swapped variable will be false). So, when this happens,
          we break from the loop after the very first iteration. Hence, time
          complexity in the best case scenario is O(n) because it has to
          traverse through all the elements once.
        </li>
        <li>
          Worst case and Average case scenario: In Bubble Sort, n-1 comparisons
          are done in the 1st pass, n-2 in 2nd pass, n-3 in 3rd pass and so on.
          So, the total number of comparisons will be:
        </li>
      </div>
      Sum = (n-1) + (n-2) + (n-3) + ..... + 3 + 2 + 1 <br />
      Sum = n(n-1)/2
      <br />
      <br />
      Hence, the time complexity is of the order n2 or O(n2).
      <div className="text-2xl py-5 text-yellow-100">
        Space Complexity of Bubble sort{" "}
      </div>
      The space complexity for the algorithm is O(1), because only a single
      additional memory space is required i.e. for temporary variable used for
      swapping.
      <div className="text-3xl py-5 text-yellow-100">FAQs</div>
      <div className="pl-5">
        <li>What is the best case time complexity of bubble sort?</li>
        The time complexity in the best case scenario is O(n) because it has to
        traverse through all the elements once to recognize that the array is
        already sorted.
        <li>
          What is the advantage of bubble sort over other sorting techniques?
        </li>
        The built-in ability to detect whether the list is sorted efficiently is
        the only advantage of bubble sort over other sorting techniques. When
        the list is already sorted (which is the best-case scenario), the
        complexity of bubble sort is only O(n). It is faster than other in case
        of sorted array and consumes less time to describe whether the input
        array is sorted or not.
        <li>Why bubble sort is called “bubble” sort?</li>
        The “bubble” sort is called so because the list elements with greater
        value than their surrounding elements “bubble” towards the end of the
        list. For example, after first pass, the largest element is bubbled
        towards the right most position. After second pass, the second largest
        element is bubbled towards the second last position in the list and so
        on.
        <li>Is bubble sort a stable algorithm?</li>
        Bubble sort is a stable algorithm. A sorting algorithm is said to be
        stable if two objects with equal keys appear in the same order in sorted
        output as they appear in the input array to be sorted.
        <li>Is bubble sort an inplace algorithm?</li>
        Bubble sort is an inplace algorithm. An algorithm is said to be inplace
        if it does not need an extra space and produces an output in the same
        memory that contains the data by transforming the input ‘in-place’.
        However, a small constant extra space used for variables is allowed.
        <li>Is Bubble sort slow?</li>
        Bubble sort is slower than the other O(n2) sorting algorithms. It is
        about four times as slow as insertion sort and twice as slow as
        selection sort. It has a good best-case behavior, but is impractically
        slow on almost all real world data sets and is not considered for
        implementation in real applications.
        <li>Can bubble sort be implemented recursively?</li>
        Yes. Recursive Bubble Sort has no additional performance/implementation
        advantages, but can be used to understand recursion and sorting concepts
        better. Base Case: If array size is 1, return. Do One Pass of normal
        Bubble Sort. This pass bubbles largest element of current subarray to
        correct position. Recur for all elements except last of current
        subarray.
      </div>
    </div>
  );
};
export default Bubble;
