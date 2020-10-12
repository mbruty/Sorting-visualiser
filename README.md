# Sorting Visualiser
This program does what it says on the tin. Visualises Sorting algorithms!
## How does it work?
There is a random array generated of a given length. This array contains numbers from 1 - 100.
The graph component is fed this array, and renders each bar, with the value set to the height % e.g an element of value 43.6 will have it's height set to 43.6% of the container.
When the sort is started, the sorting algorithm is passed the 'setState' of the graph component, every time the algorithm does a swap, the graph component is fed the new array and re-renders the new array. If there is a delay specified, the algorithm will then wait for that amount of time before continuing.
## Speed test
This just uses the bare sorting algorithm, without any callback or delay. A random array is generated, this array is then duplicated to each algorithm and then they're set off! Each algorithm is assigned to a new web-worker to ensure that the results aren't skewed due to any processing having to happen on the main thread. This also stops the page from becoming un-responsive. Once each algorithm has completed it's run, it talks back to the main thread to give it's result. Once all the results have been collected, the page updates to show the result 
