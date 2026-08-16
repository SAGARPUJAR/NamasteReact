import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        {/* <User name="SAGAR PUJAR (Function)" /> */}
        <UserClass
          name="SAGAR PUJAR (Class)"
          rating="4.4"
          description="North Karntaka Foods"
          price="300"
        />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h2>About Us</h2>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
//       </p>
//       {/* <User name="SAGAR PUJAR (Function)" /> */}
//       <UserClass
//         name="SAGAR PUJAR (Class)"
//         rating="4.4"
//         description="North Karntaka Foods"
//         price="300"
//       />
//     </>
//   );
// };
export default About;
