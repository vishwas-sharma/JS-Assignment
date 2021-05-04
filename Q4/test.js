/*w.a.p. to enter consumed unit and calculate electricity bill, where if unit >=1000 
then charges will be 4.5 rs per unit.
if unit >=500 and <1000 then charges will be 3.5rs per unit.
if unit >=200 and <500 then charges will be 2.5 rs per unit.
if unit<200 then charges will be 2rs per unit.
note: add surharge 499 if unit >=500.*/

function calculateElectricityBill(){
    var container=document.querySelectorAll("#container");
    var template=`<label for="num1">Enter number of consumed units: <input type="number" 
                    id="unit" placeholder="10"/></label><input type="submit" value="Submit"
                     id="sbm-btn"/>`;
    container[0].innerHTML=template;

    document.querySelectorAll("#sbm-btn")[0].addEventListener("click",calculateCharges);
    console.log(container)
}
calculateElectricityBill();

function calculateCharges(){
    let surcharge=499,totalAmount=null;
    var unit=parseFloat(document.getElementById("unit").value);
    console.log(unit);
    if(unit<200){
        totalAmount=unit*2;
        document.getElementById("result").innerText=`Total Amount is:${totalAmount}`;
    }else if(unit>=200&&unit<500){
        totalAmount=unit*2.5;
        document.getElementById("result").innerText=`Total Amount is:${totalAmount}`;
    }else if(unit>=500&&unit<1000){
        totalAmount=unit*3.5+surcharge;
        document.getElementById("result").innerText=`Total Amount is:${totalAmount}`;
    }else if(unit>=1000){
        totalAmount=unit*4.5+surcharge;
        document.getElementById("result").innerText=`Total Amount is:${totalAmount}`;
    }



}