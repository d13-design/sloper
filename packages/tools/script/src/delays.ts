export type VoidFunction = (...args: unknown[]) => void;

export function debounceFrame(func: VoidFunction): VoidFunction {
  let timer: number;
  return function(...args) {
    if (timer) cancelAnimationFrame(timer);

    timer = requestAnimationFrame(() => {
      func(args);
    });
  };
}

export function debounce(func: VoidFunction, time: number): VoidFunction {
  let timer: NodeJS.Timeout;
  return function(...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      func(args);
    }, time);
  };
}

export function throttle(func: VoidFunction, time: number): VoidFunction {
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
