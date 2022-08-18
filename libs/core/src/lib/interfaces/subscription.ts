export interface subscription {
  el: Element;
  type: string;
  listener: () => void;
}
