export type DelayedFunction = (...args: unknown[]) => void;

export function debounceFrame(func: DelayedFunction): DelayedFunction {
  let timer: number;
  return function(...args) {
    if (timer) cancelAnimationFrame(timer);

    timer = requestAnimationFrame(() => {
      func(args);
    });
  };
}

export function debounce(func: DelayedFunction, time: number): DelayedFunction {
  let timer: NodeJS.Timeout;
  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func(args);
    }, time);
  };
}

export function throttle(func: DelayedFunction, time: number): DelayedFunction {
  let wait = false;
  return function(...args) {
    if (wait) return;

    func(args);
    wait = true;

    setTimeout(() => {
      wait = false;
    }, time);
  };
}
