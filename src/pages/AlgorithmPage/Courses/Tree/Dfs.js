
const Dfs = () => {
    return (
        <div className="text-xl py-10 px-14 bg-primary-1 text-white">
            <div className="text-8xl text-center text-yellow-200 py-8">Breadth First Search</div>
            The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.
            <br /><br />
            Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected.
            <br /><br />
            This recursive nature of DFS can be implemented using stacks. The basic idea is as follows:
            <li>Pick a starting node and push all its adjacent nodes into a stack.</li>
            <li>Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack.</li>
            <li>Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop.</li>
            The following image shows how DFS works<br /><br />
            Time complexity O(V+E), when implemented using an adjacency list.
        </div>
    );
}

export default Dfs;