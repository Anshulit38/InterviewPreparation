//unique and flat array
const detailss = [10,[20,30,20],10,[30,30,5,4,5],40,30];
let dets =[];
dets = [...new Set(detailss.flat(Infinity))];   
console.log(dets)


//unique array with reverse
const details = [10,[20,30,20],10,[30,30,5,4,5],40,30];
let det =[];
let rev =[];
details.forEach((e)=>{
Array.isArray(e)?e.forEach((el)=>det.push(el)):det.push(e)
det = [...new Set(det)];   
})
det.forEach((elem)=>rev.unshift(elem))
console.log(det)
console.log(rev)


////////////unique array function
function uniqueReverse(details){
    let det =[];
    let rev =[];
    details.forEach((element)=>{
        if(Array.isArray(element)){       
            element.forEach((el)=>{
                det.push(el);
            })
        }else{
        det.push(element)
        }
        det = [...new Set(det)]
    })
    det.forEach((e)=>rev.unshift(e))
    console.log("Unique ---",det)
    console.log('uniqueReverse',rev)
    }
    
    uniqueReverse([10,[20,30,20],10,[30,30,5,4,5],40,30]);

//unique +reverse using concat methode
const deta = [10,[20,30,20],10,[30,30,5,4,5],40,30];
let detss =[];
let revs =[];
detailss.forEach((e)=>dets=deta.concat(e))
dets.forEach((elem)=>rev.unshift(elem))
console.log(detss)
console.log(revs)

