function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        val = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > val){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = val;
    }
    return arr;
}

module.exports = insertionSort;