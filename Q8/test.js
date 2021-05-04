//w.a.p. to enter any number and print faactorial.

function findFactorial(){
    let template=`Enter a number:<input type="number" id="num"/><br>
                  <input type="submit" id="btn" value="GetFactorial"/>`;
    document.getElementById("container").innerHTML=template; 
    document.getElementById("btn").addEventListener("click",()=>{
        let num=parseInt(document.getElementById("num").value);
        let result=1;
        let i=num;
        while(i>0){
                result=result*i;
                i=i-1
        }
        document.getElementById("result").innerHTML=result;
        
    })
}
findFactorial();