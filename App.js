var count = 0;

function increment(){
    count+=1;
    document.querySelector("p").textContent=count;
}

function decrement(){
    count-=1;
    document.querySelector("p").textContent=count;
}