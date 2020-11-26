/** 
 This file computes selection sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Selection sort    
https://en.wikipedia.org/wiki/Selection_sort
*/
export function selectionSort(array){
    const animations = [];
    if(array.length <= 1) return array;

    for(let i=0;i<array.length;i++){
        let minIdx = i;
        for(let k = i+1; k<array.length;k++){
            animations.push([i,k]);
            animations.push([i,k]);
            if(array[minIdx]>array[k]){
                minIdx = k;
            }
            animations.push([i,array[i]]);
            animations.push([k,array[k]]);
        }
        animations.push([i,minIdx]);
        animations.push([i,minIdx]);
        animations.push([i,array[minIdx]]);
        animations.push([minIdx,array[i]]);
        let t = array[i];
        array[i] = array[minIdx];
        array[minIdx] = t;
    }

    return animations;
}