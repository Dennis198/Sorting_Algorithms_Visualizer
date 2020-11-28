/** 
 This file computes insertion sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Inserition sort
https://en.wikipedia.org/wiki/Bubble_sort  
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function insertionSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;

    for(let i=1; i<length; i++){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i-1,i]);
        if(array[i-1] > array[i]){
            let temp  = array[i];
            let k = i;
            for(; k>0 && array[k-1]>temp;k--){
                animations.push([COLOR_CHANGE,COLOR_FOCUS,k-1,k]);
                animations.push([HEIGHT_CHANGE,null,k,array[k-1]]);
                animations.push([COLOR_CHANGE,COLOR_NORMAL,k-1,k]);
                array[k] = array[k-1];
            }
            animations.push([COLOR_CHANGE,COLOR_FOCUS,i,k]);
            animations.push([HEIGHT_CHANGE,null,k,temp]);
            animations.push([COLOR_CHANGE,COLOR_NORMAL,i,k]);
            array[k] = temp;
            continue;
        }
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i-1,i]);
    }
    return animations;
}