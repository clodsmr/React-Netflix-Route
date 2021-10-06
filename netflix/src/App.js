import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Galleries from "./components/Galleries";
import Navbarr from "./components/Navbarr";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import MyFooter from "./components/MyFooter";
import Search from "./components/Search";
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

class App extends React.Component {
  state = {
    query: "",
  };
  render() {
    return (
      <div className="App">
        <Router>
       {/*   <Link to="/details/123123"> try this out</Link>  */}
            <Switch>
            <Route path="/details/:asin"> 
            <MovieDetails />
            </Route>
            <Route path="/">
              <Navbarr
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            
              <Container fluid className="mb-5 px-5">
                {this.state.query.length < 3 && (
                  <>
                    {" "}
                    <Galleries movie="harry potter" />
                    <Galleries movie="Star wars" />
                    <Galleries movie="Batman" />
                  </>
                )}
              </Container>
              {this.state.query.length > 3 && (
                <Search query={this.state.query} />
              )}
            
              <MyFooter />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
