export declare class StopwatchService {
    delay(ms: number): Promise<unknown>;
    startWatch(watchName: string, ms: number): Promise<void>;
    performanceTest(): Promise<void>;
    consoleTimeTest(): Promise<void>;
}
