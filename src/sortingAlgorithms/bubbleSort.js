/** 
 This file computes bubble sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Bubble sort
https://en.wikipedia.org/wiki/Bubble_sort  
*/
export function bubbleSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;
    let swap = true;
    for(let i=0; i<length && swap; i++){
        swap=false;
        for(let k=0;k<length-i-1; k++){
            animations.push([k,k+1]);
            animations.push([k,k+1]);
            if(array[k] > array[k+1]){
                let t = array[k];
                animations.push([k,array[k+1]]);
                animations.push([k+1,array[k]]);
                array[k] = array[k+1];
                array[k+1] = t;
                swap=true;
            }else{
                animations.push([k,array[k]]);
                animations.push([k,array[k]]);
            }

        }
    }
    return animations;
}