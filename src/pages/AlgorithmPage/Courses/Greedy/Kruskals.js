const Kruskals = () => {
  return (
    <div className="text-xl py-10 px-14 bg-primary-1 text-white">
      <strong>What is Minimum Spanning Tree?</strong>
      <br />
      <br />
      Given a connected and undirected graph, a spanning tree of that graph is a
      subgraph that is a tree and connects all the vertices together. A single
      graph can have many different spanning trees. A minimum spanning tree
      (MST) or minimum weight spanning tree for a weighted, connected,
      undirected graph is a spanning tree with a weight less than or equal to
      the weight of every other spanning tree. The weight of a spanning tree is
      the sum of weights given to each edge of the spanning tree.
      <br />
      <br /> How many edges does a minimum spanning tree has?
      <br />A minimum spanning tree has (V – 1) edges where V is the number of
      vertices in the given graph.
      <div className="text-8xl text-center text-yellow-200 py-8">
        Kruskals Algorithm
      </div>
      Kruskal's algorithm is a minimum spanning tree algorithm that takes a
      graph as input and finds the subset of the edges of that graph which
      <li>form a tree that includes every vertex</li>
      <li>
        has the minimum sum of weights among all the trees that can be formed
        from the graph
      </li>
      <div className="text-2xl py-5 text-yellow-100">
        How Kruskals's algorithm works
      </div>
      It falls under a class of algorithms called greedy algorithms that find
      the local optimum in the hopes of finding a global optimum.
      <br /> <br />
      We start from the edges with the lowest weight and keep adding edges until
      we reach our goal.
      <br /> <br />
      The steps for implementing Kruskal's algorithm are as follows:
      <div className="pl-5 py-2">
        <li>Sort all the edges from low weight to high</li>
        <li>
          Take the edge with the lowest weight and add it to the spanning tree.
          If adding the edge created a cycle, then reject this edge.
        </li>
        <li>Keep adding edges until we reach all vertices.</li>
      </div>
      <div className="text-2xl py-5 text-yellow-100">
        Kruskal's Algorithm Complexity
      </div>
      The time complexity of Kruskal's algorithm is O(E log E).
      <div className="text-2xl py-5 text-yellow-100">
        Kruskal's Algorithm Application
      </div>
      <li>In order to layout electrical wiring</li>
      <li>In computer network (LAN connection)</li>
    </div>
  );
};

export default Kruskals;
