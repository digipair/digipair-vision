import { noChange } from '@pinser-metaverse/core';
import { AsyncDirective } from 'lit/async-directive.js';
import { directive, DirectiveResult } from 'lit/directive.js';

interface Observable<T> {
  subscribe: (callback: (value: T) => unknown) => Subscription;
}

interface Subscription {
  unsubscribe: () => unknown;
}

class ObserveDirective extends AsyncDirective {
  private observable: Observable<any> | undefined;
  private subscription: Subscription | undefined;
  private callback?: (value: any) => unknown;
  // When the observable changes, unsubscribe to the old one and
  // subscribe to the new one
  render<T>(observable: Observable<T>, callback?: (value: T) => unknown) {
    if (this.observable !== observable) {
      this.subscription?.unsubscribe();
      this.observable = observable;
      this.callback = callback;
      if (this.isConnected) {
        this.subscribe<T>(observable);
      }
    }
    return noChange;
  }
  // Subscribes to the observable, calling the directive's asynchronous
  // setValue API each time the value changes
  private subscribe<T>(observable: Observable<T>) {
    this.subscription = observable.subscribe((v: T) => {
      this.setValue(this.callback ? this.callback(v) : v);
    });
  }
  // When the directive is disconnected from the DOM, unsubscribe to ensure
  // the directive instance can be garbage collected
  override disconnected() {
    this.subscription?.unsubscribe();
  }
  // If the subtree the directive is in was disconneted and subsequently
  // re-connected, re-subscribe to make the directive operable again
  override reconnected() {
    if (this.observable) {
      this.subscribe(this.observable);
    }
  }
}
export const observe = directive(ObserveDirective) as <T>(
  observable: Observable<T>,
  callback?: (value: T) => unknown
) => DirectiveResult<typeof ObserveDirective>;
