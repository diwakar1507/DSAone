
const BF = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8"> Bellman Ford's Algorithm</div>

            Bellman Ford algorithm helps us find the shortest path from a vertex to all other vertices of a weighted graph.

            It is similar to Dijkstra's algorithm but it can work with graphs in which edges can have negative weights.

            <div className="text-2xl py-5 text-yellow-100">Why would one ever have edges with negative weights in real life?</div>
            Negative weight edges might seem useless at first but they can explain a lot of phenomena like cashflow, the heat released/absorbed in a chemical reaction, etc.
            <br />
            For instance, if there are different ways to reach from one chemical A to another chemical B, each method will have sub-reactions involving both heat dissipation and absorption.
            <br />
            If we want to find the set of reactions where minimum energy is required, then we will need to be able to factor in the heat absorption as negative weights and heat dissipation as positive weights.
            <br />

            <div className="text-2xl py-5 text-yellow-100"> Why do we need to be careful with negative weights?</div>
            Negative weight edges can create negative weight cycles i.e. a cycle that will reduce the total path distance by coming back to the same point.

            <br />
            Shortest path algorithms like Dijkstra's Algorithm that aren't able to detect such a cycle can give an incorrect result because they can go through a negative weight cycle and reduce the path length.

            <div className="text-2xl py-5 text-yellow-100">How Bellman Ford's algorithm works</div>
            Bellman Ford algorithm works by overestimating the length of the path from the starting vertex to all other vertices. Then it iteratively relaxes those estimates by finding new paths that are shorter than the previously overestimated paths.

            <br />
            By doing this repeatedly for all vertices, we can guarantee that the result is optimized.
            <br />
            steps for bellman ford algorithm
            <br />
            Step-1 for Bellman Ford's algorithm
            <br />
            steps for bellman ford algorithm
            <br />
            Step-2 for Bellman Ford's algorithm
            <br />
            steps for bellman ford algorithm
            <br />
            Step-3 for Bellman Ford's algorithm
            <br />
            steps for bellman ford algorithm
            <br />
            Step-4 for Bellman Ford's algorithm
            steps for bellman ford algorithm
            Step-5 for Bellman Ford's algorithm
            steps for bellman ford algorithm
            Step-6 for Bellman Ford's algorithm
            <div className="text-2xl py-5 text-yellow-100">Bellman Ford's Complexity</div>
            <div className="text-2xl py-5 text-yellow-100">Time Complexity</div>
            Best Case Complexity	O(E)<br />
            Average Case Complexity	O(VE)<br />
            Worst Case Complexity	O(VE)<br />
            Space Complexity<br />
            And, the space complexity is O(V).<br />

            <div className="text-2xl py-5 text-yellow-100">Bellman Ford's Algorithm Applications</div>
            <li>For calculating shortest paths in routing algorithms</li>
            <li>For finding the shortest path</li>

        </div>
    );
}

export default BF;