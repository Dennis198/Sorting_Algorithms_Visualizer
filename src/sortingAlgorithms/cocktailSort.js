/** 
 This file computes cocktail sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Cocktail sort
https://en.wikipedia.org/wiki/Cocktail_shaker_sort 
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function cocktailSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let swapped = true;
    let start = 0;
    let end = array.length;

    while(swapped){
        swapped=false;

        for(let i = start; i< end-1;++i){
            animations.push([COLOR_CHANGE,COLOR_FOCUS,i,i+1]);
            if(array[i]>array[i+1]){
                animations.push([HEIGHT_CHANGE,null,i, array[i+1]]);
                animations.push([HEIGHT_CHANGE,null,i+1, array[i]]);
                let t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
                swapped=true;
            }
            animations.push([COLOR_CHANGE,COLOR_NORMAL,i,i+1]);
        }

        if(!swapped){ 
            return animations;
        }

        swapped=false;
        end--;

        for(let i=end-1;i>=start;i--){
            animations.push([COLOR_CHANGE,COLOR_FOCUS,i,i+1]);
            if(array[i]>array[i+1]){
                animations.push([HEIGHT_CHANGE,null,i, array[i+1]]);
                animations.push([HEIGHT_CHANGE,null,i+1, array[i]]);
                let t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
                swapped=true;
            }
            animations.push([COLOR_CHANGE,COLOR_NORMAL,i,i+1]);
        }

        start++;
    }

    return animations;
}
