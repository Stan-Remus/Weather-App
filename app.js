let h1 = document.getElementById("h1");
let grade = document.getElementById("grade");
const newLocal = "metric";
let units = newLocal;

window.addEventListener("load", () =>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "http://cors-anywhere.herokuapp.com/"
            const api = proxy + "api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon="+ long + "&appid=65ccdc7ab303cbeafd176b38bbdf01da"
            
            fetch(api)
      .then(response => {
          return response.json();
      }) 
      .then(data => {
          console.log(data);
          h1.textContent = data.name;
          grade.textContent = Math.floor(data.main.temp - 273);
      }) 
        });
        
    }else{
        h1.textContent = "Internet Down";
    }
});