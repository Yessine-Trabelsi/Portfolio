resumeBtn = document.querySelector("#resume");
workBtn = document.querySelector("#myWork");
skillsBtn = document.querySelector("#mySkills");
const show = document.querySelector("#show");
const home = document.querySelector("#home")
const projectN = document.querySelector("#projectN");
const resumeN = document.querySelector("#resumeN")

const intro = document.createElement("p") ;
intro.innerHTML=`
  This is me Yessine a web Developper full stack 💢
              <br />Go check my work ,my resume and my skills 😇 <br />Contact
              me for any service and more details 🙏
`;
const resume = document.createElement("div");
resume.innerHTML = `
<h4>Yessine Trabelsi</h4>
<h4>Frontend Developer | Computer Enginnering Student</h4>
<br/>
<p>Passionate Computer Engineering student with hands-on experience building web applications.
 Skilled in full-stack development and UI/UX design, actively seeking opportunities to apply 
 these skills in real-world projects.</p>
 <div id="resumeP">
 <h4>Education :</h4>
<strong>Those are the courses I attended : </strong>
<p>-Frontend development: HTML/CSS/Javascript</p>
<p>-How to design your programms</p>
<p>-Computer engineering in university: network 
design,protcols/security/exploitation systems/data base</p>
<p>-Studied in mathematics section in high school </p>
</div>
<br/>
<h4>Experience:</h4>
<p>-This portfolio😅 It contains 4 simple web pages go check them on my work</p>
`;

const skills = document.createElement("div");
skills.classList.add("skills");
skills.innerHTML = `
<p>-Frontend design ✅🔥🔥🔥</p>
<p>-API integration ✅</p>
<p>-Data Base integration ✅</p>
<p>-HTML/CSS  ✅</p>
<p>-Javascript ✅</p>
<p>-Figma   ✅</p>
<p>-UX/UI   ✅</p>
<p>-Programming  ✅🔥🔥🔥</p>
<p>-Python   ✅</p>
<p>-Math   ✅</p>

<strong>Languages: English/Frensh/Arabic</strong>
<br/>

`;
const projects = document.createElement("div");
projects.innerHTML = `
🛒<a href="https://yessine-trabelsi.github.io/e-commerce/" target="_blank" style="text-decoration: underline;">E-Commerce Web Site!</a>
<br/>
🎬️<a href="https://yessine-trabelsi.github.io/Movie-Search/" target="_blank" style="text-decoration: underline;">Movie Search</a>
<br/>
🧾<a href="https://yessine-trabelsi.github.io/To-do-app/" target="_blank" style="text-decoration: underline;">To Do App</a>
<br/>
🎮️<a href="https://yessine-trabelsi.github.io/tic_tac_toe/" target="_blank" style="text-decoration: underline;">Tic Tac Toe</a>
<br/>
<br/>
`;

skillsBtn.addEventListener("click", () => {
  show.innerHTML = ``;

  show.appendChild(skills);
});

workBtn.addEventListener("click", () => {
  show.innerHTML = ``;
  show.appendChild(projects);
});

resumeBtn.addEventListener("click", () => {
  show.innerHTML = ``;
  show.appendChild(resume);
});

resumeN.addEventListener("click",()=>{
  show.innerHTML = `` ;
  show.appendChild(resume) ;
})
projectN.addEventListener("click",()=>{
  show.innerHTML = `` ;
  show.appendChild(projects) ;
})
home.addEventListener("click",()=>{
  show.innerHTML=``  ;
  show.appendChild(intro) ;
})

