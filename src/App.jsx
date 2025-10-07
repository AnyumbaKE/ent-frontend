import React from "react";
import AllRouting from "./containers/Routing/AllRouting";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <AllRouting />
      <Toaster
        position="top-right"
        toasterOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
