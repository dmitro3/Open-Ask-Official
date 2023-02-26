import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./components/context/AppProvider";

import { initializeApp } from "firebase/app";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = require("./App").default;

function renderApp() {
  ReactDOM.render(
    <AppProvider>
      <BrowserRouter
        basename={inIframe() ? window.location.pathname : undefined}
      >
        <App />
      </BrowserRouter>
    </AppProvider>,
    document.getElementById("root")
  );
}
function inIframe() {
  return window.self !== window.top;
}

async function run() {
  if (inIframe()) {
    console.log("in iframe");
    await window.FBMiniapp?.initializeAsync();
    await window.FBMiniapp?.startAppletAsync();
  }
  renderApp();
}

run();