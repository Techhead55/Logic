Array.prototype.compare = function(array){
    
};
(function(){
    window.onload = function(){
        var num = (parseInt(Math.random()*100000, 10))+"",
            out = document.getElementById("container"),
            inp = document.getElementById("input"),
            won = false;
        num = num = ((new Array(4-num.length)).join("0"))+num;
        console.log(num);
        inp.focus();
        document.getElementsByTagName("body")[0].onclick = function(){
            inp.focus();
        };
        inp.onkeyup = function(){
            this.value = won ? this.value : (isNaN(parseFloat(this.value[this.value.length-1])) ? this.value.substring(0, this.value.length-1) : this.value);
        };
        function output(){
            var element = document.createElement("div"),
                correctPlace = 0,
                correctNumber = 0,
                blackList = [],
                rowcount = document.getElementById("container").getElementsByTagName("div").length + 1;
            for (var i=0; i<inp.value.length; i++, correctPlace = inp.value[i]===num[i] ? correctPlace+1 : correctPlace){}
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
            element.innerHTML = ((rowcount+"").length < 2 ? "0"+rowcount : rowcount)+" "+inp.value+" "+correctPlace+correctNumber;
        }
        inp.onkeydown = function(e){
            code = e.keyCode;
            if (code===13){
                if (!(inp.value.length < 5)){
                    if (won){
                        window.location.reload()
                    }
                    won = inp.value === num ? true : false;
                    output();
                }
            }
        };
    };
})(); 




