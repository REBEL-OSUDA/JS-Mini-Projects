const quotes=["I think, therefore I am.", 
    "I may disagree with what you say, but I will defend to death your right to say it.",
    "If men were perfectly virtuous, they wouldn’t have friends.", 
    "Ignorance is bliss.",
    "People do what they hate for money and use the money to do what they love.",
    "Small things make perfection, but perfection is no small thing."]
    const set=new Set();
    const p=document.getElementById("quote");
    p.style.color="#FFF";
    const button=document.querySelector("button");
    button.addEventListener("click", ()=>{
        if (set.size == quotes.length)
        set.clear();
        while(true){
            const idx=Math.floor(Math.random()*quotes.length);
            if (set.has(idx)) continue;
            else{
                p.innerHTML=quotes[idx];
                set.add(idx);
                break;
            }
        }
    })