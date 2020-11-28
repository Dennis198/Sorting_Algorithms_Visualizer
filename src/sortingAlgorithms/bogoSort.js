/** 
 This file computes insertion bogo algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Bogo sort
https://en.wikipedia.org/wiki/Bogo_sort  
*/
const MAX_SORT_STEPS=30000; 
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function bogoSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;
    let randomI=0;
    let randomJ=0;
    let temp;
    let counter = 0;

    while(!isSorted(array,animations) && counter<MAX_SORT_STEPS){
        randomI=Math.floor(Math.random()*length);
        randomJ=Math.floor(Math.random()*length);
        animations.push([COLOR_CHANGE, COLOR_FOCUS, randomI, randomJ]);
        animations.push([HEIGHT_CHANGE, null, randomI, array[randomJ]]);
        animations.push([HEIGHT_CHANGE, null, randomJ, array[randomI]]);
        animations.push([COLOR_CHANGE, COLOR_NORMAL, randomI, randomJ]);
        temp = array[randomI];
        array[randomI] = array[randomJ];
        array[randomJ] = temp;
        counter++;
    }

    return animations;
}

function isSorted(array,animations){
    for(let i=0;i<array.length-1;i++){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,i]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,i]);
        if(array[i]>array[i+1]) return false;
    }
    return true;
}