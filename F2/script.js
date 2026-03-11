const TITLES = {
  es: {
    profile: "Perfil Profesional",
    experience: "Experiencia Laboral",
    skills: "Habilidades Técnicas",
    education: "Educación"
  },
  es_upper: {
    profile: "PERFIL PROFESIONAL",
    experience: "EXPERIENCIA LABORAL",
    skills: "HABILIDADES TÉCNICAS",
    education: "EDUCACIÓN"
  },
  en: {
    profile: "Professional Profile",
    experience: "Work Experience",
    skills: "Hard Skills",
    education: "Education"
  },
  en_upper: {
    profile: "PROFESSIONAL PROFILE",
    experience: "WORK EXPERIENCE",
    skills: "HARD SKILLS",
    education: "EDUCATION"
  }
};

const T = TITLES.es_upper; // Default to English titles

function renderHeader(data) {
  return `
    <h1>${data.name}, ${data.title}</h1>
    <p>
      <a href="mailto:${data.contact.email}">
        ${data.contact.email}, ${data.contact.phone}
      </a>
    </p>
  `;
}

function renderProfessionalProfile(data) {
  return `
    <h2 class="section-title">${T.profile}</h2>
    <p>${data.professional_profile}</p>
  `;
}

function renderWorkExperience(data) {
  return `
    <h2 class="section-title">${T.experience}</h2>
    ${data.work_experience.map(job => `
      <article class="job-position">
        <header class="header-job section-subtitle">
        <div class="time section-subtitle">
          <p>${job.period}</p>
        </div>
        <div class="company section-subtitle">
          <p>${job.position}, ${job.company}</p>
        </div>
        </header>
        <div class="responsabilities">
          <div></div>
          <ul>
            ${job.responsabilities.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      </article>
    `).join("")}
  `;
}

function renderHardSkills(data) {
  return `
    <h2 class="section-title">${T.skills}</h2>
    <article>
      <ul>
        ${data.hard_skills.map(skill => `<li>${skill}</li>`).join("")}
      </ul>
    </article>
  `;
}

function renderEducation(data) {
  return `
    <h2 class="section-title">${T.education}</h2>
    <div class="education-list">
      ${data.education.map(edu => `
        <article class="education-data">
          <div class="date">${edu.period}</div>
          <div class="details">
            <p class="section-subtitle">
              ${edu.degree}
            </p>
            <p>${edu.institution}</p>
            <p>-</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

document.querySelector("header.contact-info").innerHTML = renderHeader(data);
document.getElementById("professional-profile").innerHTML = renderProfessionalProfile(data);
document.getElementById("work-experience").innerHTML = renderWorkExperience(data);
document.getElementById("hard-skills").innerHTML = renderHardSkills(data);
document.getElementById("education").innerHTML = renderEducation(data);
