let url = "https://api.openweathermap.org/data/2.5/weather";
let appid = "b35433a4d41ae6b847f7b1475f9c6ef8";
let search = document.querySelector("#search");
search.addEventListener("click", getData);
async function getData(){
    let cityName = document.querySelector("#cityname").value;
    try{
        let res = await fetch(url+"?q="+cityName+"&appid="+appid);
        let out = await res.json();
        displayWeather(out);
    }
    catch(err){
        console.log(err);
        let not_found = document.createElement("img");
        not_found.src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12757.jpg?w=740&t=st=1667731604~exp=1667732204~hmac=0ed51390fab05327d70af43750371a74a19690d106e2ddbcfc8fb8d0c7a023b4";
        not_found.style.width="100%"
        document.querySelector("#display").append(not_found);
    }
}

let display = document.querySelector("#display");
function displayWeather(data){
    display.innerHTML=null;
    display.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px";
    let cityName = document.querySelector("#cityname").value;
    if(cityName===""){
        return;
    }
        let divTxt = document.createElement("div");
        let name = document.createElement("h2");
        name.innerText = "Name:"+data.name;
        let temper = document.createElement("h3");
        temper.innerText = data.main.temp+" "+"Farhenhite";
        let feelslike = document.createElement("p");
        feelslike.innerText = "Feels like:"+data.main.feels_like;
        let lat = document.createElement("h4");
        lat.innerText = "Latitude:"+" "+data.coord.lat+" "+"and"+" "+"Longtude:"+" "+data.coord.lon;;
        let humidity = document.createElement("h3");
        humidity.innerText = "Humidity:"+data.main.humidity;
        let weather = document.createElement("p");
        weather.innerText = "Weather is like:"+data.weather[0].main;
        let visibility = document.createElement("h4");
        visibility.innerText = "Visibilty:"+data.visibility;
        let wind = document.createElement("h3");
        wind.innerText = "Wind Speed:"+data.wind.speed;
        let next7 = document.createElement("button");
        next7.innerText="See Next 7 days Weather";
        next7.setAttribute("id","next7");
        divTxt.append(name,temper,feelslike,lat,humidity,weather,visibility,wind,next7);
        let mapDiv = document.createElement("div");
        let frame = document.createElement("iframe");
        frame.style.width="100%";
        frame.style.height="100%";
        frame.style.border="0";
        frame.src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAipLd_dw7_Y0pWOWLD0G-Rz9j1_XdDFV8"+"&q="+cityName;
        mapDiv.append(frame);
        display.append(divTxt,mapDiv);
}

