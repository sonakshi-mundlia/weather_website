const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_realVal = document.getElementById("temp_realVal");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
const curTime = document.getElementById("top_layer");


const info = async(event) => {

    event.preventDefault();
    let cityVal = cityName.value ;

    if(cityVal === ""){
        city_name.innerText = "Plz write the name before search";
        datahide.classList.add("data_hide");

    }else{
        try{
        let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4189dc1240a817b0f03d4e7867db213c`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
        temp_realVal.innerText = arrData[0].main.temp;
        const tempMode = arrData[0].weather[0].main;

        if (tempMode == "Clear"){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }else if (tempMode == "Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }
        else if (tempMode == "Rain"){
            temp_status.innerHTML = 
            "<i class='fas fa-rain' style='color: #a4b0be;'></i>";

        }else {
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }
       
        datahide.classList.remove("data_hide");

        }catch {
            city_name.innerText = "Plz enter the city name properly";
            datahide.classList.add("data_hide");
        }
        
    }
    
    
   

};
submitBtn.addEventListener("click" , info);