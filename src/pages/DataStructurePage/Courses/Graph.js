import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const GraphDs = () => {
  return (
    <>
      <div className="bg-primary-1 overflow-hidden pb-24">
        <div className="text-8xl px-16  text-yellow-200 py-9 font-display ml-10 mt-10 ">
          Graph
        </div>
        <div className=" pb-24 px-28">
          <div className="text-5xl py-16 font-serif text-yellow-200">
            <h1>Introduction To Graph</h1>
          </div>
          <div className="text-2xl text-slate-300">
            In the real world, many problems are represented in terms of objects
            and connections between them. For example, in an airline route map,
            we might be interested in questions like: “What’s the fastest way to
            go from Hyderabad to New York?” or “What is the cheapest way to go
            from Hyderabad to New York?” To answer these questions we need
            information about connections (airline routes) between objects
            (towns). Graphs are data structures used for solving these kinds of
            problem
          </div>
          <div className="text-5xl py-16 font-serif text-yellow-200">
            <h1>Glossary</h1>
          </div>
          <div className="text-2xl text-slate-300">
            Graph: A graph is a pair (V, E), where V is a set of nodes, called
            vertices, and £ is a collection of pairs of vertices, called edges.
            <br />
            <br />
            <li>Vertices and edges are positions and store elements</li>
            <li> Definitions that we use:</li>
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">Directed edge:</strong>
            <br />
            <br />
            <li> ordered pair of vertices (u, v)</li>
            <li>first vertex u is the origin</li>
            <li>second vertex v is the destination</li>
            <li>Example: one-way road traffic</li>
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">
              Undirected edge:
            </strong>
            <br />
            <br />
            <li>unordered pair of vertices (u, v)</li>
            <li>Example: railway lines</li>
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">
              Directed graph:
            </strong>
            <br />
            <br />
            <li>all the edges are directed</li>
            <li>Example: route network</li>
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">
              Undirected graph:
            </strong>
            <br />
            <br />
            <li>all the edges are undirected</li>
            <li> Example: flight network</li>
            <li>
              When an edge connects two vertices, the vertices are said to be
              adjacent to each other and the edge is incident on both vertices.
            </li>
            <li>
              A graph with no cycles is called a tree. A tree is an acyclic
              connected graph.
            </li>
            <li> A self loop is an edge that connects a vertex to itself.</li>
            <li>
              Two edges are parallel if they connect the same pair of vertices.
            </li>
            <li>
              The Degree of a vertex is the number of edges incident on it.
            </li>
            <li>
              A subgraph is a subset of a graph’s edges (with associated
              vertices) that form a graph.
            </li>
            <li>
              A path in a graph is a sequence of adjacent vertices. Simple path
              is a path with no repeated vertices. In the graph below, the
              dotted lines represent a path from G to E.
            </li>
            <li>
              A cycle is a path where the first and last vertices are the same.
              A simple cycle is a cycle with no repeated vertices or edges
              (except the first and last vertices).
            </li>
            <li>
              We say that one vertex is connected to another if there is a path
              that contains both of them.
            </li>
            <li>
              A graph is connected if there is a path from every vertex to every
              other vertex.
            </li>
            <li>
              If a graph is not connected then it consists of a set of connected
              components.
            </li>
            <li>
              A directed acyclic graph [DAG] is a directed graph with no cycles.
            </li>
            <li>A forest is a disjoint set of trees.</li>
            <li>
              A spanning tree of a connected graph is a subgraph that contains
              all of that graph’s vertices and is a single tree. A spanning
              forest of a graph is the union of spanning trees of its connected
              components.
            </li>
            <li>
              A bipartite graph is a graph whose vertices can be divided into
              two sets such that all edges connect a vertex in one set with a
              vertex in the other set.
            </li>
            <li>
              In weighted graphs integers (weights) are assigned to each edge to
              represent (distances or costs).
            </li>
            <li>Graphs with all edges present are called complete graphs.</li>
            <li>
              Graphs with relatively few edges (generally if it edges {"<"}
              {"|"}V{"|"} log {"|"}V{"|"} ) are called sparse graphs.
            </li>
            <li>
              Graphs with relatively few of the possible edges missing are
              called dense.
            </li>
            <li>Directed weighted graphs are sometimes called network.</li>
            <li>
              We will denote the number of vertices in a given graph by |V|, and
              the number of edges by |E|. Note that E can range anywhere from 0
              to |V|(|V| – l)/2 (in undirected graph). This is because each node
              can connect to every other node.
            </li>
          </div>

          <div className="text-5xl py-16 font-serif text-yellow-200">
            <h1>Applications of Graph</h1>
          </div>

          <div className="text-2xl text-slate-300">
            <li>
              Representing relationships between components in electronic
              circuits
            </li>
            <li>Transportation networks: Highway network, Flight network</li>
            <li>Computer networks: Local area network, Internet, Web</li>
          </div>
          <div className="text-5xl py-16 font-serif text-yellow-200">
            <h1>Graph Representation</h1>
          </div>
          <div className="text-2xl text-slate-300">
            <li>
              Representing relationships between components in electronic
              circuits
            </li>
            <li>
              As in other ADTs, to manipulate graphs we need to represent them
              in some useful form. Basically, there are three ways of doing
              this:
              <li>Adjacency Matrix</li>
              <li>Adjacency List</li>
              <li>Adjacency Set</li>
            </li>
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">
              Adjacency Matrix
            </strong>
            <br />
            <br />
            Graph Declaration for Adjacency Matrix First, let us look at the
            components of the graph data structure. To represent graphs, we need
            the number of vertices, the number of edges and also their
            interconnections. So, the graph can be declared as:
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl"> Description</strong>
            <br />
            <br />
            In this method, we use a matrix with size V × V. The values of
            matrix are boolean. Let us assume the matrix is Adj. The value
            Adj[u, v] is set to 1 if there is an edge from vertex u to vertex v
            and 0 otherwise. In the matrix, each edge is represented by two bits
            for undirected graphs. That means, an edge from u to v is
            represented by 1 value in both Adj[u,v ] and Adj[u,v]. To save time,
            we can process only half of this symmetric matrix. Also, we can
            assume that there is an “edge” from each vertex to itself. So,
            Adj[u, u] is set to 1 for all vertices. If the graph is a directed
            graph then we need to mark only one entry in the adjacency matrix.
            As an example, consider the directed graph below. The adjacency
            matrix for this graph can be given as: Now, let us concentrate on
            the implementation. To read a graph, one way is to first read the
            vertex names and then read pairs of vertex names (edges). The code
            below reads an undirected graph. The adjacency matrix representation
            is good if the graphs are dense. The matrix requires O(V2 ) bits of
            storage and O(V2 ) time for initialization. If the number of edges
            is proportional to V2 , then there is no problem because V2 steps
            are required to read the edges. If the graph is sparse, the
            initialization of the matrix dominates the running time of the
            algorithm as it takes takes O(V2 ).
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">Adjacency List</strong>
            <br />
            <br />
            Graph Declaration for Adjacency List In this representation all the
            vertices connected to a vertex v are listed on an adjacency list for
            that vertex v. This can be easily implemented with linked lists.
            That means, for each vertex v we use a linked list and list nodes
            represents the connections between v and other vertices to which v
            has an edge. The total number of linked lists is equal to the number
            of vertices in the graph. The graph ADT can be declared as:
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl"> Description</strong>
            <br />
            <br />
            Considering the same example as that of the adjacency matrix, the
            adjacency list representation can be given as: Since vertex A has an
            edge for B and D, we have added them in the adjacency list for A.
            The same is the case with other vertices as well. For this
            representation, the order of edges in the input is important. This
            is because they determine the order of the vertices on the adjacency
            lists. The same graph can be represented in many different ways in
            an adjacency list. The order in which edges appear on the adjacency
            list affects the order in which edges are processed by algorithms.
            Disadvantages of Adjacency Lists Using adjacency list representation
            we cannot perform some operations efficiently. As an example,
            consider the case of deleting a node. . In adjacency list
            representation, it is not enugh if we simply delete a node from the
            list representation, if we delete a node from the adjacency list
            then that is enough. For each node on the adjacency list of that
            node specifies another vertex. We need to search other nodes linked
            list also for deleting it. This problem can be solved by linking the
            two list nodes that correspond to a particular edge and making the
            adjacency lists doubly linked. But all these extra links are risky
            to process.
            <br />
            <br />
            <strong className="text-yellow-100 text-3xl">Adjacency Set</strong>
            <br />
            <br />
            It is very much similar to adjacency list but instead of using
            Linked lists, Disjoint Sets [UnionFind] are used. For more details
            refer to the Disjoint Sets ADT chapter. Comparison of Graph
            Representations Directed and undirected graphs are represented with
            the same structures. For directed graphs, everything is the same,
            except that each edge is represented just once. An edge from x to y
            is represented by a 1 value in Agj[x][y] in the adjacency matrix, or
            by adding y on x’s adjacency list. For weighted graphs, everything
            is the same, except fill the adjacency matrix with weights instead
            of boolean values.
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphDs;
