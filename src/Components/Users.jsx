import React, { useState } from "react";
import Axios from "axios";

const Users = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // async function CreateUser() {  //an basic example of how to make a post request
  //   try {
  //     setLoading(true);
  //     const r = await Axios.post("Creating user api endpoint (REST)",{data},{headers?:{"//Content-Type":"application/json""});
  //   } catch (err) {
  //     console.error(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return <div>Users</div>;
};

export default Users;
