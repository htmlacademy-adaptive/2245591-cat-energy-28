let navMain=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__toggle");navMain.classList.remove("navigation--no-js"),navMain.classList.add("navigation--closed"),navMain.classList.remove("navigation--opened"),navToggle.addEventListener("click",(()=>{navMain.classList.toggle("navigation--closed"),navMain.classList.toggle("navigation--opened")}));