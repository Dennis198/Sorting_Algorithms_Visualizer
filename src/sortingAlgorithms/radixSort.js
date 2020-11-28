/** 
 This file computes radix sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
radix sort
https://en.wikipedia.org/wiki/Gnome_sort  
*/ 
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function radixSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    let m = getMax(array,animations);
    for(let exp=1;Math.floor(m/exp)>0;exp*=10){
        countSort(array, exp, animations);
    }

    return animations;
}

function getMax(array,animations){
    let max=array[0];
    for(let i=1; i<array.length;i++){
        if(array[i]>max) max=array[i];
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i-1,i])
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i-1,i])
    }
    return max;
}

// A function to do counting sort of arr[] according to 
// the digit represented by exp. 
function countSort(array, exp, animations){
    let output = new Array(array.length).fill(0);
    let i;
    let count = new Array(10).fill(0);

// Store count of occurrences in count[] 
    for(i=0;i<array.length;i++){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,i]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,i]);
        count[Math.floor((array[i]/exp))%10]++;
    }

        // Change count[i] so that count[i] now contains 
        // actual position of this digit in output[] 
    for(i=1; i<10;i++){
        count[i] += count[i-1];
    }

    // Build the output array
    for(i = array.length-1;i>=0;i--){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,count[Math.floor((array[i]/exp)) % 10] -1]);
        animations.push([HEIGHT_CHANGE,null,count[Math.floor((array[i]/exp)) % 10] -1,array[i]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,count[Math.floor((array[i]/exp)) % 10] -1]);
        output[count[Math.floor((array[i]/exp)) % 10] -1] = array[i];
        count[Math.floor((array[i]/exp)) % 10]--;
    }

    // Copy the output array to arr[], so that arr[] now 
    // contains sorted numbers according to curent digit 
    for(i=0; i<array.length;i++){
        array[i]=output[i];
    }
}
