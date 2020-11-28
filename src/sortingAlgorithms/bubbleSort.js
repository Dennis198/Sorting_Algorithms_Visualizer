/** 
 This file computes bubble sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Bubble sort
https://en.wikipedia.org/wiki/Bubble_sort  
*/

const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function bubbleSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;
    let swap = true;
    for(let i=0; i<length && swap; i++){
        swap=false;
        for(let k=0;k<length-i-1; k++){
            animations.push([COLOR_CHANGE,COLOR_FOCUS,k,k+1]);
            if(array[k] > array[k+1]){
                let t = array[k];
                animations.push([HEIGHT_CHANGE,null,k,array[k+1]]);
                animations.push([HEIGHT_CHANGE,null,k+1,array[k]]);
                array[k] = array[k+1];
                array[k+1] = t;
                swap=true;
            }
            animations.push([COLOR_CHANGE,COLOR_NORMAL,k,k+1]);

        }
    }
    return animations;
}
