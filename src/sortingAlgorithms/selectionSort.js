/** 
 This file computes selection sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Selection sort    
https://en.wikipedia.org/wiki/Selection_sort
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function selectionSort(array){
    const animations = [];
    if(array.length <= 1) return array;

    for(let i=0;i<array.length;i++){
        let minIdx = i;
        for(let k = i+1; k<array.length;k++){
            animations.push([COLOR_CHANGE,COLOR_FOCUS,k,k]);
            if(array[minIdx]>array[k]){
                minIdx = k;
            }
            animations.push([COLOR_CHANGE,COLOR_NORMAL,k,k]);
        }
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,minIdx]);
        animations.push([HEIGHT_CHANGE,null,i,array[minIdx]]);
        animations.push([HEIGHT_CHANGE,null,minIdx,array[i]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,minIdx]);
        let t = array[i];
        array[i] = array[minIdx];
        array[minIdx] = t;
    }

    return animations;
}