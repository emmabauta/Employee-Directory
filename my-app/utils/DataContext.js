import React from "react";

const DataContext = React.createContext({
  image: "",
  name: "",
  phone: "",
  email: "",
  dob: ""
});

export default DataContext;