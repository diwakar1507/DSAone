
import one from "../../../../img/Algo/Merge Sort/one.svg";
import two from "../../../../img/Algo/Merge Sort/two.svg";
const Merge = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Merge Sort</div>
            Merge sort is one of the most efficient sorting algorithms. It works on the principle of Divide and Conquer. Merge sort repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.
            <div className="text-3xl py-5 text-yellow-100">A merge sort works as follows: </div>
            <div className="text-2xl py-5 text-yellow-100">Top-down Merge Sort Implementation:</div>
            The top-down merge sort approach is the methodology which uses recursion mechanism. It starts at the Top and proceeds downwards, with each recursive turn asking the same question such as “What is required to be done to sort the array?” and having the answer as, “split the array into two, make a recursive call, and merge the results.”, until one gets to the bottom of the array-tree.
            <br />
            Example: Let us consider an example to understand the approach better.
            <li> Divide the unsorted list into n sublists, each comprising 1 element (a list of 1 element is supposed sorted).</li>
            <img src={one.svg} />
            <li>Repeatedly merge sublists to produce newly sorted sublists until there is only 1 sublist remaining. This will be the sorted list.</li>
            <div className="text-2xl py-5 text-yellow-100">Merging of two lists done as follows:</div>
            The first element of both lists is compared. If sorting in ascending order, the smaller element among two becomes a new element of the sorted list. This procedure is repeated until both the smaller sublists are empty and the newly combined sublist covers all the elements of both the sublists.
            <img src={two.svg} />
        </div>
    );
}

export default Merge;