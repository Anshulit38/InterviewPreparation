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

console.clear();
let n=5;

for(let i=0; i<n; i++){
  
  let str ='';
  for(let j=i; j>=0; j--){
    str = str + '*'
  }
  
  console.log(str)
}

for(let k=1; k<=n-1; k++){
  
  let str ='';
  for(let z=n-k; z>0; z--){
    str = str + '*'
  }
  
  console.log(str)
}
