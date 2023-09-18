function merge(arr1, arr2) {
    if(arr2[0] >= arr1[arr1.length - 1]) return arr1.concat(arr2);
    let out = [];
    let p1 = 0;
    let p2 = 0;
    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1] <= arr2[p2]){
            out.push(arr1[p1]);
            p1++;
        } else{
            out.push(arr2[p2]);
            p2++;
        }
    }
    if (p1 >= arr1.length){
        out = out.concat(arr2.splice(p2));
    } else{
        out = out.concat(arr1.splice(p1));
    }
    return out;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let splitPoint = Math.floor((arr.length) / 2);
    let left = mergeSort(arr.slice(0,splitPoint));
    let right = mergeSort(arr.slice(splitPoint));
    return merge(left, right);
    

}

module.exports = { merge, mergeSort};