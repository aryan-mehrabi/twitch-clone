import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamNew from "./streams/StreamNew";
import StreamShow from "./streams/StreamShow";
import Headers from "./Headers"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Headers />
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" exact element={<StreamNew />} />
          <Route path="/streams/edit" exact element={<StreamEdit />} />
          <Route path="/streams/delete" exact element={<StreamDelete />} />
          <Route path="/streams/show" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
