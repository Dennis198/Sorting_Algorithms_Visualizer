
/** 
 This file computes merge sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Merge Sort
https://en.wikipedia.org/wiki/Merge_sort  
*/
const COLOR_CHANGE = true;
const COLOR_FOCUS = true;
const COLOR_NORMAL = false;
const HEIGHT_CHANGE = false;

export function mergeSort(array){
    const animations = [];
    if(array.length <= 1) return array;
    const auxilaryArray = array.slice();
    mergeSortHelper(array, 0, array.length-1, auxilaryArray, animations);
    return animations
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxilaryArray,
    animations
){
    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx+endIdx)/2);
    mergeSortHelper(auxilaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxilaryArray, middleIdx+1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxilaryArray, animations); 
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxilaryArray,
    animations
){
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx+1;
    while(i <= middleIdx && j <= endIdx){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,i,j]);
        if(auxilaryArray[i] <= auxilaryArray[j]){
            animations.push([HEIGHT_CHANGE,null,k,auxilaryArray[i]]);
            mainArray[k++] = auxilaryArray[i++];
            animations.push([COLOR_CHANGE,COLOR_NORMAL,k-1,i-1]);
        } else {
            animations.push([HEIGHT_CHANGE,null,k,auxilaryArray[j]]);
            mainArray[k++] = auxilaryArray[j++];
            animations.push([COLOR_CHANGE,COLOR_NORMAL,k-1,j-1]);
        }
    }
    while(i <= middleIdx){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,k,i]);
        animations.push([HEIGHT_CHANGE,null,k,auxilaryArray[i]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,i,k]);
        mainArray[k++] = auxilaryArray[i++];
    }
    while(j <= endIdx){
        animations.push([COLOR_CHANGE,COLOR_FOCUS,k,j]);
        animations.push([HEIGHT_CHANGE,null,k,auxilaryArray[j]]);
        animations.push([COLOR_CHANGE,COLOR_NORMAL,k,j]);
        mainArray[k++] = auxilaryArray[j++];
    }
}