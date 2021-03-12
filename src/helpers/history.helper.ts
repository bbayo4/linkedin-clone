import { createBrowserHistory } from "history";

declare global {
  interface Window {
    dataLayer: any;
  }
}

export const history = createBrowserHistory();
