import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const projectsObjs = response.data;
      const projects = [];
      console.error(projects);
      Object.keys(projectsObjs).forEach((projectId) => {
        projectsObjs[projectId].id = projectId;
        projects.push(projectsObjs[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjectsData };
