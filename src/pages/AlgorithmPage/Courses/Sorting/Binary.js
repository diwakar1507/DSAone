const Binary = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Binary Search</div>
            This type of searching algorithm is used to find the position of a specific value contained in a sorted array. The binary search algorithm works on the principle of divide and conquer and it is considered the best searching algorithm because it's faster to run.
            <br />
            Now let's take a sorted array as an example and try to understand how it works:
            <br />
            arr = [2, 12, 15, 17, 27, 29, 45]
            <br />
            Suppose the target element to be searched is  17.
            <br />
            <div className="text-2xl py-5 text-yellow-100">Approach for Binary Search</div>

            <li>Compare the target element with the middle element of the array.</li>
            <li>If the target element is greater than the middle element, then the search continues in the right half.</li>
            <li>Else if the target element is less than the middle value, the search continues in the left half.</li>
            <li>This process is repeated until the middle element is equal to the target element, or the target element is not in the array</li>
            <li>If the target element is found, its index is returned, else -1 is returned.</li>
            <div className="text-2xl py-5 text-yellow-100">Code Implementation</div>
            <div className="text-2xl py-5 text-yellow-100">Time Complexity Analysis</div>
            <li><strong>The Best Case </strong>occurs when the target element is the middle element of the array. The number of comparisons, in this case, is 1. So, the time complexity is O(1).</li>
            <li> <strong>The Average Case:</strong>On average, the target element will be somewhere in the array. So, the time complexity will be O(logN). </li>
            <li><strong>The Worst Case</strong>occurs when the target element is not in the list or it is away from the middle element. So, the time complexity will be O(logN).</li>
        </div>
    );
}
export default Binary;