import React from "react";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <HistoryRouter history={history}>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<StreamList />}></Route>
            <Route path="/streams/new" exact element={<StreamCreate />}></Route>
            <Route
              path="/streams/edit/:id"
              exact
              element={<StreamEdit />}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              element={<StreamDelete />}
            ></Route>
            <Route path="/streams/:id" exact element={<StreamShow />}></Route>
          </Routes>
        </div>
      </HistoryRouter>
    </div>
  );
};

export default App;
