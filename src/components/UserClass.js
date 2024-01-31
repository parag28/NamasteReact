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
      <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
        <img className="w-60 rounded-3xl" src={avatar_url} alt="" />
        {/* <h1>Count1: {this.state.count1}</h1> */}
        <h2>Name: {name}</h2>
        <h3>bio: {bio}</h3>
        <h4 className="pb-4">Contact: @gichmid</h4>
        <a
          className="p-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          href="https://www.linkedin.com/in/parag2812/"
        >
          {" "}
          Visit Profile{" "}
        </a>
      </div>
    );
  }
}

export default UserClass;
