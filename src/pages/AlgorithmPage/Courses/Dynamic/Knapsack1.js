
const Knapsack1 = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8"> Bellman Ford's Algorithm</div>

            <div className="text-2xl py-5 text-yellow-100">Introduction</div>
            Given a Knapsack/Bag with W weight capacity and a list of N items with given vi value and wi weight. Put these items in the knapsack in order to maximise the value of all the placed items without exceeding the limit of the Knapsack.

            <div className="text-2xl py-5 text-yellow-100">0-1 Knapsack Problem</div>
            <br />
            The problem remains the same but one cannot break the items you can either select it fully ( 1) or don’t select it (0 ).
            <br />
            Example of 0-1 Knapsack :
            <div className="text-2xl py-5 text-yellow-100">Method 1 (Using Bruteforce Recursion):</div>
            Our approach with recursion will be to try and create all the subsets of items with total weight less than that of the given capacity W. From the result we will return the subset with maximum value.
            <br />
            For every element we can,
            <br />
            either select it or, <br />
            ignore and move forward. <br />
            If we select an item then its value will be added to our current value and weight will be subtracted from the current available space.
            <br />
            Thus, if we take the maximum value out of both the calculated result for nth element i.e. result after selecting that element and after ignoring it, we can get to our desired answer.
            <div className="text-2xl py-5 text-yellow-100">Method 2 (Using Dynamic Programming):</div>
            In the above approach we can observe that we are calling recursion for same sub problems again and again thus resulting in overlapping subproblems thus we can make use of Dynamic programming to solve 0-1 Knapsack problem.
            <br />
            For Example :
        </div>
    );
}

export default Knapsack1;