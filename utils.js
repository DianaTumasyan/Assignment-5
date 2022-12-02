// exercise 1 - find a product of two matrices 
function matrixProduct(mat1, mat2) {
    let mat3 = [];

    let prod = 0;
    
    for (let i = 0; i < mat1.length; i++){
        mat3[i] = [];
        for (let j = 0; j < mat2[0].length; j++){
            for (let a = 0; a < mat1[0].length; a++){
                prod= mat1[i][a] * mat2[a][j];
            }
            mat3[i][j] = prod;
        }
    }
    return mat3;
}

mat1 = [[1,2,3], [4,5,6]];
mat2 = [[3,4], [5,6], [7,8]];

console.log (matrixProduct(mat1, mat2))

// exercise 2 - to find sum of two matrices 

function sumOfMatrices(mat1, mat2){
    
    
    if (mat1.length != mat2.length) return 0
 
     let a = 0;
     let newArr = [];
     let k = 0;
 
     while (k < mat1.length-1){
         newArr.push([]);
         k++;
     }
 
         
     for (let i = 0; i < mat1.length; i++){
         for (let j = 0;j < mat1[i].length; j++){
            a = mat1[i][j] + mat2[i][j];
            newArr[j].push(a);
             
         } 
     } 
    
     return newArr;
 }
 
mat1 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
mat2 = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]]
 
 console.log(sumOfMatrices (mat1, mat2));

 // exercise 3 - to find some of each row of a matrix 

 function sumOfEachRow (mat){
    let newArr = [];
    for (let i = 0; i < mat.length; i++){
        newArr.push (SumOfArray (mat[i]));
    }
    return newArr;
    
}
function SumOfArray (arr){
    if (arr.length == 0) return 0;
    let result = 0;

    for (let j = 0; j < arr.length; j++){
        result = result + arr[j];
    }
    return result;
}
console.log (SumOfArray ([1, 2, 3]))
matrix = [[1,2,3],
          [4,5,6], 
          [7,8,9]]
console.log(sumOfEachRow (matrix));

// exercise 4 - count words in a sentence (even with many whitespaces)

function countWords (sentence) {

    let count = 0;
    let newarr = [];

    for (let i = 0; i < sentence.length; i++){
        a = sentence[i];
        newarr.push(a);
    }

    for (let j = 0; j< newarr.length; j++){
        if(newarr[j]==' ' && newarr[j+1] != ' '){
            count++;
        }
    }
    return count;
}
console.log(countWords("The world   is beautiful!             hihihi "));



// exercise 5 - write a code for trim (backend)

function trim(sentence){
    
    let j = 0;
    while(sentence[j]==" "){
        j++;
    }
    let i = sentence.length-1;
    while(sentence[i]==" "){
        i--;
    }
    sentence = sentence.substring(j,i+1);
    return sentence;
}

//console.log(trim("   Madame Joanne   "));

//module.exports = {
  // matrixProduct : matrixProduct,
  // sumOfMatrices : sumOfMatrices,
  // sumOfEachRow : sumOfEachRow, 
  // countWords : countWords,
   //trim : trim
//}