import '../styles/main.scss';
import 'bootstrap';
import projectsData from './helpers/data/projectsData';

const printToDom = (elementID, content) => {
  const selectedDiv = document.querySelector(elementID);
  selectedDiv.innerHTML = content;
};

const createProjectCards = () => projectsData.getProjectsData()
  .then((projects) => {
    let domString = '<div id="website-cards">';
    projects.forEach((project) => {
      domString += `<div class="card mb-3" style="max-width: 900px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="${project.screenshot}" class="card-img" alt="${project.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <p class="card-text"><small class="text-muted">${project.technologiesUsed}</small></p>
          </div>
        </div>
      </div>
    </div>`;
    });
    domString += '</div>';
    printToDom('#projectsGrid', domString);
  })
  .catch((err) => { console.error(err); });

// const createProjectCards = () => projectsData.getProjectsData()
//   .then((projects) => {
//     let domString = '';
//     projects.forEach((project) => {
//       domString += '<div class="card">';
//       domString += ` <div class="cardTitle">${project.title}</div>`;
//       domString += ` <div class="cardImage"><img src="${project.screenshot}" alt="screenshot"></div>`;
//       domString += ` <div class="cardDescription">${project.description}</div>`;
//       domString += ` <div class="cardTechnologiesUsed">${project.technologiesUsed}</div>`;
//       domString += ` <div class="cardLink"><a href="${project.url}">WebLink</a></div>`;
//       domString += ` <div class="cardLink"><a href="${project.githubUrl}">GitHub</a></div>`;
//       domString += '</div>';
//     });
//     printToDom('#projectsGrid', domString);
//   })
//   .catch((err) => { console.error(err); });

const init = () => {
  createProjectCards();
};

init();
