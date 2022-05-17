/**
 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

 */
let n= 10;
for(let i =0; i<n; i++){
let str = '';
    for(j=i; j<n-1; j++){
        str = str + '*';
    }

    for(k=-1; k<=2*i-1; k++){
        str =str + '+';
    }
console.log(str);
}
for(let l =0; l<n-1; l++){
    let str = "";
    for(let m=0; m<=l; m++){
        str = str + '*';
    }
    for(let p=l; p<2*n-l-3; p++){
     str = str + '+';   
    }

    console.log(str)
}
