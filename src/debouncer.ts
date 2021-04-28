/**
 * Designed to control the number of calls. Used to set the delay between events.
 */

export default function debouncer(callback: Function, timeout = 200, ...args: any): EventListener {
  let timeoutID: ReturnType<typeof setTimeout>;
  return function () {
    const _this: Function = this;
    window.clearTimeout(timeoutID);
    timeoutID = setTimeout(function () {
      callback.apply(_this, args)
    }, timeout)
  }
}
