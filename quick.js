/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start, end){
    let pivot = arr[start];
    let swap = start
    for(let i = start; i <= end; i++){
        if(arr[i] < pivot){
            swap++;
            [arr[swap], arr[i]] = [arr[i], arr[swap]];
        }
    }

    [arr[start], arr[swap]] = [arr[swap], arr[start]];    
    return swap;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = quickSort;