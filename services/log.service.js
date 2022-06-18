import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
    console.log( chalk.bgRed(' ERROR ')+' '+ error);
};

const printSuccess = (message) => {
    console.log( chalk.bgGreen(' SUCCESS ')+' '+ message);
};

// \n - перенос строки
const printHelp = () => {
    console.log(dedent
        `
        ${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t  [API_KEY] для сохранения токена
        `)
}

const printWeather = (res) => {
    console.log(dedent
        `
        ${chalk.bgYellow('WEATHER')} Погода в городе ${res.name}
        ${res.weather[0].description}
        Температура  ${res.main.temp} (ощущается как ${res.main.feels_like})
        Влажность ${res.main.humidity} %
        Скорость ветра ${res.main.speed}
        `)
}

export {printError, printSuccess, printHelp, printWeather};