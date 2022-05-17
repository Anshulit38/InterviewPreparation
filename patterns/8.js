/*

    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *

*/

let n =5;

for(let i=0; i<n; i++){
    let str = '';
    for(let j=i; j<n-1; j++){
        str = str + ' ';
    }

    for(let k =0; k<=i; k++ ){
        str = str  + '*';
    }
    console.log(str);
}

for(let m = 0; m<=n-1; m++){
    let str = '';
    for(let h=0; h<=m; h++){
        str = str + ' ';
    }
    for(let x=m; x<n-1; x++){
        str =str + '*'
    }
    console.log(str)
}