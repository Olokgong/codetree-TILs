function createGraph(edges) {
  const graph = {};
  for (const [u, v] of edges) {
    graph[u] = graph[u] || [];
    graph[v] = graph[v] || [];
    graph[u].push(v);
    graph[v].push(u);
  }
  return graph;
}

function dfs(graph, startNode, visited) {
  visited.add(startNode);
  for (const neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

function countReachableNodes(graph, startNode) {
  const visited = new Set();
  dfs(graph, startNode, visited);
  return visited.size;
}

const input = `5 4
1 2
1 3
2 3
4 5`;

const lines = input.split('\n');
const [N, M] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));

const graph = createGraph(edges);
const reachableNodes = countReachableNodes(graph, 1);

console.log(reachableNodes - 1);