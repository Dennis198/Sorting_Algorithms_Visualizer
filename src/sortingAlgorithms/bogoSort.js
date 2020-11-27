/** 
 This file computes insertion bogo algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Bogo sort
https://en.wikipedia.org/wiki/Bogo_sort  
*/
const MAX_SORT_STEPS=80000; 

export function bogoSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let length = array.length;
    let randomI=0;
    let randomJ=0;
    let t;
    let counter = 0;

    while(!isSorted(array) && counter<MAX_SORT_STEPS){
        randomI=Math.floor(Math.random()*length);
        randomJ=Math.floor(Math.random()*length);
        console.log(randomI);
        console.log(randomJ);
        animations.push([randomI,randomJ]);
        animations.push([randomI, randomJ]);
        animations.push([randomI,array[randomJ]]);
        animations.push([randomJ,array[randomI]]);
        t = array[randomI];
        array[randomI] = array[randomJ];
        array[randomJ] = t;
        counter++;
    }

    return animations;
}

function isSorted(array){
    for(let i=0;i<array.length-1;i++){
        if(array[i]>array[i+1]) return false;
    }
    return true;
}