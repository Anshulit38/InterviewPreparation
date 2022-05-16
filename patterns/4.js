/* 

*****
 ****
  ***
   **
    *

*/


let n =5;

for(i=0; i<=n; i++){
    let str = "";
    
    for(j=i; j>0; j--){
        str += " ";
    }

    for(j=i; j<n; j++){
        str += "*";
    }
    console.log(str);
}