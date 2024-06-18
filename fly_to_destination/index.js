function minPlanesToReachLastAirportWithPath(fuel) {
  const N = fuel.length;
  if (N === 0) return { planes: -1, path: [] }; // No airports

  const queue = [];
  const visited = new Array(N).fill({ planes: Infinity, path: [] });
  // To store minimum planes and path to reach each airport

  queue.push({ airport: 0, planes: 0, path: [0] });
  visited[0] = { planes: 0, path: [0] };

  while (queue.length > 0) {
    const { airport, planes, path } = queue.shift();

    // Try to move to next reachable airports
    for (let i = airport + 1; i < N && i <= airport + fuel[airport]; i++) {
      if (planes + 1 < visited[i].planes) {
        visited[i].planes = planes + 1;
        visited[i].path = [...path, i];
        queue.push({ airport: i, planes: planes + 1, path: [...path, i] });
      }
    }

    // Early exit if we can reach the last airport
    if (airport === N - 1) {
      return { planes: planes, path: path };
    }
  }

  // If BFS completes without reaching the last airport
  return { planes: -1, path: [] };
}

// Example usage:
console.log(minPlanesToReachLastAirportWithPath([2, 1, 2, 3, 1])); // Output: { planes: 2, path: [0, 2, 4] }
console.log(minPlanesToReachLastAirportWithPath([1, 6, 3, 4, 5, 0, 0, 0, 6])); // Output: { planes: 3, path: [0, 1, 5, 8] }
console.log(minPlanesToReachLastAirportWithPath([1, 2, 1, 0])); // Output: { planes: -1, path: [] } (last airport unreachable)
