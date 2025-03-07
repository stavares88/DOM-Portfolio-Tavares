var projectSection = document.getElementById("projects");

// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  for (var i = 0; i < projects.length; i++)
    projectSection.innerHTML += `<div class="card">
  <span>${projects[i].title}</span>
  <img src="${projects[i].image}" alt="">
  <span>${projects[i].description}</span>
</div>`

}

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  var title = document.getElementById('title').value;
  var img = document.getElementById("image").value;
  var desc = document.getElementById("desc").value;

  // Create a new project object
  var newProject = {
    "title": title,
    "image": img,
    "description": desc
  }

  // Add the new project object to the projects array 
  projects.push(newProject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
