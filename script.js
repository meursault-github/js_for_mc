
        //skrypt 1 operacje na liczbach 
        function oblicz_sum(){
            var a = parseFloat(document.getElementById("a").value); 
            var b = parseFloat(document.getElementById("b").value);
            var c = parseFloat(document.getElementById("c").value);
            var suma = a + b + c;
            document.getElementById("wynik_sum").innerHTML = "Wynik: " + suma;
        }

        //skrypt 2 operacje na liczbach 
        function oblicz_avg(){
            var d = parseFloat(document.getElementById("d").value); 
            var e = parseFloat(document.getElementById("e").value);
            var f = parseFloat(document.getElementById("f").value);
            var suma = d + e + f;
            var avg = suma/3;
            document.getElementById("wynik_avg").innerHTML ="Średnia: " + avg;
        }

        //skrypt 3 operacje na liczbach 
        function oblicz_all(){
            var x = parseFloat(document.getElementById("x").value); 
            var y = parseFloat(document.getElementById("y").value);
            var suma = x + y;
            var pro = x * y;
            var sub = x - y;
            document.getElementById("wynik_suma").innerHTML = "Suma: " + suma;
            document.getElementById("wynik_sub").innerHTML = "Różnica: " + sub;
            document.getElementById("wynik_pro").innerHTML = "Iloczyn: " + pro;
        }

        //skrypt 4 operacje na liczbach 
        function oblicz_sqrt(){
            var sqrt = parseFloat(document.getElementById("sqrt").value); 
            var wynik_sqrt =Math.sqrt(sqrt);
            document.getElementById("wynik_sqrt").innerHTML = "Pierwiastek: " + wynik_sqrt;
        }