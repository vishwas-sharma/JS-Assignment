//w.a.p. to enter term of series and print fibnucci series.

function fibonacciSeries(){
    let template=`<h1>Find Fibonacci Series....</h1>
                  Enter number of terms:<input type="number" id="num"/><br>
                  <input type="submit" id="btn" value="GetFibonacci"/>`;
    document.getElementById("container").innerHTML=template; 
    document.getElementById("btn").addEventListener("click",()=>{
        let num=parseInt(document.getElementById("num").value);
        
       // if(isNaN(num)){
         //   document.getElementById("result").innerHTML=`Please enter valid number of terms of fibonacci series`;

       // }else{
            //let x=0,y=1,nextTerm=null;
            // for(let i=1;i<=num;i++){
            //     if(i==1){
            //         document.getElementById("result").innerHTML=x;  
            //     }else if(i==2){
            //         document.getElementById("result").innerHTML+=`  ${y}`;
            //     }else{
            //         nextTerm=x+y;
            //         x=y;
            //         y=nextTerm;
            //         document.getElementById("result").innerHTML+=`  ${nextTerm}`;

            //     }
            // }
            
       // }


       
       // program to generate fibonacci series up to n terms
        if(isNaN(num)){
            document.getElementById("result").innerHTML=`Please enter valid number of terms of fibonacci series`;

        }else{
       let x=0,y=1,nextTerm=null;
       for (let i = 1; i <= num; i++) {
        document.getElementById("result").innerHTML+=` ${x}`;              
        //console.log(x);
        nextTerm = x + y;
        x = y;
        y = nextTerm;
          }
        }
        
    })
}
fibonacciSeries();
            
            

              

