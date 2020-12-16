"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopwatchService = void 0;
const common_1 = require("@nestjs/common");
const stopwatch_node_1 = require("stopwatch-node");
var performance = require("performance-now");
let StopwatchService = class StopwatchService {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async startWatch(watchName, ms) {
        const sw = new stopwatch_node_1.StopWatch(watchName);
        sw.start("new Task");
        await this.delay(ms);
        sw.stop();
        console.log("First run cancelled");
        console.log("total time: ", sw.getTotalTime());
        console.log("Is running after stop: ", sw.isRunning());
        console.log("Short summary: ", sw.shortSummary());
        sw.start();
        await this.delay(ms * 2);
        sw.stop();
        console.log("Short summary after second run", sw.shortSummary());
    }
    async performanceTest() {
        var t0 = performance();
        console.log("Starting time tracking");
        console.log("************** Inside stopwatch function************");
        await this.startWatch("kpi-data", 1500);
        var t1 = performance();
        console.log("Final time after t1: " + (t1 - t0).toFixed(3));
    }
    async consoleTimeTest() {
        console.time("startWatch");
        await this.startWatch("kpi-data", 1500);
        console.timeEnd("startWatch");
    }
};
StopwatchService = __decorate([
    common_1.Injectable()
], StopwatchService);
exports.StopwatchService = StopwatchService;
//# sourceMappingURL=stopwatch-service.js.map