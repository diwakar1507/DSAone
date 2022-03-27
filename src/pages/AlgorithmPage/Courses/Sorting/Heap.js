import one from "../../../../img/Algo/Heap Sort/one.svg";
import two from "../../../../img/Algo/Heap Sort/two.svg";
import three from "../../../../img/Algo/Heap Sort/three.svg";
import four from "../../../../img/Algo/Heap Sort/four.svg";

import React from "react";
const Heap = () => {

    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Heap Sort</div>
            Heaps can be used in sorting an array. In max-heaps, maximum element will always be at the root. Heap Sort uses this property of heap to sort the array.

            Consider an array Arr which is to be sorted using Heap Sort.

            <li> Initially build a max heap of elements in Arr.</li>
            <li>The root element, that is ,Arr[1] will contain maximum element of Arr . After that, swap this element with the last element of Arr and heapify the max heap excluding the last element which is already in its correct position and then decrease the length of heap by one.</li>
            <li>Repeat the step 2, until all the elements are in their correct position.</li>
            <div className="text-3xl py-5 text-yellow-100">Implementation:</div>
            <div className="text-3xl py-5 text-yellow-100">Complexity</div>
            max_heapify has complexity O(logN) , build_maxheap has complexity O(N) and we run max_heapify N-1 times in heap_sort function, therefore complexity of heap_sort function is O(NlogN)

            <div className="text-3xl py-5 text-yellow-100">Example:</div>
            In the diagram below,initially there is an unsorted array Arr having 6 elements and then max-heap will be built.
            <img src={one.svg} />
            After building max-heap, the elements in the array  will be:
            <img src={two.svg} />
            enter image description here
            <br />
            <li>Step 1: 8 is swapped with 5.</li>
            <li>Step 2: 8 is disconnected from heap as 8 is in correct position now and.</li>
            <li>Step 3: Max-heap is created and 7 is swapped with 3.</li>
            <li>Step 4: 7 is disconnected from heap.</li>
            <li>Step 5: Max heap is created and 5 is swapped with 1.</li>
            <li>Step 6: 5 is disconnected from heap.</li>
            <li>Step 7: Max heap is created and 4 is swapped with 3.</li>
            <li>Step 8: 4 is disconnected from heap.</li>
            <li>Step 9: Max heap is created and 3 is swapped with 1.</li>
            <li>Step 10: 3 is disconnected.</li>
            <img src={three.svg} />
            After all the steps, we will get a sorted array.
            <img src={four.svg} />
        </div>

    );
}
export default Heap;