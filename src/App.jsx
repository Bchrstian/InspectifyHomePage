import React from "react";


import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import AssignmentPage from "./Components/home";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AssignmentPage />}>
           
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
