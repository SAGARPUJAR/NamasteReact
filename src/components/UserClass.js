import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "https://via.placeholder.com/280x180",
        blog: "Dummy Blog",
        repos_url: "Dummy Repos URL",
      },
    };
    // console.log(this.props.name + " Constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sagarpujar");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + " Render");
    // const { name, rating, price, description } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url, blog, repos_url } = this.state.userInfo;
    return (
      <div className="card">
        <h2>count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease
        </button>
        <img className="card-img" src={avatar_url} alt="Restaurant" />

        <div className="card-content">
          <h2 className="card-title">{name}</h2>

          <p className="card-rating">{location}</p>

          <p className="card-description">{blog}</p>

          <p className="card-price">{repos_url}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
