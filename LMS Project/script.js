// Typing Effect
const text = ["IT Infrastructure Engineer",
              "Linux & Network Specialist",
              "Cyber Security Professional"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".reveal").forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";
});
// ================= LINUX COURSE OPEN/CLOSE =================

function openLinuxCourse(){
    document.getElementById("linux-course").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeLinuxCourse(){
    document.getElementById("linux-course").style.display = "none";
    document.body.style.overflow = "auto";
}

// CCNA and Cybersecurity course 
Js
function openCCNACourse(){
document.getElementById("ccna-course").style.display="block";
document.body.style.overflow="hidden";
}
function openWindowsCourse(){
document.getElementById("windows-course").style.display="block";
document.body.style.overflow="hidden";
}
function openCyberCourse(){
document.getElementById("cyber-course").style.display="block";
document.body.style.overflow="hidden";
}
Js
function closeLinuxCourse(){
document.getElementById("linux-course").style.display="none";
document.getElementById("ccna-course").style.display="none";
document.getElementById("windows-course").style.display="none";
document.getElementById("cyber-course").style.display="none";
document.body.style.overflow="auto";
}

// Section Overlay 
// Js
// function openSection(sectionId){
//   const section = document.querySelector(sectionId);
//   document.getElementById("overlayBody").innerHTML = section.innerHTML;
//   document.getElementById("sectionOverlay").style.display = "block";
//   document.body.style.overflow = "hidden";
// }

// function closeSection(){
//   document.getElementById("sectionOverlay").style.display = "none";
//   document.body.style.overflow = "auto";
// }



// anoterh overlay 
Js
function openSection(sectionId){
  const section = document.querySelector(sectionId);
  document.getElementById("overlayBody").innerHTML = section.innerHTML;
  document.getElementById("sectionOverlay").style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeSection(){
  document.getElementById("sectionOverlay").style.display = "none";
  document.body.style.overflow = "auto";
}

/* ESC KEY CLOSE */
document.addEventListener("keydown", e=>{
  if(e.key==="Escape") closeSection();
});

/* CLICK OUTSIDE CLOSE */
document.getElementById("sectionOverlay")
?.addEventListener("click", e=>{
  if(e.target.id==="sectionOverlay") closeSection();
});

// Scroll bar
function openLinuxCourse(){
  document.getElementById("linux-course").style.display="block";
  document.body.style.overflow="hidden";
}

function openCCNACourse(){
  document.getElementById("ccna-course").style.display="block";
  document.body.style.overflow="hidden";
}

function openWindowsCourse(){
  document.getElementById("windows-course").style.display="block";
  document.body.style.overflow="hidden";
}

function openCyberCourse(){
  document.getElementById("cyber-course").style.display="block";
  document.body.style.overflow="hidden";
}

function closeLinuxCourse(){
  document.querySelectorAll(".linux-course-section")
    .forEach(sec=>sec.style.display="none");
  document.body.style.overflow="auto";
}


// Message sending 
