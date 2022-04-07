import React from "react";
import { useSelector } from "react-redux"; //to display change in state dispatched b the dispatcher

const About = () => {
  const loginDetail = useSelector((state) => state.users.value);
  console.log("in about", loginDetail);
  return (
    <div>
      {" "}
      Hi, you are logged in!
      <p>Name : {loginDetail.firstName} </p>
      <p>Last Name : {loginDetail.lastName} </p>
      <p>email : {loginDetail.email} </p>
      <p>password : {loginDetail.password} </p>
    </div>
  );
};

export default About;
