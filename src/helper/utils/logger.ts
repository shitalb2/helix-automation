import {transports, format} from "winston";
import winston from "winston/lib/winston/config";

export function options(scenarioName: string){
    return{
        transports: [
            new transports.File({
                
            })
        ]
    }
}


