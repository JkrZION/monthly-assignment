// -===================sample typing Script===============================//
var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer", "Freelancer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// ========================Nav-bar color marking section======================//
const nav = document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length;
    for(let i=0; i<totalNavList;i++)
    {
        const a =navList[i].querySelector("a");
        a.addEventListener("click",function()
            {
                for (let s = 0; s < totalNavList; s++)
                {
                    navList[s].querySelector("a").classList.remove("active")
                }
                  this.classList.add("active");
        })
    }
/* ================Nav-bar Toggler Section for responsive web starts===================*/
    const navTogglerBtn=document.querySelector(".nav-toggler"),
            aside=document.querySelector(".nav-bar");
            navTogglerBtn.addEventListener("click",()=>
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
    


