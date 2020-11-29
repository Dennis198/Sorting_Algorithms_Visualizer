/** 
 This file computes heap sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Heap Sort
https://en.wikipedia.org/wiki/Heapsort
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function heapSort(array){
    const animations = [];
    if(array.length<=1) return array;
    heapSortHelper(array, animations);
    return animations
}

function heapSortHelper(array, animations){
    // Create Heap-Attribute
    for(let i=array.length/2; i>=0; i--){
        heap(array, i, array.length-1,animations);
    }

    // Sort
    for(let i=array.length-1; i>0;i--){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,0,i]);
        animations.push([HEIGHT_CHANGE,null,0,array[i]]);
        animations.push([HEIGHT_CHANGE,null,i,array[0]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,0,i]);
        //Swap the smalles(root in Heap) to beginning
        let t = array[i];
        array[i] = array[0];
        array[0] = t;
        //Create Heap-Attribute for Subtree
        heap(array, 0, i-1, animations);
    }

    //Invert the array
    for(let i=0, k=array.length-1;i<array.length/2; i++){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,k]);
        animations.push([HEIGHT_CHANGE,null,i,array[k]]);
        animations.push([HEIGHT_CHANGE,null,k,array[i]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,k]);
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
        animations.push([COLOR_CHANGE, COLOR_FOCUS,father,son]);
        animations.push([HEIGHT_CHANGE, null,father,array[son]]);
        animations.push([HEIGHT_CHANGE, null,son,array[father]]);
        animations.push([COLOR_CHANGE, COLOR_NORMAL,father,son]);
        let t = array[son];
        array[son] = array[father];
        array[father] = t;
        heap(array, son, end, animations);
    }
}
