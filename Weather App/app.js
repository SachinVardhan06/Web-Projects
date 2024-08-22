let location1 = document.querySelector("#entercity");
let temp = document.querySelector("#tempvalue");
let butt = document.querySelector("#buttoncity");
let state = document.querySelector("#statevalue");
let image = document.querySelector("#icon");

let api = "282355f4a4ff45228be51930242208";

async function getapi() {
  let loc = location1.value;
  image.src = "";
  let apiurl = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${encodeURIComponent(
    loc
  )}`;
  let response = await fetch(apiurl);
  let data = await response.json();
  temp.innerText = data.current.temp_c;
  let icon = data.current.condition.icon;
  state.innerText = data.location.region;
  image.src = `https:${icon}`;
}

butt.addEventListener("click", getapi);
