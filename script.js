function szyfr()
        {
            let skok = parseInt(document.getElementById("o_ile").value);
            var wynik; 
            let wyraz = document.getElementById("tekst").value;
            for( i=0; i<wyraz.length; i++ )
            {
                let index = wyraz.charCodeAt(i);
                let liczba = index + skok;
                if ((65<=liczba && 90>=liczba) || (97<=liczba && 122>=liczba)) wynik += String.fromCharCode(liczba); 
                else if((index<=90 && index >=65 && liczba>90) || (index<=122 && index>=97 && liczba>122)) wynik += String.fromCharCode(liczba- 26);
                else if((index<=90 && index >=65 && liczba<65) || (index<=122 && index>=97 && liczba<97)) wynik += String.fromCharCode(liczba + 26);
                else if(index == 32) wynik += String.fromCharCode(index);
            }
            document.getElementById('wynik').innerText = wynik;
        }
