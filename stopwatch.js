let inteval=null;
        function stopButton(){
            if (interval){
                clearInterval(interval)
            }
        }
        function padStart(value){
            return String(value).padStart(2, "0");
        }
        let seconds=0;
        function SetTime(){
            let minute=Math.floor(seconds/60);
            second=seconds%60;
            time.innerHTML=`${padStart(minute)}:${padStart(second)}`;
        }

        function timer(){
            seconds++;
            SetTime();
        }
        const time=document.querySelector("#timer");
        const button1=document.querySelector("#start");
        const button2=document.querySelector("#stop");
        const button3=document.querySelector("#reset");
        button1.addEventListener("click", ()=>{
            interval=setInterval(timer, 1000);
        })
        button3.addEventListener("click", ()=>{
            clearInterval(interval)
            seconds=0;
            interval=setInterval(timer, 1000);
        })