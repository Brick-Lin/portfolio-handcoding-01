window.addEventListener("scroll",scrollYFunction);

scrollYBefore = 0

function scrollYFunction(){
    console.log(window.scrollY)
    let scrollYAfter = window.scrollY;
    if(scrollYAfter>scrollYBefore && scrollYAfter>=100){
        document.querySelector("#test").style.transform = `translateY(-${document.querySelector("header").clientHeight}px)`
        document.querySelector("#test").style.opacity = 0
    }else if(scrollYAfter<scrollYBefore){
        document.querySelector("#test").style.transform = `translateY(0px)`
        document.querySelector("#test").style.opacity = 1
    }
    scrollYBefore = scrollYAfter;

    //
    if(window.scrollY>=1250 && window.scrollY<2840){
        document.querySelector(".main-block-3 .text-block").style.transform = `translateY(${window.scrollY-1250}px)`
    }

    //
    if(window.scrollY>=5650 && window.scrollY<7550){
        document.querySelector(".scroll-block").style.transform = `translateY(${window.scrollY-5650}px) translateX(-${(window.scrollY-5650)*0.3}px)`;
    }
}