 $(document).ready(function(){
            let num1 = document.getElementById("n1");
            let num2 = document.getElementById("n2");
            let num3 = document.getElementById("n3");
            let output = document.getElementById("output");
            $("#max").on("click",function(){
                let n1 = parseFloat(num1.value);
                let n2 = parseFloat(num2.value);
                let n3 = parseFloat(num3.value);

                if((n1 >= n2) && (n1 >= n3)){
                    output.innerHTML = "Maximum : " + n1; 
                }
                else if((n2 >= n1) && (n2 >= n3)){
                    output.innerHTML = "Maximum : " + n2; 
                }
                else{
                    output.innerHTML = "Maximum : " + n3; 
                }
            });
            $("#min").on("click",function(){
                let n1 = parseFloat(num1.value);
                let n2 = parseFloat(num2.value);
                let n3 = parseFloat(num3.value);

                if((n1 <= n2) && (n1 <= n3)){
                    output.innerHTML = "Minimum : " + n1; 
                }
                else if((n2 <= n1) && (n2 <= n3)){
                    output.innerHTML = "Minimum : " + n2; 
                }
                else{
                    output.innerHTML = "Minimum : " + n3; 
                }
            });
        });