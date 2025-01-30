let stringCode="123456789abcdef";
let GradientArray=["radial-gradient","linear-gradient"];
let linearGradient=["to right","to left","to top","to bottom right","45deg","90deg","180deg","270deg"];
let shape=["circle","ellipse at top left","closest-side","ellipse at bottom","ellipse at top","farthest-corner","farthest-side","closest-corner"];
let type="";
let gd="";


let btn=document.getElementById("hecCodee");
let btn2=document.getElementById("hecCodee2");
let ggInfo=document.getElementById("gginfo");
let bodyy=document.getElementById("body")
let hexCode1="";
let hexCode2="";
const gradient=()=>{
     gd=GradientArray[Math.floor(Math.random(0,GradientArray.length)*GradientArray.length)];
    console.log(gd);
    if(gd=="linear-gradient"){
         type=linearGradient[(Math.floor(Math.random(0,linearGradient.length)*linearGradient.length))];
        console.log(type);
    }else if(gd=="radial-gradient"){
      type=shape[(Math.floor(Math.random(0,shape.length)*shape.length))];
        console.log(type);
    }
    
    
}
const hecCodege=()=>{
    let hexCode="#";
    for(let i=0;i<6;i++){
        hexCode+=stringCode[Math.floor(Math.random(stringCode)*stringCode.length)];
        

        }
        return hexCode;
}
const fun=function(){
    hexCode1=hecCodege();

         
       console.log(hexCode1);
       btn.innerText=hexCode1;
       btn.style.backgroundColor=hexCode1;
       gradient();

      return hexCode1;
}
const fun2=function(){
 
    hexCode2=hecCodege();
          
        console.log(hexCode2);
     
        btn2.innerText=hexCode2;
        btn2.style.backgroundColor=hexCode2;
        gradient();
        return hexCode2;
     
       
 }

btn.addEventListener("click",()=>{
    fun();
     let disStr=`${gd}(${type}, ${hexCode1}, ${hexCode2})`;
    ggInfo.innerText=disStr;
    bodyy.style.background= disStr;
     
});

btn2.addEventListener("click",()=>{
    fun2();
 let disStr=`${gd}(${type}, ${hexCode1}, ${hexCode2})`;
 ggInfo.innerText=disStr;
    bodyy.style.background= disStr ;
});
ggInfo.addEventListener("click",()=>{
    navigator.clipboard.writeText(ggInfo.innerText);
    alert("Copied the text: " + ggInfo.innerText);
})
fun();
fun2();
 let disStr=` background-image:${gd}(${type}, ${hexCode1}, ${hexCode2})`;
bodyy.style=disStr;
ggInfo.innerText=disStr;
btn2.innerText=hexCode2;
btn2.style.backgroundColor=hexCode2;

btn2.innerText=hexCode2;
btn2.style.backgroundColor=hexCode2;

// btn.innerText=fun();
// btn.style.color=fun();
// bodyy.style.backgroundColor=fun();
