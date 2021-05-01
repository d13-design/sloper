export interface InterserctionCallback {
  (entry: IntersectionObserverEntry): void
}

/**
 * Wrapper for the IntersectionObserver that features a callback function per element
 */
export class VisibilityManager<T> {
  private subscribers: T[] = [];
  private options: IntersectionObserverInit = {
    threshold: [0, 1]
  };
  private instance!: IntersectionObserver;

  constructor(
    private subscriberElement: (subscriber: T) => Element,
    private subscriberCallback: (subscriber: T) => InterserctionCallback,
    options?: IntersectionObserverInit
  ) {
    if (options) {
      this.options = {
        ...this.options,
        ...options
      };
    }
  }

  private create(): IntersectionObserver {
    if (!this.instance) {
      this.instance = new IntersectionObserver(this.handleEvents, this.options);
    }
    return this.instance;
  }

  private destroy(): void {
    if (this.instance) {
      this.instance.disconnect();
    }
    this.subscribers.length = 0;
  }

  private subscriberByElement(element: Element): T | undefined {
    return this.subscribers.find(entry => element === this.subscriberElement(entry));
  }

  private handleEvents(entries: IntersectionObserverEntry[]) {
    entries.forEach(entry => {
      const subscriber = this.subscriberByElement(entry.target);
      if (!subscriber) {
        return;
      }
      const callback = this.subscriberCallback(subscriber);
      if (!callback) {
        return;
      }
      callback(entry);
    });
  }

  observe(subscriber: T): () => void {
    const idx = this.subscribers.indexOf(subscriber);
    if (idx === -1) {
      this.subscribers.push(subscriber);
      this.create().observe(this.subscriberElement(subscriber));
    }

    return () => {
      this.unobserve(subscriber);
    };
  }

  unobserve(subscriber: T): void {
    const idx = this.subscribers.indexOf(subscriber);
    if (idx > -1) {
      this.subscribers.splice(idx, 1);

      if (this.instance) {
        this.instance.unobserve(this.subscriberElement(subscriber));
      }
    }

    if (!this.subscribers.length) {
      this.destroy();
    }
  }
}
