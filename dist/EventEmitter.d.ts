declare type EventList = {
    [key: string]: Array<Function>;
};
export default class EventEmitter {
    events: EventList;
    constructor();
    on(eventName: string, callback: Function): Function;
    emit(eventName: string, data?: any): void;
}
export {};
