"use strict";
const next_btn = document.getElementById("next-btn");
const back_btn = document.getElementById("back-btn");
const contact_box = document.getElementById("contact-box");
const education_box = document.getElementById("education-box");
const contact_list = document.getElementById("contact-list");
const education_list = document.getElementById("education-list");
const skill_list = document.getElementById("skill-list");
const work_list = document.getElementById("work-list");
const resume_list = document.getElementById("resume-list");
const title = document.getElementById("title");
let list_array = [
    "Contact",
    "Education",
    "Skills",
    "Wrok Exprience",
    "Your Resume"
];
next_btn.addEventListener("click", () => {
    list_array.forEach((key) => {
        (key == title.nodeValue);
    });
    if (title.textContent == "Contact") {
        contact_box.style.display = 'none';
        education_box.style.display = 'block';
        title.textContent = list_array[1];
    }
});
