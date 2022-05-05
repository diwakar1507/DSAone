import one from "../../../../img/Algo/Selection Sort/one.svg";
import two from "../../../../img/Algo/Selection Sort/two.svg";
import three from "../../../../img/Algo/Selection Sort/three.svg";
import four from "../../../../img/Algo/Selection Sort/four.svg";
import five from "../../../../img/Algo/Selection Sort/five.svg";
import six from "../../../../img/Algo/Selection Sort/six.svg";
import seven from "../../../../img/Algo/Selection Sort/seven.svg";
import eight from "../../../../img/Algo/Selection Sort/eight.svg";
import nine from "../../../../img/Algo/Selection Sort/nine.svg";
const Selection = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Selection Sort
      </div>
      Selection sort is a simple comparison-based sorting algorithm. It is
      in-place and needs no extra memoryThe idea behind this algorithm is pretty
      simple. We divide the array into two parts: sorted and unsorted. The left
      part is sorted subarray and the right part is unsorted subarray.
      Initially, sorted subarray is empty and unsorted array is the complete
      given array. We perform the steps given below until the unsorted subarray
      becomes empty:
      <li>Pick the minimum element from the unsorted subarray.</li>
      <li>Swap it with the leftmost element of the unsorted subarray.</li>
      <li>
        Now the leftmost element of unsorted subarray becomes a part (rightmost)
        of sorted subarray and will not be a part of unsorted subarray.
      </li>
      <div className="text-3xl py-5 text-yellow-100">
        A selection sort works as follows :
      </div>
      <img className="h-32 m-5 " src={one} />
      This is our initial array A = [5, 2, 6, 7, 2, 1, 0, 3]
      <img className="h-32 m-5 " src={two} />
      Leftmost element of unsorted part = A[0]
      <br />
      Minimum element of unsorted part = A[6]
      <br />
      We will swap A[0] and A[6] then, make A[0] part of sorted subarray.
      <img className="h-32 m-5 " src={three} />
      Leftmost element of unsorted part = A[1]
      <br />
      Minimum element of unsorted part = A[5]
      <br />
      We will swap A[1] and A[5] then, make A[1] part of sorted subarray.
      <img className="h-32 m-5 " src={four} />
      Leftmost element of unsorted part = A[2]
      <br />
      Minimum element of unsorted part = A[4]
      <br />
      We will swap A[2] and A[4] then, make A[2] part of sorted subarray.
      <img className="h-32 m-5 " src={five} />
      Leftmost element of unsorted part = A[3]
      <br />
      Minimum element of unsorted part = A[5]
      <br />
      We will swap A[3] and A[5] then, make A[3] part of sorted subarray.
      <img className="h-32 m-5 " src={six} />
      Leftmost element of unsorted part = A[4]
      <br />
      Minimum element of unsorted part = A[7]
      <br />
      We will swap A[4] and A[7] then, make A[4] part of sorted subarray.
      <img className="h-32 m-5 " src={seven} />
      Leftmost element of unsorted part = A[5]
      <br />
      Minimum element of unsorted part = A[6]
      <br />
      We will swap A[5] and A[6] then, make A[5] part of sorted subarray.
      <img className="h-32 m-5 " src={eight} />
      Leftmost element of unsorted part = A[6]
      <br />
      Minimum element of unsorted part = A[7]
      <br />
      We will swap A[6] and A[7] then, make A[6] part of sorted subarray.
      <img className="h-32 m-5 " src={nine} />
      This is the final sorted array.
     
      <div className="text-2xl py-5 text-yellow-100">FindMinIndex:</div>
      Suppose, there are ‘n’ elements in the array. Therefore, at worst case,
      there can be n iterations in FindMinIndex() for start = 1 and end = n. We
      did not take any auxiliary space.
      <br />
      Therefore,
      <br />
      <strong>Time complexity: O(n)</strong>
      <br />
      <strong>Space complexity: O(1)</strong>
    </div>
  );
};

export default Selection;
