import '../styles/main.scss';
import 'bootstrap';
import projectsData from './helpers/projectsData';

const projects = projectsData.getProjects();

const printToDom = (elementID, content) => {
  const selectedDiv = document.querySelector(elementID);
  selectedDiv.innerHTML = content;
};

const createProjectCards = (contentArray) => {
  let domString = '';
  for (let i = 0; i < contentArray.length; i += 1) {
    domString += '<div class="card">';
    domString += ` <div class="cardTitle">${projects[i].title}</div>`;
    domString += ` <div class="cardImage"><img src="${projects[i].screenshot}" alt="screenshot"></div>`;
    domString += ` <div class="cardDescription">${projects[i].description}</div>`;
    domString += ` <div class="cardTechnologiesUsed">${projects[i].technologiesUsed}</div>`;
    domString += ` <div class="cardLink"><a href="${projects[i].url}">WebLink</a></div>`;
    domString += ` <div class="cardLink"><a href="${projects[i].githubUrl}">GitHub</a></div>`;
    domString += '</div>';
  }
  return domString;
};

const init = () => {
  printToDom('#projectsGrid', createProjectCards(projects));
};

init();
