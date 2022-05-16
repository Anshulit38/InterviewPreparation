/*

    *
   **
  ***
 ****
*****

*/ 


let n=5;
for(i=0; i<=n; i++){
    let str ="";
    for(let j=n-i; j>0; j--){
     str +=" "; 
    }
    for(let j=i; j>0; j--){
        str += '*'
    }
console.log(str);
}


