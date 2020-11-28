/** 
 This file computes Gnome sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Gnome sort
https://en.wikipedia.org/wiki/Gnome_sort  
*/ 
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function gnomeSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let lenth = array.length;
    let index = 0;

    while(index < lenth){
        if(index===0) index++;
        animations.push([COLOR_CHANGE,COLOR_FOCUS,index,index-1]);
        if(array[index]>=array[index-1]){
            animations.push([COLOR_CHANGE,COLOR_NORMAL,index,index-1]);
            index++;
        } 
        else{
            animations.push([HEIGHT_CHANGE,null,index,array[index-1]]);
            animations.push([HEIGHT_CHANGE,null,index-1,array[index]]);
            let t = array[index];
            array[index] = array[index-1];
            array[index-1] = t;
            animations.push([COLOR_CHANGE,COLOR_NORMAL,index,index-1]);
            index--;
        }
    }
    
    
    return animations;
}
