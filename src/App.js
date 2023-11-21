import React from "react";

import About from "./component/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";
const AllProductsPage = lazy(() => import("./component/AllProductsPage"));

function App() {
  return (
    // <div className="App">
    //   <AllProductsPage />
    // </div>
    <Router>
      <div className="App">
        <div className="link">
          <p>
            <Link to={"/products"} className="link">
              Product
            </Link>
          </p>
          <p>
            <Link to={"/"} className="link">
              About
            </Link>
          </p>
        </div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route exact path="/products" component={AllProductsPage} />
            <Route path="/" component={About} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
