//class that takes a call back function as a constructor 
//it runs everytime there are changes  on visibility
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('.show');
        }else{
            entry.target.classList.remove('.show');

        }

    })
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));