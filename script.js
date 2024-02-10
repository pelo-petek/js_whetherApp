const apiKey = "";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
       
       
        let input = document.getElementById("input");
        let temp = document.querySelector(".temperature");
        let city = document.querySelector(".city");
        let humidity = document.querySelector(".humidity");
        let speed = document.querySelector(".speed");
        let image = document.querySelector(".img")

        async function checkWeather(){
        const response = await fetch(apiUrl+ input.value + "&appid=33bf20e60720da3a19b430dda0764b54");
        var data = await response.json();
        
        if(response.status == 404){
            alert("please enter a valid city name");
        }

        switch(data.weather[0].main){
            case "Clouds":
                image.src= "photos/clouds.png"
                break;
            case "Clear":
                image.src= "photos/clear.png"
                break;
            case "Drizzle":
                image.src= "photos/drizzle.png"
                break;
            case "Mist":
                image.src= "photos/mist.png"
                break;
            case "Rain":
                image.src= "photos/rain.png"
                break;
            case "Snow":
                image.src= "photos/snow.png"
                break;                
        }
        
        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp;
        humidity.innerHTML = data.main.humidity;
        speed.innerHTML = data.wind.speed;
        
        
        
        
        console.log(data);

    

}
