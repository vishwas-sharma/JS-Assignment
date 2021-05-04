/* w.a.p. to enter gender code and  print gender 
where if code 1 =male, 2 female, 3 transgnder otherwise print unknown.*/

function checkGender(){


    var container=document.querySelectorAll("#container");
    var template=`<label><input type="radio" name="gender" id="male" value="male"/>male</label><br>
    <label><input type="radio" name="gender" id="female" value="female" />female</label><br>
    <label><input type="radio" name="gender" id="transgender" value="transgender" />transgender</label><br>
    <input type="submit" value="Submit" id="sbm-btn"/>`;
    container[0].innerHTML=template;

    document.getElementById("sbm-btn").addEventListener("click",()=>{
        let x=document.getElementById("male");
        let y=document.getElementById("female");
        let z=document.getElementById("transgender");
        let result=document.getElementById("result");
        let message="unknown";
        if(x.checked){
            message=`you have selected:${x.value}`;
        }
        if(y.checked){
            message=`you have selected:${y.value}`;
        }
        if(z.checked){
            message=`you have selected:${z.value}`;
        }
        result.innerHTML=message;

    });
}
checkGender();