const button = document.querySelector(".btn btn-primary");

const url = "https://randomuser.me/api/";

function getStuff() {
  fetch(`${url}`)
    .then(res => res.json())
    .then(json => appendToDom(json));
}

function appendToDom(json) {
  console.log(json);
  const profPic = document.getElementById("profile_picture");
  profPic.setAttribute("src", `${json.results[0].picture.thumbnail}`);
  setName(json);
  setEmail(json);
  setStreet(json);
  setCity(json);
  setState(json);
  setPostCode(json);
  setPhone(json);
  setCell(json);
  setDOB(json);
}

function setName(json) {
  const name = document.getElementById("fullname");
  name.innerText = json.results[0].name.first + " " + json.results[0].name.last;
}
function setEmail(json) {
  const email = document.getElementById("email");
  email.innerText = json.results[0].email;
}

function setStreet(json) {
  const street = document.getElementById("street");
  street.innerText = json.results[0].location.street;
}

function setCity(json) {
  const city = document.getElementById("city");
  city.innerText = json.results[0].location.city;
}

function setState(json) {
  const state = document.getElementById("state");
  state.innerText = json.results[0].location.state;
}

function setPostCode(json) {
  const postcode = document.getElementById("postcode");
  postcode.innerText = json.results[0].location.postcode;
}

function setPhone(json) {
  const phone = document.getElementById("phone");
  phone.innerText = json.results[0].phone;
}
function setCell(json) {
  const cell = document.getElementById("cell");
  cell.innerText = json.results[0].cell;
}
function setDOB(json) {
  const date_of_birth = document.getElementById("date_of_birth");
  const dob = new Date(json.results[0].dob).toDateString();
  date_of_birth.innerText = dob;
}
