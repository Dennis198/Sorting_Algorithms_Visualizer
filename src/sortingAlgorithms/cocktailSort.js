/** 
 This file computes cocktail sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Cocktail sort
https://en.wikipedia.org/wiki/Cocktail_shaker_sort 
*/
export function cocktailSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let swapped = true;
    let start = 0;
    let end = array.length;

    while(swapped){
        swapped=false;

        for(let i = start; i< end-1;++i){
            animations.push([i,i+1]);
            animations.push([i,i+1]);
            if(array[i]>array[i+1]){
                animations.push([i,array[i+1]]);
                animations.push([i+1,array[i]]);
                let t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
                swapped=true;
                continue;
            }
            animations.push([i,array[i]]);
            animations.push([i,array[i]]);
        }

        if(!swapped){ 
            return animations;
        }

        swapped=false;
        end--;

        for(let i=end-1;i>=start;i--){
            animations.push([i,i+1]);
            animations.push([i,i+1]);
            if(array[i]>array[i+1]){
                animations.push([i,array[i+1]]);
                animations.push([i+1,array[i]]);
                let t = array[i];
                array[i] = array[i+1];
                array[i+1] = t;
                swapped=true;
                continue;
            }
            animations.push([i,array[i]]);
            animations.push([i,array[i]]);
        }

        start++;
    }

    return animations;
}
