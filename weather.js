let videos=document.getElementById('background-video')
let temp=document.getElementById('temperature')
let min=document.getElementById('min')
let max=document.getElementById('max')
let fel=document.getElementById('fel')
let humidity=document.getElementById('humidity')
let wind=document.getElementById('wind')
let pressure=document.getElementById('pressure')
const array1=[{
    url:'images and videos/7122113-uhd_3840_2160_30fps.mp4',
    name:'smoke',
},
{
    url:"images and videos/2569168-hd_1920_1080_24fps.mp4",
    name:'sun',
},
{
    url:"images and videos/28236-368501609_medium.mp4",
    name:'clouds',
}]
let search=document.getElementById('search')
let clicksearch=document.getElementById('clicksearch')
let cityy=document.getElementById('cityy')
let date=document.getElementById('date')
let weather=document.getElementById('weather')
const call=( async(city)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87fcf36749b5948e8a3649fcb89ba470`;

    try{
const res=await fetch(url);
const data= await res.json();
console.log(data)
cityy.innerText=data.name;
let dates=new Date()
date.innerText=`${dates.toDateString()} at ${dates.getHours()}:${dates.getMinutes()}`
weather.innerText=data.weather[0].main
console.log(data.weather)
if(data.weather[0].main=='Smoke' || data.weather[0].main=='Haze'){
videos.src=array1[0].url
}
if(data.weather[0].main=="Clouds" || data.weather[0].main=='Rain'){
videos.src=array1[2].url
}
if(data.weather[0].main=="Clear" || data.weather[0].main=="Mist"){
    videos.src=array1[1].url
}

temp.innerText=data.main.temp
min.innerText=data.main.temp_min
max.innerText=data.main.temp_max
fel.innerText=data.main.feels_like
humidity.innerText=data.main.humidity
wind.innerText=data.main.sea_level
pressure.innerText=data.main.pressure
    }
    catch(err){
        alert('you had written wrong city')
       console.log(err)
    }
})
clicksearch.onclick=()=>{
if(search.value!=""){
call(search.value)
search.value=""

}
}
