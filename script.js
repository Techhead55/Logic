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
                this.value = isNaN(parseFloat(this.value[this.value.length-1])) ? this.value.substring(0, this.value.length-1) : this.value;
            }
        };
        function output(){
            var element = document.createElement("div"),
                rowCountString = rowcount+"",
                correctPlace = 0,
                correctNumber = 0,
                blackList = [];
            for (var i=0; i<inp.value.length; i++){
                if (inp.value[i]===num[i]){
                    correctPlace++;
                }
            }
            for (var i=0; i<inp.value.length; i++){
                labelled:
                for (var x=0; x<num.length; x++){
                    if (inp.value[i]===num[x]){
                        for (var y=0; y<blackList.length; y++){
                            if (num[x]===blackList[y]){
                                continue labelled;
                            }
                        }
                        correctNumber++;
                        blackList.push(x);
                        break;
                    }
                }
            }
            if (rowCountString.length < 2){
                rowCountString = "0"+rowCountString;
            }
            rowcount += 1;
            $("input").animate({
                marginTop: "-60px"
            }, 300, function(){
                out.appendChild(element);
                inp.style.marginTop = (((window.innerHeight)/2)+20)
                if (won){
                    inp.style.color = "#A4C639";
                    inp.value = "Correct";
                    inp.setAttribute("readonly","");
                    inp.onclick = function(){
                        window.location.reload()
                    };
                } else {
                    inp.value = "";
                }
                $("input").animate({
                    marginTop: "-20px"
                }, 600, function(){
                    if (won){
                        $("#container").animate({
                            height: "0"
                        }, 600);
                    }
                });
            });
            element.setAttribute("class", "row");
            element.innerHTML = rowCountString+" "+inp.value+" "+correctPlace+correctNumber;
            
        }
        inp.onkeydown = function(e){
            code = e.keyCode;
            if (code===13){
                if (!(inp.value.length < 5)){
                    if (inp.value === num){
                        output();
                        won = true;
                    } else {
                        if (won){
                            window.location.reload()
                        } else {
                            output();
                        }
                    }
                }
            }
        };
    };
})();
 