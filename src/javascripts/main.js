import '../styles/main.scss';
import 'bootstrap';
import projectsData from './helpers/data/projectsData';
import navbar from './components/navbar';
import utils from './helpers/utils';
import mailto from './components/mailto';

const createProjectCards = () => projectsData.getProjectsData()
  .then((projects) => {
    let domString = '<div id="website-cards">';
    projects.forEach((project) => {
      if (project.available) {
        domString += `<div class="card mb-3" style="max-width: 900px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="${project.githubUrl}" target="_blank">
            <img src="${project.screenshot}" class="card-img" alt="${project.title}">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <p class="portfolio-links">
            <a href="${project.githubUrl}" target="_blank"><i class="fab fa-github fa-2x"></i></a>
            <a href="${project.url}" target="_blank"><i class="fas fa-desktop fa-2x"></i></a></p>
            <p class="card-text"><small class="text-muted">${project.technologiesUsed}</small></p>
          </div>
        </div>
      </div>
    </div>`;
      }
    });
    domString += '</div>';
    utils.printToDom('#projectsGrid', domString);
  })
  .catch((err) => { console.error(err); });

const insertMailLink = () => {
  mailto.mailLink('#top-mail-link', '<i class="fas fa-at">');
  mailto.mailLink();
};

const init = () => {
  navbar.createNavbar();
  createProjectCards();
  insertMailLink();
};

init();
