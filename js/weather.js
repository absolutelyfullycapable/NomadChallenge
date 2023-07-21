/*
  - API: 다른 서버와 이야기할 수 있는 방법이라고 이해하면 됨

  - fetch 매서드: JS에서 서버로 네트워크 요청을 보내고 응답을 받을 수 있도록 해 주는 매서드, 가져오고자 하는 리소스의 경로를 나타내는 하나의 인수만 받음
  - fetch는 promise -> promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤 일어나는 것
*/

const API_KEY = "f03b35e2d277e46091dc33a49ca8a26a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // units=metric 이용하여 섭씨 온도로 나타나도록 수정

  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-of-type");
    const city = document.querySelector("#weather span:last-of-type");

    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
  }); // fetch를 사용해 url 부르기 (실제로 url에 갈 필요 없이 JS가 대신 url을 부름) -> response 받기 -> 내용을 추출했으면 data 얻기
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
