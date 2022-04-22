const Linear = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Linear Search
      </div>
      This algorithm works by sequentially iterating through the whole array or
      list from one end until the target element is found. If the element is
      found, it returns its index, else -1.
      <br />
      Now let's look at an example and try to understand how it works:
      <br />
      arr = [2, 12, 15, 11, 7, 19, 45]
      <br />
      Suppose the target element we want to search is 7.
      <div className="text-2xl py-5 text-yellow-100">
        Approach for Linear or Sequential Search
      </div>
      <li>Start with index 0 and compare each element with the target</li>
      <li>
        If the target is found to be equal to the element, return its index
      </li>
      <li>If the target is not found, return -1</li>
      <div className="text-2xl py-5 text-yellow-100">Code Implementation</div>
      <div className="text-2xl py-5 text-yellow-100">
        Time Complexity Analysis
      </div>
      <li>
        <strong>The Best Case </strong>occurs when the target element is the
        first element of the array. The number of comparisons, in this case, is
        1. So, the time complexity is O(1).
      </li>
      <li>
        <strong>The Average Case:</strong> On average, the target element will
        be somewhere in the middle of the array. The number of comparisons, in
        this case, will be N/2. So, the time complexity will be O(N) (the
        constant being ignored).
      </li>
      <li>
        <strong>The Worst Case</strong> occurs when the target element is the
        last element in the array or not in the array. In this case, we have to
        traverse the entire array, and so the number of comparisons will be N.
        So, the time complexity will be O(N).
      </li>
    </div>
  );
};
export default Linear;
