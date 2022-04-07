import React from "react";
import { useState, useEffect } from "react";

import { useSelector } from "react-redux"; //to display change in state dispatched b the dispatcher
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const loginDetail = useSelector((state) => state.users.value);
  console.log("loginDetail", loginDetail);

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [person, setPerson] = useState();

  // useEffect(() => {
  //   axios.get(` http://3.140.210.76:8000/api/token/`).then((res) => {
  //     const persons = res.data;
  //     console.log(persons);
  //     setPerson({ persons });
  //   });
  // }, []);

  const checkUser = () => {
    if (loginDetail.email === email && loginDetail.password === pass) {
      console.log("credentials are correct");
      router.push("/About");
    } else {
      window.alert("credentials are incorrect");
      console.log("credentials are incorrect");
    }
  };
  return (
    <div>
      <form action="" className={styles.container}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="enter your password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
          required
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            checkUser();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
