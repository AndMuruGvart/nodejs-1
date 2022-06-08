#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { printHelp } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";


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
        saveKeyValue();
    };
    // Вывести погоду
}

initCli();