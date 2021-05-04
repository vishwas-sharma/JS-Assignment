/*w.a.p. to enter mobile number and validate it ,
 where mobile number must 10 digit, start from 9,8,7 and must be number.*/
 function validateMobile(){
    var container=document.querySelectorAll("#container");
    var template=`<label for="num">Enter Mobile Number: <input type="number" 
                    id="num" placeholder="9795208787"/></label><input type="submit" value="Submit"
                     id="sbm-btn"/>`;
    container[0].innerHTML=template;

    document.querySelectorAll("#sbm-btn")[0].addEventListener("click",()=>{
        let mob=document.getElementById("num").value;
        
        let num=null, message="";
        
        if(mob.length==10){
            num=parseInt(mob);
            
            if(num==mob){

                if(mob[0]==9||mob[0]==8||mob[0]==7){
                    message=`valid number`;
                }else{
                    message=`Mobile number start only with 9,7,8`;
                }
            }else{
                message=`Please enter numaric value only !`;
            }

        }else{
            message=`Please enter 10 digit number only !`;
        }
      document.getElementById("result").textContent=message;
    });
}
validateMobile();

