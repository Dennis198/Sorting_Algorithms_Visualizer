/** 
 This file computes quick sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Quick Sort:
https://en.wikipedia.org/wiki/Quicksort 
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function quickSort(array){
    const animations = [];
    if(array.length<=1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations
}

function quickSortHelper(array, left, right, animations){
    if(left < right){
        //pi Index of Pivo element
        let pi = partition(array, left, right, animations);
        quickSortHelper(array, left, pi-1, animations);
        quickSortHelper(array, pi+1, right, animations);
    }
}

function partition(array, left, right, animations){
    let pivot = array[right]; // Pivo element
    let l = left;
    let r = right - 1;
    while(l<r){
        while(l < right && array[l] < pivot) l++;
        while(r > left && array[r] >= pivot) r--;
        if(l<r){
            animations.push([COLOR_CHANGE,COLOR_FOCUS,l,r]);
            animations.push([HEIGHT_CHANGE,null,l,array[r]]);
            animations.push([HEIGHT_CHANGE,null,r,array[l]]);
            animations.push([COLOR_CHANGE,COLOR_NORMAL,l,r]);
            let t = array[l];
            array[l] = array[r];
            array[r] = t;
        } 
    }
    if(array[l]>pivot){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,l,right]);
        animations.push([HEIGHT_CHANGE,null,l,array[right]]);
        animations.push([HEIGHT_CHANGE,null,right,array[l]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,l,right]);
        let t = array[l];
        array[l] = array[right];
        array[right] = t;
    }
    return l; // Position of new Pivo element
}
