
const Knapsack = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">knapsack Problem</div>
            <div className="text-2xl py-5 text-yellow-100">Understanding the Problem:</div>
            We are given N items with their corresponding weights and values, we have a knapsack weighing W. We have to choose among these N items to put into the knapsack such that the value of the knapsack is maximum. For example:
            <strong>Input:</strong> items[] = [ [60, 10], [100, 20], [120, 30] ]<br /><br />
            Knapsack Capacity(capacity) = 50<br /><br />
            <strong>Output:</strong> Maximum possible value = 240<br /><br />
            <strong>Explanation:</strong> By taking full items of 10 kg, 20 kg and 2/3rd of last item of 30 kg. Total value = 60 + 100 + 120*2/3 = 240<br /><br />
            <div className="text-2xl py-5 text-yellow-100">Solution</div>
            <br />
            Here the problem is to find the maximum profit possible from the items[] and we are also allowed to take fractions of the items. This is an optimization problem which can be solved by applying greedy algorithm startegy. In this algorithm, we go on choosing the locally optimal choice (or the greedy choice) with a consideration that it will lead to globally optimal solution.
            <br />
            Lets think about the solution insights. Which item will you pick first (Greedy choice)? One startegy is to maximize the profit with every choice and pick the item with the largest ratio of value/weight. This will assure us that we will reach to the globally optimal profit. (Think!)

            <div className="text-2xl py-5 text-yellow-100">Solution steps</div>
            <li>Find the value/weight ratio for each given item.</li>
            <li>Sort the items based on the ratio of value/weight.</li>
            <li>Then start picking up the item with the highest ratio until that item is completely taken up. After that we will move to the next highest.</li>

        </div>
    );
}

export default Knapsack;