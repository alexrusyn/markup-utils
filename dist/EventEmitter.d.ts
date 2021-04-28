declare type EventList = {
    [key: string]: Array<Function>;
};
declare type Data = {
    [key: string]: string | number;
} | Array<string> | Array<number>;
export default class EventEmitter {
    events: EventList;
    constructor();
    on(eventName: string, callback: Function): Function;
    emit(eventName: string, data?: Data): void;
}
export {};
