let abcd = [1,"Anshul",3,2,"ajay"];
var newArr = [];
for (i=abcd.length-1; i>=0; i--){
    newArr.push(abcd[i])
   // newArr.unshift(i)
}
console.log(newArr)

// or using i++
var newArray = [];
for(i=0; i<=abcd.length-1; i++){
    newArray.push(abcd[abcd.length-1-i])
}
console.log(newArray)

// or using unshift
var newAr = [];
for(i=0; i<=abcd.length-1; i++){
  newAr.unshift(abcd[i])
}
console.log(newAr)

//reverser array including strings
var array = [1,8,8,"Ajay",77,55,"anshul","richa"];
var rev = [];


array.forEach((el)=>{
  if(typeof(el)=='string'){
      var str1=[];

    for(var j = el.length-1; j>=0; j--){
      
       str1.push(el[j]);
      //console.log(str1);
  }
    el = str1.toString();;
  }
 
 rev.unshift(el);
  
})

console.log(rev)

///////////// reverse array using for loops
var array = [1,8,8,"Ajay",77,55,"anshul","richa"];
var rev = [];

for(i=0; i<array.length-1; i++){
var data = array[array.length-1-i] ;
  if(typeof(data)=='string'){
      var str=[];
      for(j=data.length-1; j>=0; j--){
        str.push(data[j])
      }
str= str.toString()
str=str.replace(/\,/g,"");
    data =str;
  }
  rev.push(data)
}

console.log(rev)

//reverser array including strings
var array = [1,8,8,"Ajay",77,55,"anshul","richa"];
var rev = [];
array.forEach((el)=>{
  if(typeof(el)=='string'){
    el=el.split('').reverse().join('');
  }
 rev.unshift(el);
})

console.log(rev)

//reverse array including strings
var array = [1,8,8,"Ajay",77,55,"anshul","richa"];
var rev = [];


array.forEach((el)=>{
  if(typeof(el)=='string'){
var str1 =[];
    for(var j = el.length-1; j>=0; j--){    
       str1.push(el[j]);
  }
    el= str1.join('');
  }
 
 rev.unshift(el);
  
})

console.log(rev)

//reverse array including Strings
let array =[1,2,3,"ajay",4,"anshul"]
let data =[];
for(let i=0; i<array.length; i++){
   data[i] = array[array.length-1-i];
   if(typeof(data[i])=='string'){
       data[i]=data[i].split('');
       let ar2=[];
       for(j=0; j<data[i].length; j++){
           ar2[j]= data[i][data[i].length-1-j];
       }
       data[i] = ar2.join('');
   } 
}
console.log(data)
