/*

*********
 *******
  *****
   ***
    *
    
*/ 


let n=5;
for(let i=0; i<n; i++){
  let str ="";
  
  for(k=n; k>n-i; k--){
    str= str + ' ';
  }
  
  for(j=i; j<2*n-i-1; j++){
    str= str + '*';
  }
  console.log(str)
}