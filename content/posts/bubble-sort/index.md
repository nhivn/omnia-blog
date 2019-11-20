---
title:  "Bubble sort"
excerpt: "The true bubble sort and the new bubble sort. Or simply, the original bubble sort and the optimized bubble sort."
date:   2019-06-04 22:30:00
tags: [knowledge, dev]
categories: [dev]
comments: true
published: true
---

## The part that no one cares
Long story short, for why I wrote about this sorting algorithm which many have written about, it's because I got deducted marks in one of my assignment for using the optimized version of Bubble Sort. The reason for the deduction was that it was not the true bubble sort and that the optimized bubble sort is not optimized compared to the original true bubble sort if the given array is large. Additionally, we got told that it was "fake news" to say the Wikipedia's optimised bubble sort is better than the original bubble sort. (I'm obviously super salty about this whole thing)

Since I have some free time up my sleeve, I thought I would try and see how they both perform.

## What is Bubble Sort?
So, for anyone who doesn't know what bubble sort is:

* It sorts elements in an array to be in order
* It sorts by comparing two adjacent elements and swapping their positions if they aren't in order. This will make more sense when you read the pseudocode.
* It's the simplest sorting algorithm out there (according to Wikipedia) 

## A short and lazy example
I decided to write an example. Why not? I thought I would help a bit more than just the pseudocode.

You need to sort the following array: [5, 8, 1, 3, 9] to [1, 3, 5, 8, 9]

Steps = the number of times the entire array being iterated through from position 1 to n (or 5 in our case).

**Step 1:**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[**5**, **8**, 1, 3, 9] > [**5**, **8**, 1, 3, 9] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *5 < 8 , no swap*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5, **8**, **1**, 3, 9] > [5, **8**, **1**, 3, 9] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *8 > 1, swapped*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5, 1, **8**, **3**, 9] > [5, 1, **3**, **8**, 9] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *8 > 3, swapped*

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5, 1, 3, **8**, **9**] > [5, 1, 3, **8**, **9**] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *8 < 9, no swap*


End of array now. We start the 2nd step which I won't write out because I think you get the gist from the 1st step.

Step 2 will happen and it will swap 5 until 5 reaches its correct position, meaning at the end of step 2, the array is in order! Yay! 
However... the algorithm will keep doing the steps until there is no swapping that occurred in the step. So, not until the 3rd step is this sorting done.

## The pseudocode
```
bubbleSort(A : array to sort)
```

### The original (true) bubble sort
**Summary:** Two `for` loops, no boolean check.

```
N = length(A)
for i = N - 1 down to 1 do
    for j = 0 to N - 1 do
        if A[j + 1] > A[j] then
            swap(A[j + 1], A[j])
        end if
    end for
end for
```

### The optimised bubble sort
**Summary:** One `do-while` loop, one `for` loop and *still no boolean check* but in this case, the elements that are sorted in the last swap will not be checked again, skipping a lot of redundant comparisons and that will improve the speed of the sort.

```
N = length(A)
do
    newn = 0
    for i = 1 to N - 1 do
        if A[i - 1] > A[i] then
            swap(A[i - 1], A[i])
            newn = i
        end if
    end for
    N = newn
while N > 1
```

### The optimised bubble sort with a `bool` check
**Summary:** One `do-while` loop, one `for` loop and *a boolean check*.

```
N = length(A)
do
    swapped = false
    for i = 1 to N-1 inclusive do
        if A[i-1] > A[i] then
            swap(A[i-1], A[i])
            swapped = true
        end if
    end for
    N = N - 1
while swapped
```

## The test
I decided to check for myself the speed of each version of the bubble sort. There are two test cases:
* A randomised array of 10 elements
* A randomised array of 5,000 elements

Here is the summary of the result in microseconds:

**With 10 elements,**
+ Original: 44ms
+ Optimised: 25ms
+ Optimised with boolean: 113ms

**With 5,000 elements,**
+ Original: 14,491,349ms
+ Optimised: 7,273,460ms
+ Optimised with boolean: 14,497,879ms

## Conclusion
Optimised bubble sort won! Original bubble sort came second! ... And optimised bubble sort with a boolean check came last.
