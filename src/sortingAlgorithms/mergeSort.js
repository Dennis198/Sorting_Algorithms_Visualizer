
/** 
 This file computes merge sort algorithm
 on a given array "array" and rembember all the changes
 to display the Algorithm in const "animations"
*/

/**
Merge Sort
https://en.wikipedia.org/wiki/Merge_sort  
*/
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
        animations.push([i,j]);
        animations.push([i,j]);
        if(auxilaryArray[i] <= auxilaryArray[j]){
            animations.push([k, auxilaryArray[i]]);
            mainArray[k++] = auxilaryArray[i++];
        } else {
            animations.push([k, auxilaryArray[j]]);
            mainArray[k++] = auxilaryArray[j++];
        }
    }
    while(i <= middleIdx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k, auxilaryArray[i]]);
        mainArray[k++] = auxilaryArray[i++];
    }
    while(j <= endIdx){
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k, auxilaryArray[j]]);
        mainArray[k++] = auxilaryArray[j++];
    }
}