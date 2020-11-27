/** 
 This file computes insertion sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Inserition sort
https://en.wikipedia.org/wiki/Bubble_sort  
*/
export function insertionSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;
    let swap = true;

    for(let i=1; i<length; i++){
        animations.push([i-1,i]);
        animations.push([i-1,i]);
        if(array[i-1] > array[i]){
            animations.push([i,array[i]]);
            animations.push([i,array[i]]);
            let t  = array[i];
            let k = i;
            for(; k>0 && array[k-1]>t;k--){
                animations.push([k-1,k]);
                animations.push([k-1,k]);
                animations.push([k,array[k-1]]);
                animations.push([k,array[k-1]]);
                array[k] = array[k-1];
            }
            animations.push([i,k]);
            animations.push([i,k]);
            animations.push([k,t]);
            animations.push([k,t]);
            array[k] = t;
            continue;
        }
        animations.push([i,array[i]]);
        animations.push([i,array[i]]);
    }
    return animations;
}