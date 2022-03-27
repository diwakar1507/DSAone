import one from "../../../../img/Algo/DFS/one.svg";
import two from "../../../../img/Algo/DFS/two.svg";
import three from "../../../../img/Algo/DFS/three.svg";
import four from "../../../../img/Algo/DFS/four.svg";
import five from "../../../../img/Algo/DFS/five.svg";
import six from "../../../../img/Algo/DFS/six.svg";
const Dfs = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Breadth First Search</div>
            Depth first Search or Depth first traversal is a recursive algorithm for searching all the vertices of a graph or tree data structure. Traversal means visiting all the nodes of a graph.
            <br /><br />
            A standard DFS implementation puts each vertex of the graph into one of two categories:

            <li> Visited</li>
            <li>Not Visited</li>
            <br /><br />
            The purpose of the algorithm is to mark each vertex as visited while avoiding cycles.
            The DFS algorithm works as follows:
            <li>Start by putting any one of the graph's vertices on top of a stack.</li>
            <li>Take the top item of the stack and add it to the visited list.</li>
            <li>Create a list of that vertex's adjacent nodes. Add the ones which aren't in the visited list to the top of the stack.</li>
            <li>Keep repeating steps 2 and 3 until the stack is empty.</li>
            <div className="text-3xl py-5 text-yellow-100">DFS Example</div>
            Let's see how the Depth First Search algorithm works with an example. We use an undirected graph with 5 vertices.
            <img src={one.svg} />
            We start from vertex 0, the DFS algorithm starts by putting it in the Visited list and putting all its adjacent vertices in the stack.
            <img src={two.svg} />
            Next, we visit the element at the top of stack i.e. 1 and go to its adjacent nodes. Since 0 has already been visited, we visit 2 instead.
            <img src={three.svg} />
            Vertex 2 has an unvisited adjacent vertex in 4, so we add that to the top of the stack and visit it.
            <img src={four.svg} />
            <img src={five.svg} />
            After we visit the last element 3, it doesn't have any unvisited adjacent nodes, so we have completed the Depth First Traversal of the graph.
            <img src={six.svg} />
        </div>
    );
}

export default Dfs;