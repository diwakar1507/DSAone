const Selection = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Selection Sort</div>
            Selection sort is a simple comparison-based sorting algorithm. It is in-place and needs no extra memoryThe idea behind this algorithm is pretty simple. We divide the array into two parts: sorted and unsorted. The left part is sorted subarray and the right part is unsorted subarray. Initially, sorted subarray is empty and unsorted array is the complete given array.

            We perform the steps given below until the unsorted subarray becomes empty:

            <li>Pick the minimum element from the unsorted subarray.</li>
            <li>Swap it with the leftmost element of the unsorted subarray.</li>
            <li> Now the leftmost element of unsorted subarray becomes a part (rightmost) of sorted subarray and will not be a part of unsorted subarray.</li>
            <div className="text-3xl py-5 text-yellow-100">A selection sort works as follows : </div>
            This is our initial array A = [5, 2, 6, 7, 2, 1, 0, 3]



            Leftmost element of unsorted part = A[0]

            Minimum element of unsorted part = A[6]

            We will swap A[0] and A[6] then, make A[0] part of sorted subarray.



            Leftmost element of unsorted part = A[1]

            Minimum element of unsorted part = A[5]

            We will swap A[1] and A[5] then, make A[1] part of sorted subarray.



            Leftmost element of unsorted part = A[2]

            Minimum element of unsorted part = A[4]

            We will swap A[2] and A[4] then, make A[2] part of sorted subarray.



            Leftmost element of unsorted part = A[3]

            Minimum element of unsorted part = A[5]

            We will swap A[3] and A[5] then, make A[3] part of sorted subarray.



            Leftmost element of unsorted part = A[4]

            Minimum element of unsorted part = A[7]

            We will swap A[4] and A[7] then, make A[4] part of sorted subarray.



            Leftmost element of unsorted part = A[5]

            Minimum element of unsorted part = A[6]

            We will swap A[5] and A[6] then, make A[5] part of sorted subarray.



            Leftmost element of unsorted part = A[6]

            Minimum element of unsorted part = A[7]

            We will swap A[6] and A[7] then, make A[6] part of sorted subarray.



            This is the final sorted array.

            <div className="text-3xl py-5 text-yellow-100">Pseudocode</div>
            <div className="text-2xl py-5 text-yellow-100">FindMinIndex:</div>
            Suppose, there are ‘n’ elements in the array. Therefore, at worst case, there can be n iterations in FindMinIndex() for start = 1 and end = n. We did not take any auxiliary space.
            <br />
            Therefore,
            <br />
            <strong>Time complexity: O(n)</strong>
            <br />
            <strong>Space complexity: O(1)</strong>
        </div>

    );
}

export default Selection;