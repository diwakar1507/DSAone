import one from "../../../../img/Algo/Insertion Sort/one.svg";
import two from "../../../../img/Algo/Insertion Sort/two.svg";
import three from "../../../../img/Algo/Insertion Sort/three.svg";
import four from "../../../../img/Algo/Insertion Sort/four.svg";

const Insertion = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Insertion Sort</div>
            <p className="pb-5">Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. The array elements are compared with each other sequentially and then arranged simultaneously in some particular order. The analogy can be understood from the style we arrange a deck of cards. This sort works on the principle of inserting an element at a particular position, hence the name Insertion Sort.</p>
            <div className="pl-16 text-slate-50"><li>Table of Content</li>
                <li>Working</li>
                <li>Pseudocode</li>
                <li>Insertion Sort Example</li>
                <li>Complexity Analysis</li>
            </div>
            <div className="text-3xl py-5 text-yellow-100">Understand the working of Quick sort</div>
            <div className="pl-5 text-slate-50">
                <li> The first step involves the comparison of the element in question with its adjacent element.</li>
                <li> And if at every comparison reveals that the element in question can be inserted at a particular position, then space is created for it by shifting the other elements one position to the right and inserting the element at the suitable position.</li>
                <li> The above procedure is repeated until all the element in the array is at their apt position.</li>
            </div>

            Let us now understand working with the following example:<br />
            Consider the following array: 25, 17, 31, 13, 2<br />
            First Iteration: Compare 25 with 17. The comparison shows 17{'<'} 25. Hence swap 17 and 25.<br />
            The array now looks like : 17, 25, 31, 13, 2
            <img src={one.svg} />
            <br />
            Second Iteration: Begin with the second element (25), but it was already swapped on for the correct position, so we move ahead to the next element.
            <br />
            Now hold on to the third element (31) and compare with the ones preceding it . Since 31{'>'} 25, no swapping takes place. Also, 31{'>'}17, no swapping takes place and 31 remains at its position.
            <br />
            The array after the Second iteration looks like: 17, 25, 31, 13, 2
            <img src={two.svg} />
            Third Iteration: Start the following Iteration with the fourth element (13), and compare it with its preceding elements. Since 13{'<'} 31, we swap the two.
            <br />
            Array now becomes: 17, 25, 13, 31, 2.
            <br />
            But there still exist elements that we haven’t yet compared with 13. Now the comparison takes place between 25 and 13. Since, 13 {'<'} 25, we swap the two.
            <br />
            The array becomes 17, 13, 25, 31, 2.
            <br />
            The last comparison for the iteration is now between 17 and 13. Since 13 {'<'} 17, we swap the two.
            <br />
            The array now becomes 13, 17, 25, 31, 2.
            <img src={three.svg} />
            Fourth Iteration: The last iteration calls for the comparison of the last element (2), with all the preceding elements and make the appropriate swapping between elements. Since, 2{'<'} 31. Swap 2 and 31.
            <br />
            Array now becomes: 13, 17, 25, 2, 31.
            <br />
            Compare 2 with 25, 17, 13 . Since, 2{'<'} 25. Swap 25 and 2.
            <br />
            13, 17, 2, 25, 31.
            <br />
            Compare 2 with 17 and 13.Since, 2{'<'}17. Swap 2 and 17.<br />
            Array now becomes: 13, 2, 17, 25, 31.
            <br />
            The last comparison for the Iteration is to compare 2 with 13 . Since 2{'<'} 13. Swap 2 and 13.
            <br />
            The array now becomes: 2, 13, 17, 25, 31.
            <br />
            This is the final array after all the corresponding iterations and swapping of elements.
            <img src={four.svg} />
            <div className="text-3xl py-5 text-yellow-100">Time Complexity Analysis:</div>
            Even though insertion sort is efficient, still, if we provide an already sorted array to the insertion sort algorithm, it will still execute the outer for loop, thereby requiring n steps to sort an already sorted array of n elements, which makes its best case time complexity a linear function of n.
            <br /><br />
            Wherein for an unsorted array, it takes for an element to compare with all the other elements which mean every n element compared with all other n elements. Thus, making it for n x n, i.e., n2 comparisons. One can also take a look at other sorting algorithms such as Merge sort, Quick Sort, Selection Sort, etc. and understand their complexities.
            <strong>Worst Case Time Complexity [ Big-O ]: O(n2)</strong><br />
            <strong>Best Case Time Complexity [Big-omega]: O(n)</strong> <br />
            <strong>Average Time Complexity [Big-theta]: O(n2)</strong> <br />

        </div>

    );
}

export default Insertion;