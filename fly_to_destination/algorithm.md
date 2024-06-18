## step-by-step for solving the problem of finding the minimum number of planes required to reach the last airport, along with the path taken:

# Algorithm:

## Initialize Structures:

    Create a queue to manage the BFS traversal. Each element in the queue will be an object containing the current airport index, the number of planes used to reach that airport, and the path taken to reach there.
    Create a visited array where each element is an object containing the minimum number of planes required to reach that airport and the path taken to reach there. Initialize all entries with infinity for planes and an empty path, except the starting airport.

## BFS Initialization:

    Start BFS by adding the initial state { airport: 0, planes: 0, path: [0] } to the queue.
    Set the visited information for the first airport to { planes: 0, path: [0] }.

## BFS Traversal:

    While the queue is not empty, repeat the following steps:
    a. Dequeue the front element, which gives you the current airport, the number of planes used to reach there, and the current path.
    b. For each possible move from the current airport, calculate the next airport index based on the fuel available at the current airport.
    c. For each possible next airport, check if using one more plane to reach it provides a shorter path than previously known. If it does:
        Update the visited array with the new number of planes and the updated path.
        Enqueue the next state { airport: next_airport, planes: planes + 1, path: updated_path } into the queue.
    d. If the current airport is the last airport, output the number of planes used and the path taken.

## Check for Unreachable Destination:

    If BFS completes without finding a path to the last airport, return -1 for the number of planes and an empty array for the path, indicating that the last airport is unreachable.

## complexity

    The time complexity of the modified solution, which not only finds the minimum number of planes required but also outputs the path taken, remains O(N + E). This complexity is suitable for large inputs and ensures that the solution is efficient in terms of both time and space
