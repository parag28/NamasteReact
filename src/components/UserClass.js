import React from "react";
import { json } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "default",
        avatar_url: "https://profile-pic.com",
      },
    };
  }

  async componentDidMount() {
    //API calls
    const data = await fetch("https://api.github.com/users/parag28");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        {/* <h1>Count1: {this.state.count1}</h1> */}
        <h2>Name: {name}</h2>
        <h3>bio: {bio}</h3>
        <h4>Contact: @gichmid</h4>
      </div>
    );
  }
}

export default UserClass;
