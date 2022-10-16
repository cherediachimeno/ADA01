const submit = window.document.getElementById("submit");
const projectsContainer = document.getElementById("projects-container");
const featureContainer = document.getElementById("feature-container");

const projects = [];
let nextId = 1;

function handleClick(event) {
  event.preventDefault();

  //grab the three elements
  const url = document.getElementById("ImageUrl");
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  //store this info in my project array
  //we're giving each project an incremental ID, to simulate how things are stored in a Database
  const project = {
    url: url.value,
    title: title.value,
    description: description.value,
    id: nextId
  };

  //increase the ID for the next project
  nextId++;

  //we store the project in an array, for future access
  projects.push(project);

  //create a new image
  const image = document.createElement("img");
  //setting the image attributes
  image.src = url.value;
  image.className = "grid-item img-fluid rounded shadow";
  //add a click event listener to the image
  image.addEventListener("click", function() {
    //when we click on the image, we want to incoke imgClick and pass along the ID of the project that was clicked
    imgClick(project.id);
  });

  //create a little container for the image
  const imageContainer = document.createElement("div");
  imageContainer.className = "col-3 mb-4";
  //append the image to the container
  imageContainer.appendChild(image);

  //and finally - showing the image on the page by appending the imageContainer into the projectsContainer
  projectsContainer.appendChild(imageContainer);
}

function imgClick(id) {
  const project = projects.find(project => project.id === id);

  //we have initialized those in the HTML, so let's grab them
  const featureImage = document.querySelector("#featuredImage");
  const featureTitle = document.querySelector("#featuredTitle");
  const featureDesc = document.querySelector("#featuredDesc");

  //and change their attributes
  featureImage.src = project.url;
  featureTitle.innerText = project.title;
  featureDesc.innerText = project.description;
}

submit.addEventListener("click", handleClick);
