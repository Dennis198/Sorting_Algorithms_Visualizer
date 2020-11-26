/** 
 This file computes quick sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Quick Sort:
https://en.wikipedia.org/wiki/Quicksort 
*/
export function quickSort(array){
    const animations = [];
    if(array.length<=1) return array;
    quickSortHelper(array, 0, array.length-1, animations);
    return animations
}

function quickSortHelper(array, left, right, animations){
    if(left < right){
        let pi = partition(array, left, right, animations);
        console.log("Ich hab pi");
        quickSortHelper(array, left, pi-1, animations);
        quickSortHelper(array, pi+1, right, animations);
    }
}

function partition(array, left, right, animations){
    let pivot = array[right];
    let l = left;
    let r = right - 1;
    while(l<r){
        while(l < right && array[l] < pivot) l++;
        while(r > left && array[r] >= pivot) r--;
        if(l<r){
            animations.push([l,r]);
            animations.push([l,r]);
            animations.push([l, array[r]]);
            animations.push([r, array[l]]);
            let t = array[l];
            array[l] = array[r];
            array[r] = t;
        } 
    }
    if(array[l]>pivot){
        animations.push([l,r]);
        animations.push([l,r]);
        animations.push([l,array[right]]);
        animations.push([right, array[l]]);
        let t = array[l];
        array[l] = array[right];
        array[right] = t;
    }
    return l;
}
