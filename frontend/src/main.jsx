import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>LibraFlow</h1>
      <p>Smart Library Management System</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
