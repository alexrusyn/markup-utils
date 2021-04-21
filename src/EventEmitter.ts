type EventList = { [key: string]: Array<Function> };

export default class EventEmitter {
  events: EventList

  /**
   * Used to create and track events
   */

  constructor () {
    this.events = {}
  }

  /**
   * Creates an event by key, and saves the callback
   */

  on (eventName: string, callback: Function): Function {
    if ( !this.events[eventName] ) this.events[eventName] = [];
		this.events[eventName].push(callback);
		return () => this.events[eventName] = this.events[eventName].filter(e => callback !== e);
  }

  /**
   * Call an event by key and triggers a callback
   */

  emit (eventName: string, data?: any): void {
    const event: Function[] | undefined = this.events[eventName];
    if ( event ) event.forEach((callback) => callback.call(null, data) );
  }
}
