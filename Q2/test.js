
//WAP  enter 3 number and print smallest.
function smallestNumber(){
    var container=document.querySelectorAll("#container");
    var template=`<label for="num1">Enter First Number:     <input type="number" id="num1" placeholder
                    ="10"/></label>
                    <label for="num2">Enter Second Number:</label><input type="number" id="num2"
                     placeholder="20"/><label for="num3">Enter third Number</label><input type="number"
                     id="num3" placeholder="30"/><br>
                    <input type="submit" value="Submit" id="sbm-btn"/>`;
    container[0].innerHTML=template;

    document.querySelectorAll("#sbm-btn")[0].addEventListener("click",findSmallest);
    console.log(container)
}
smallestNumber();

function findSmallest(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
    var num3=parseInt(document.getElementById("num3").value);
    
    if(num1<=num2&&num1<=num3){
        document.writeln("Smallest Number is:"+num1);
    }else if(num2<=num1&&num2<=num3){
        document.writeln("Smallest Number is:"+num2);
    }else{
        document.writeln("Smallest Number is:"+num3);
    }
}