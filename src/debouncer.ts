/**
 * Designed to control the number of calls. Used to set the delay between events.
 */

export default function debouncer (callback: Function, timeout = 200, ...args: any): Function {
  let timeoutID;
  return function () {
    const _this = this;
    clearTimeout( timeoutID );
    timeoutID = setTimeout( function () {
      callback.apply( _this, args )
    }, timeout )
  }
}
