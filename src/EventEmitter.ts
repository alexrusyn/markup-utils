type EventList = { [key: string]: Array<Object> };

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
    const event = this.events[eventName];
    if ( !event ) return;
    event.forEach( (callback: Function) => callback.call(null, data) );
  }
}
