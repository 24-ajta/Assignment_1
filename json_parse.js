// function jsonParse(){
//     var strng = document.getElementById("txtid").value;
//     str.appendchildd(textnode);
//     document.getElementById("txtid").appendchildd(str);
//     var strr = JSON.parse(str,(key,value)=>{
//         try{
//             return JSON.parse(value);
//         }catch(e){
//             return value;
//         }
//     });
//     const stringg = JSON.stringify(strr);
//     console.log(stringg);
// }   



const btn = document.querySelector("#bton");
btn.addEventListener('click',()=>{
    let json = $.getJSON('https://ipinfo.io/json',function(userinfo){
        let ip = userinfo.ip;
        let country =userinfo.country;
        console.log(ip,country);
    });
});    
