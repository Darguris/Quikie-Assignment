import React, { Component } from "react";
import Table from "./table";
import axios from "axios";
import LoadingGif from "../Assets/loading.gif";
import { Link } from "react-router-dom";
import view from "../pages/view";
class Search extends Component {
  state = {
    query: "",
    result: [],
    error: false,
    firstLoad: true,
    loading: false,
  };

  getInfo = () => {
    const apiurl =
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" +
      this.state.query +
      "&apikey=FO3JLJ34Z04G1JWR";
    axios
      .get(apiurl)
      .then((res) => {
        let data = res.data.bestMatches;
        data.forEach((bestMatch) => {
          delete bestMatch["4. region"];
          delete bestMatch["3. type"];
          delete bestMatch["5. marketOpen"];
          delete bestMatch["6. marketClose"];
          delete bestMatch["7. timezone"];
          delete bestMatch["8. currency"];
          delete bestMatch["9. matchScore"];
        });
        this.setState({
          result: data.slice(0, 5),
          loading: false,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
          loading: false,
        });

        this.setState({
          result: [],
        });
      });
  };

  handleInput = () => {
    this.setState(
      {
        query: this.search.value,
        firstLoad: false,
        loading: true,
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          this.getInfo();
        } else {
          this.setState({
            result: [],
            error: false,
          });
        }
      }
    );
  };

  render() {
    return (
      <div className="container">
        <label className="search-label" htmlFor="search-input">
          <input
            placeholder="Search Company here"
            ref={(input) => (this.search = input)}
          />
          <button className="searchButton" onClick={this.handleInput}>
            Search
          </button>
          <Link to="/view">
            <button className="searchButton">View Saved Stocks</button>
          </Link>
        </label>
        {!this.state.loading && (
          <div>
            <Table tableData={this.state.result}></Table>
          </div>
        )}
        {this.state.loading && !this.state.firstLoad && (
          <img className="loading" src={LoadingGif} alt="Loading..." />
        )}
      </div>
    );
  }
}
export default Search;
