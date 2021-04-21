export class App {
    Main(){
        this.createInput();
        this.searchInput();
        this.createWeatherBox('KATOWICE');
        this.createWeatherBox('RADOM');
    }
    createInput(){
        const input: HTMLInputElement = document.createElement("input");
        input.className = "textInput";
        input.id = "textInput";
        document.body.appendChild(input)   
    }
    searchInput(){
        const searchInput: HTMLInputElement = document.createElement("input");
        searchInput.className = "searchInput";
        searchInput.value = "+";
        searchInput.addEventListener("click",getTownName);
        document.body.appendChild(searchInput);
        function getTownName(){
            var townValue = document.getElementById("textInput");
            console.log(townValue.value)
        }
    }
    createWeatherBox(dataName:string){
        let data:any = localStorage.getItem(dataName);
        data = JSON.parse(data)

        const divBox: HTMLElement = document.createElement("div");
        const temperature: HTMLElement = document.createElement("div");
        const clouds: HTMLElement = document.createElement("div");
        const info: HTMLElement = document.createElement("div");
        const moreinfo: HTMLElement = document.createElement("div");
        divBox.className = "divBox";
        temperature.className = "temperature";
        clouds.className = "clouds";
        info.className = "info";
        moreinfo.className = "moreinfo";

        divBox.innerHTML = data.name;
        temperature.innerHTML = `${Math.floor(data.main.temp)} °C`;
        clouds.innerHTML = data.weather[0].main;
        info.innerHTML = `MORE INFO`;
        info.addEventListener("click",showMore);
        moreinfo.innerHTML = `
        <ul>
         <li> feels like: ${data.main.feels_like}</li> 
         <li> temp min: ${data.main.temp_min}</li> 
         <li> temp max: ${data.main.temp_max}</li> 
         <li> wind speed: ${data.wind.speed}</li>    
        </ul>
        `;

        divBox.appendChild(temperature);
        divBox.appendChild(clouds);
        divBox.appendChild(info);
        divBox.appendChild(moreinfo);
        document.body.appendChild(divBox);

        function showMore(){
            if(moreinfo.style.display !== "none"){
                moreinfo.style.display = "none";
            }else{
                moreinfo.style.display = "block";
            }
            // if(moreinfo.className  !== "moreinfo"){
            //     moreinfo.className = "moreinfo";
            // }else{
            //     moreinfo.className = "moreinfo-open";
            // }
        }
    }
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor(){
        this.getCityInfo('radom');
    }
    async getCityInfo(city:string){
        const weather = await this.getWeather('radom');
        const weather2 = await this.getWeather('katowice');
        this.saveData("RADOM",weather);
        this.saveData("KATOWICE",weather2);
    }
    async getWeather(city: string): Promise<any>{
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(saveName:string ,data:any){
        localStorage.setItem(saveName, JSON.stringify(data));

    }
    // getData(){
    //     const data = localStorage.getItem('weatherData');
    //     if (data){
    //         return JSON.parse(data);
    //     }else{
    //         return {}
    //     }
    // }
}



