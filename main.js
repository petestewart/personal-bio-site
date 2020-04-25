console.log('bio!');

const projects = [
    {
        title: "Cool Project1", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", 
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project2", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", 
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project3", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", 
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      },
      {
        title: "Cool Project4", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", 
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
]

const printToDom = (elementID, content) => {
    const selectedDiv = document.querySelector(elementID);
    selectedDiv.innerHTML = content;
}

const createProjectCards = (contentArray) => {
    let domString = '';
    for (let i=0; i<contentArray.length; i++) {
        domString += '<div class="card">';
        domString += ` <div class="cardTitle">${projects[i].title}</div>`;
        domString += ` <div class="cardDescription">${projects[i].description}</div>`;
        domString += ` <div class="cardTechnologiesUsed">${projects[i].technologiesUsed}</div>`;
        domString += ` <div class="cardUrl">${projects[i].url}</div>`;
        domString += ` <div class="cardGitHubUrl">${projects[i].githubUrl}</div>`;
        domString += '</div>';
    };
    return domString;
}

const init = () => {
    printToDom('#projectsPage', createProjectCards(projects));
}

init();
