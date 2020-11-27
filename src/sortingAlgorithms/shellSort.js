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
export function shellSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    console.log(array);
    
    for(let k = GAPS.length-1;k>=0;k--){
        if(k>=array.length)continue;
        let intervall=GAPS[k];
        for(let i = intervall; i < array.length;i++){
            let t = array[i];
            let j;
            for(j=i; j>=intervall && array[j-intervall] > t; j-=intervall){
                animations.push([j,j-intervall]);
                animations.push([j,j-intervall]);
                animations.push([j,array[j-intervall]]);
                animations.push([j,array[j-intervall]]);
                array[j] = array[j - intervall];
            }
            animations.push([i,j]); 
            animations.push([i,j]);
            animations.push([j,t]);
            animations.push([j,t]);
            array[j] = t;
        }
    }
    return animations;
}
