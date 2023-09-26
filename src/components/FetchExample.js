import React, { Component } from "react";
import Card from "./Person"; // Import the Card component

class FetchExample extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      <div>
        <h1>Fetch API Example</h1>
        <div className="card-container">
          {data.map((item) => (
            <Card
              id={item.id}
              email={item.email}
              username={item.username}
              name={item.name}
              phone={item.phone}
              website={item.website}
              street={item.address.street}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default FetchExample;
