import axios from 'axios';

const API_KEY = '661cfbf014a960a3f3ea6968e05fde43';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
} 