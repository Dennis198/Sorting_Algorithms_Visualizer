/** 
 This file computes heap sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Heap Sort
https://en.wikipedia.org/wiki/Heapsort
*/
export function heapSort(array){
    const animations = [];
    if(array.length<=1) return array;
    heapSortHelper(array, animations);
    console.log(array);
    return animations
}

function heapSortHelper(array, animations){
    for(let i=array.length/2; i>=0; i--){
        heap(array, i, array.length-1,animations);
    }

    for(let i=array.length-1; i>0;i--){
        animations.push([0, i]);
        animations.push([0, i]);
        animations.push([i, array[0]]);
        animations.push([0 ,array[i]]);
        let t = array[i];
        array[i] = array[0];
        array[0] = t;
        heap(array, 0, i-1, animations);
    }

    for(let i=0, k=array.length-1;i<array.length/2; i++){
        animations.push([i, k]);
        animations.push([i, k]);
        animations.push([i, array[k]]);
        animations.push([k ,array[i]]);
        let t = array[i];
        array[i] = array[k];
        array[k] = t;
        k--;
    }
}

function heap(array, father, end, animations){
    let left = 2 * father + 1;
    let right = 2 * father + 2;
    let son = father;
    if(left <= end){
        if(array[father]>array[left]) son = left;
    }
    if(right <= end){
        if(array[son]>array[right]) son = right;
    }
    if(father !== son){
        animations.push([father, son]);
        animations.push([father, son]);
        animations.push([father, array[son]]);
        animations.push([son, array[father]]);
        let t = array[son];
        array[son] = array[father];
        array[father] = t;
        heap(array, son, end, animations);
    }
}
