/** 
 This file computes insertion shell algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Shell sort
https://en.wikipedia.org/wiki/Shell_sort  
*/ 

//gaps
const GAPS=[1,4,10,23,57,132,301,701];
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function shellSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    
    for(let k = GAPS.length-1;k>=0;k--){
        if(k>=array.length)continue;
        let intervall=GAPS[k];
        for(let i = intervall; i < array.length;i++){
            let temp = array[i];
            let j;
            for(j=i; j>=intervall && array[j-intervall] > temp; j-=intervall){
                animations.push([COLOR_CHANGE,COLOR_FOCUS,j,j-intervall]);
                animations.push([HEIGHT_CHANGE,null,j,array[j-intervall]]);
                animations.push([COLOR_CHANGE,COLOR_NORMAL,j,j-intervall]);
                array[j] = array[j - intervall];
            }
            animations.push([COLOR_CHANGE,COLOR_FOCUS,i,j]);
            animations.push([HEIGHT_CHANGE,null,j,temp]);
            animations.push([COLOR_CHANGE,COLOR_NORMAL,i,j]);
            array[j] = temp;
        }
    }
    return animations;
}
