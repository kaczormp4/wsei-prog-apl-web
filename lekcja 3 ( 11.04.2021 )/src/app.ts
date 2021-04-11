export class App {
    Main(){
        this.createInput();
        this.createWeatherBox();
        this.createWeatherBox();
    }
    createInput(){
        const input: HTMLInputElement = document.createElement("input");
        document.body.appendChild(input)
    }
    createWeatherBox(){
        const divBox: HTMLElement = document.createElement("div");
        divBox.innerHTML = "KLIKER";
        divBox.className = "divBox";
        document.body.appendChild(divBox)
    }
    opwApiKey = '50d53005c0fd5f556bb4ef15224c4209';
    constructor(){
        this.getCityInfo('radom');
    }
    async getCityInfo(city:string){
        const weather = await this.getWeather('radom');
        this.saveData(weather);
    }
    async getWeather(city: string): Promise<any>{
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data:any){
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData(){
        const data = localStorage.getItem('weatherData');
        if (data){
            return JSON.parse(data);
        }else{
            return {}
        }
    }
}



