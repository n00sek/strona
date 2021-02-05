function szyfr()
        {
            var skok = document.getElementById("o_ile").value;
            skok = parseInt(skok);
            var wynik = '', wyraz = document.getElementById("tekst").value;
            for( i=0; i<wyraz.length; i++ )
            {
                var index = wyraz.charCodeAt(i);
                var liczba = wyraz.toUpperCase();
                liczba = liczba.charCodeAt(i);


                liczba = liczba + skok;

                if (65<=liczba && 90>=liczba) {
                    if(index>96 && index<123) {
                    var typ = String.fromCharCode(liczba).toLowerCase();
                    wynik = wynik + typ;
                    }
                    else if(index>64 && index<91) {
                    var typ = String.fromCharCode(liczba);    
                    wynik = wynik + typ;
                    }
                }
                
                else if(liczba>90) {
                    var dodaj = liczba - 26;

                    if(index>96) {
                    var typ = String.fromCharCode(dodaj).toLowerCase();
                    wynik = wynik + typ;
                    }
                    
                    else if(65<=index && 90>=index) {
                    var typ = String.fromCharCode(dodaj).toUpperCase();
                    wynik = wynik + typ;
                    }
                }
            
                else if(liczba<65) {
                    var dodaj = liczba + 26;
                    if(index>96) {
                    var typ = String.fromCharCode(dodaj).toLowerCase();
                    wynik = wynik + typ; 
                    }
                    else if(index>64 && index<91) {
                    var typ = String.fromCharCode(dodaj).toUpperCase();
                    wynik = wynik + typ; 
                    }
                }
                
            }
            document.getElementById('wynik').innerText = wynik;
        }