function selectionSort(arr) {
    
    for(let i = 0; i < arr.length; i++){
        let min = arr[i];
        for(let j = i+1; j < arr.length; j++)
            if (arr[j] < min){
                min = arr[j];
                arr[j] = arr[i]
                arr[i] = min;
            }
    }
    return arr;
}

module.exports = selectionSort;