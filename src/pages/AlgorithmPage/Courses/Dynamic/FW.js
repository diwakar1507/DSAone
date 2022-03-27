
const FW = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8"> Bellman Ford's Algorithm</div>
            Floyd-Warshall Algorithm is an algorithm for finding the shortest path between all the pairs of vertices in a weighted graph. This algorithm works for both the directed and undirected weighted graphs. But, it does not work for the graphs with negative cycles (where the sum of the edges in a cycle is negative).
            <br />
            A weighted graph is a graph in which each edge has a numerical value associated with it.
            <br />
            Floyd-Warhshall algorithm is also called as Floyd's algorithm, Roy-Floyd algorithm, Roy-Warshall algorithm, or WFI algorithm.
            <br />
            This algorithm follows the dynamic programming approach to find the shortest paths.
            <br />
            <div className="text-2xl py-5 text-yellow-100"> How Floyd-Warshall Algorithm Works? </div>
            Let the given graph be:
            <br />
            graph
            Initial graph

            Follow the steps below to find the shortest path between all the pairs of vertices.
            <br />
            <li>Create a matrix A0 of dimension n*n where n is the number of vertices. The row and the column are indexed as i and j respectively. i and j are the vertices of the graph.</li>
            <br />
            Each cell A[i][j] is filled with the distance from the ith vertex to the jth vertex. If there is no path from ith vertex to jth vertex, the cell is left as infinity.
            matrix floyd warshall algorithm
            Fill each cell with the distance between ith and jth vertex
            <li>Now, create a matrix A1 using matrix A0. The elements in the first column and the first row are left as they are. The remaining cells are filled in the following way.</li>
            <br />
            Let k be the intermediate vertex in the shortest path from source to destination. In this step, k is the first vertex. A[i][j] is filled with (A[i][k] + A[k][j]) if (A[i][j] {'>'} A[i][k] + A[k][j]).
            <br />
            That is, if the direct distance from the source to the destination is greater than the path through the vertex k, then the cell is filled with A[i][k] + A[k][j].
            <br />
            In this step, k is vertex 1. We calculate the distance from source vertex to destination vertex through this vertex k.
            matrix floyd warshall algorithm
            Calculate the distance from the source vertex to destination vertex through this vertex k
            <br />
            For example: For A1[2, 4], the direct distance from vertex 2 to 4 is 4 and the sum of the distance from vertex 2 to 4 through vertex (ie. from vertex 2 to 1 and from vertex 1 to 4) is 7. Since 4 {'<'} 7, A0[2, 4] is filled with 4.
            <li>Similarly, A2 is created using A1. The elements in the second column and the second row are left as they are.</li>
            <br />
            In this step, k is the second vertex (i.e. vertex 2). The remaining steps are the same as in step 2.
            <br />matrix floyd warshall algorithm
            <br /> Calculate the distance from the source vertex to destination vertex through this vertex 2
            <li>Similarly, A3 and A4 is also created.</li>
            <br /> matrix floyd warshall algorithm
            <br />Calculate the distance from the source vertex to destination vertex through this vertex 3
            <br />
            <br /> matrix floyd warshall algorithm
            <br />Calculate the distance from the source vertex to destination vertex through this vertex 4
            <li> A4 gives the shortest path between each pair of vertices.</li>
            <div className="text-2xl py-5 text-yellow-100">Floyd Warshall Algorithm Complexity</div>
            <div className="text-2xl py-5 text-yellow-100">Time Complexity</div>
            There are three loops. Each loop has constant complexities. So, the time complexity of the Floyd-Warshall algorithm is O(n3).
            <br />
            <div className="text-2xl py-5 text-yellow-100">Space Complexity</div><br />
            The space complexity of the Floyd-Warshall algorithm is O(n2).

            <div className="text-2xl py-5 text-yellow-100">Floyd Warshall Algorithm Applications</div>
            <li>To find the shortest path is a directed graph</li>
            <li>To find the transitive closure of directed graphs</li>
            <li>To find the Inversion of real matrices</li>
            <li>For testing whether an undirected graph is bipartite</li>
        </div>
    );
}

export default FW;