function isPalindrome(str) {

    let strClean  = str.replace(/ /g, '').toLowerCase();
    let strInvert = '';

    for(let i = strClean.length - 1; i >= 0; i--) {
        strInvert += strClean[i];
    }

    return strClean == strInvert;
}

function arrayMaxMin(arr) {

    if (arr.length == 0) {
        return [];
    } 
    
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < min) {
            min = arr[i];
        } 
        else if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return [min, max]; 
}
