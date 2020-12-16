import { Injectable } from '@nestjs/common';
import {StopWatch} from 'stopwatch-node';

var performance = require("performance-now");

@Injectable()
export class StopwatchService {


    public delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    //test run watch
    public async startWatch(watchName:string, ms: number) {

        const sw:StopWatch = new StopWatch(watchName);
        sw.start("new Task");
        await this.delay(ms);
        sw.stop();
        console.log("First run cancelled");
        console.log("total time: ",sw.getTotalTime());
        console.log("Is running after stop: ", sw.isRunning());
        console.log("Short summary: ",sw.shortSummary());

        sw.start();
        await this.delay(ms*2);
        sw.stop();

        console.log("Short summary after second run", sw.shortSummary());
    }

    public async performanceTest(){

        //start tracking of time for the function
        var t0 = performance();
        
        console.log("Starting time tracking");
        console.log("************** Inside stopwatch function************");
        await this.startWatch("kpi-data", 1500);

        //mark end point of the execution
        var t1 = performance();

        console.log("Final time after t1: "+ (t1-t0).toFixed(3));   
    }

    public async consoleTimeTest(){

        console.time("startWatch");
        await this.startWatch("kpi-data", 1500);
        console.timeEnd("startWatch");
    }
    
}