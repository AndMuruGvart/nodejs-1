#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";


const initCli = () => {
    const args=getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    };
    if (args.s) {
        //Сохранить город
    };
    if (args.t) {
        //Сохранить токен
    };
    // Вывести погоду
}

initCli();