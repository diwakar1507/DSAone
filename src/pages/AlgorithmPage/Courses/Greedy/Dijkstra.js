const Dijkstra = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <div className="text-8xl text-center text-yellow-200 py-8">
        Dijkstra's Algorithm
      </div>
      Dijkstra algorithm is a single-source shortest path algorithm. Here,
      single-source means that only one source is given, and we have to find the
      shortest path from the source to all the nodes.
      <br /> <br />
      Dijkstra's algorithm allows us to find the shortest path between any two
      vertices of a graph.
      <br /> <br />
      It differs from the minimum spanning tree because the shortest distance
      between two vertices might not include all the vertices of the graph.
      <div className="text-2xl py-5 text-yellow-100">
        How Dijkstra's Algorithm works
      </div>
      Dijkstra's Algorithm works on the basis that any subpath B {"->"} D of the
      shortest path A {"->"} D between vertices A and D is also the shortest
      path between vertices B and D.
      <br />
      shortest subpath property is used by dijkstra's algorithm
      <br />
      Djikstra used this property in the opposite direction i.e we overestimate
      the distance of each vertex from the starting vertex. Then we visit each
      node and its neighbors to find the shortest subpath to those neighbors.
      <br />
      The algorithm uses a greedy approach in the sense that we find the next
      best solution hoping that the end result is the best solution for the
      whole problem.
      <div className="text-2xl py-5 text-yellow-100">
        Example of Dijkstra's algorithm
      </div>
      It is easier to start with an example and then think about the algorithm.
      <div className="text-2xl py-5 text-yellow-100">
        Djikstra's algorithm pseudocode
      </div>
      We need to maintain the path distance of every vertex. We can store that
      in an array of size v, where v is the number of vertices.
      <br />
      We also want to be able to get the shortest path, not only know the length
      of the shortest path. For this, we map each vertex to the vertex that last
      updated its path length.
      <br />
      Once the algorithm is over, we can backtrack from the destination vertex
      to the source vertex to find the path.
      <br />A minimum priority queue can be used to efficiently receive the
      vertex with least path distance.
      <div className="text-2xl py-5 text-yellow-100">
        Dijkstra's Algorithm Complexity
      </div>
      <strong>Time Complexity:</strong> O(E Log V)
      <br />
      where, E is the number of edges and V is the number of vertices.
      <br />
      <strong>Space Complexity: O(V)</strong>
      <div className="text-2xl py-5 text-yellow-100">
        Dijkstra's Algorithm Applications
      </div>
      <li>To find the shortest path</li>
      <li>In social networking applications</li>
      <li>In a telephone network</li>
      <li>To find the locations in the map</li>
    </div>
  );
};

export default Dijkstra;
