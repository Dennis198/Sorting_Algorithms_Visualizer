/** 
 This file computes insertion Gnome algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Gnome sort
https://en.wikipedia.org/wiki/Gnome_sort  
*/ 

export function gnomeSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let lenth = array.length;
    let index = 0;

    while(index < lenth){
        if(index===0) index++;
        animations.push([index,index-1]);
        animations.push([index,index-1]);
        if(array[index]>=array[index-1]){
            animations.push([index, array[index]]);
            animations.push([index, array[index]]);
            index++;
        } 
        else{
            animations.push([index, array[index-1]]);
            animations.push([index-1, array[index]]);
            let t = array[index];
            array[index] = array[index-1];
            array[index-1] = t;
            index--;
        }
    }
    
    return animations;
}
