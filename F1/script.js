// Header
const header = document.querySelector("header.contact-info");
header.innerHTML = `<h1>${data.name}, ${data.title}</h1><p><a href="mailto:${data.contact.email}">${data.contact.email}, ${data.contact.phone}</a></p>
  `;

// Professional Profile
const profSection = document.getElementById("professional-profile");
profSection.innerHTML = `
    <h2 class="section-title">PROFESSIONAL PROFILE</h2>
    <p>${data.professional_profile}</p>
  `;

// Work Experience
const workSection = document.getElementById("work-experience");
workSection.innerHTML = `
    <h2 class="section-title">WORK EXPERIENCE</h2>
    ${data.work_experience
        .map(
            (job) => `
      <article class="job-position">
        <header class="header-job section-subtitle">
          <h3>${job.position}, <strong>${job.company}</strong></h3>
          <div class="time section-subtitle">
            <h3>${job.period}</h3>
            <h3>${job.location}</h3>
          </div>
        </header>
        <div class="responsabilities">
          <ul>
            ${job.responsabilities.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
        )
        .join("")}
  `;

// Hard Skills
const skillsSection = document.getElementById("hard-skills");
skillsSection.innerHTML = `
    <h2 class="section-title">HARD SKILLS</h2>
    <article>
      <ul>
        ${data.hard_skills.map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </article>
  `;

// Education
const educationSection = document.getElementById("education");
educationSection.innerHTML = `
    <h2 class="section-title">EDUCATION</h2>
    <div class="education-list">
      ${data.education
        .map(
            (edu) => `
        <article class="education-data">
          <div class="date">${edu.period}</div>
          <div class="details">
            <h3 class="section-subtitle">${edu.degree}</h3>
            <p>${edu.institution}</p>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;

