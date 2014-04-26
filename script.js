(function(){
    window.onload = function(){
        var num = (Math.floor(Math.random()*100000))+"",
            out = document.getElementById("container"),
            inp = document.getElementById("input"),
            rowcount = 1,
            won = false;
        if (num.length === 4){
            num = num+"0";
        }
        inp.focus();
        document.getElementsByTagName("body")[0].onclick = function(){
            inp.focus();
        };
        inp.onkeyup = function(){
            if (won){
                
            } else {
                var seq = this.value,
                    last = seq[seq.length-1];
                if (isNaN(parseFloat(last))){
                    this.value = seq.substring(0, seq.length-1);
                }
                if (seq.length > 5){
                    this.value = seq.substring(0, 5);
                }
            }
        };
        inp.onkeydown = function(e){
            code = e.keyCode;
            if (code===13){
                if (!(inp.value.length < 5)){
                    if (inp.value === num){
                        var element = document.createElement("div"),
                            rowCountString = rowcount+"",
                            correctPlace = 0,
                            correctNumber = 0;
                        for (var i=0; i<inp.value.length; i++){
                            for (var x=0; x<num.length; x++){
                                if (inp.value[i]===num[x]){
                                    correctNumber++;
                                    break;
                                }
                            }
                            if (inp.value[i]===num[i]){
                                correctPlace++;
                            }
                        }
                        if (rowCountString.length < 2){
                            rowCountString = "0"+rowCountString;
                        }
                        rowcount += 1;
                        element.setAttribute("class", "row");
                        console.log(rowCountString, inp.value, correctPlace, correctNumber);
                        element.innerHTML = rowCountString+" "+inp.value+" "+correctPlace+correctNumber;
                        out.appendChild(element);
                        won = true;
                        inp.style.color = "#A4C639";
                        inp.value = "Correct";
                        inp.setAttribute("readonly","");
                    } else {
                        if (won){
                            window.location.reload()
                        } else {
                            var element = document.createElement("div"),
                                rowCountString = rowcount+"",
                                correctPlace = 0,
                                correctNumber = 0;
                            for (var i=0; i<inp.value.length; i++){
                                for (var x=0; x<num.length; x++){
                                    if (inp.value[i]===num[x]){
                                        correctNumber++;
                                        break;
                                    }
                                }
                                if (inp.value[i]===num[i]){
                                    correctPlace++;
                                }
                            }
                            if (rowCountString.length < 2){
                                rowCountString = "0"+rowCountString;
                            }
                            rowcount += 1;
                            element.setAttribute("class", "row");
                            console.log(rowCountString, inp.value, correctPlace, correctNumber);
                            element.innerHTML = rowCountString+" "+inp.value+" "+correctPlace+correctNumber;
                            out.appendChild(element);
                            inp.value = "";
                        }
                    }
                }
            }
        };
    };
})();
 