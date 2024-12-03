
const next_btn = document.getElementById("next-btn") as HTMLButtonElement;
const back_btn = document.getElementById("back-btn") as HTMLButtonElement;
const contact_box = document.getElementById("contact-box") as HTMLDivElement;
const education_box = document.getElementById("education-box") as HTMLDivElement;
const contact_list = document.getElementById("contact-list") as HTMLButtonElement;
const education_list = document.getElementById("education-list") as HTMLButtonElement;
const skill_list = document.getElementById("skill-list") as HTMLButtonElement;
const work_list = document.getElementById("work-list") as HTMLButtonElement;
const resume_list = document.getElementById("resume-list") as HTMLButtonElement;
const title = document.getElementById("title") as HTMLLegendElement ;

let list_array= [
    "Contact",
    "Education",
    "Skills",
    "Wrok Exprience",
    "Your Resume"
]

next_btn.addEventListener("click",()=>{
    list_array.forEach((key)=>{
        (key == title.nodeValue )
    })
    if(title.textContent == "Contact")
    {
        contact_box.style.display = 'none';
        education_box.style.display = 'block'
        title.textContent = list_array[1]
    }
})
