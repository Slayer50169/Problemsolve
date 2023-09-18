function bubbleSort() {
    for(let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let swap = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = swap;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;