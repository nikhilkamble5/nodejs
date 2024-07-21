
const name='shreyas'

function add(a,b){
  console.log("result is",a+b);
}


const sub=(a,b)=>{
  console.log("sub is",a-b);
}
module.exports.add =add;
module.exports.sub=sub;

module.exports.name=name;