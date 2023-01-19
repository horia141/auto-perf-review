import ReactDOM from "react-dom/client";
import "./index.sass";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Analytics } from "./business/analytics";
import { HomePage } from "./pages/HomePage";
import { SelectPersonaPage } from "./pages/performance-review/SelectPersonaPage";
import { PerformanceReviewPage } from "./pages/performance-review/PerformanceReviewPage";

export enum API_ROUTES {
  HOME = "/",
  PERF_REVIEW_PERSONA = "/performance-review/persona",
  PERF_REVIEW_RESULT = "/performance-review/result",
}

const router = createBrowserRouter([
  {
    path: API_ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: API_ROUTES.PERF_REVIEW_PERSONA,
    element: (
      <>
        <SelectPersonaPage />
        <ScrollRestoration />
      </>
    ),
  },
  {
    path: API_ROUTES.PERF_REVIEW_RESULT,
    element: (
      <>
        <PerformanceReviewPage />
        <ScrollRestoration />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

// if you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
Analytics.init(process.env.REACT_APP_MIXPANEL_TOKEN);
Analytics.loaded();
