

//Q1-WAP to find the sum of two numbers

function sum(){
    var container=document.querySelectorAll("#container");
    var template=`<label for="num1">Enter First Number:     <input type="number" id="num1" placeholder
                    ="10"/></label>
                    <label for="num2">Enter Second Number:</label><input type="number" id="num2"
                     placeholder="20"/><br>
                    <input type="submit" value="Submit" id="sbm-btn"/>`;
    container[0].innerHTML=template;

    document.querySelectorAll("#sbm-btn")[0].addEventListener("click",calculateSum);
    console.log(container)
}
sum();

function calculateSum(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var sum=parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML=`The Sum is:${sum}`
}
