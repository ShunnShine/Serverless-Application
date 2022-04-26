function find_max(arr){
    let max = arr[0];
    arr.forEach(element => {
        if (element > max){
            max = element
        }
    });
    return max;
}

exports.find_max = find_max;