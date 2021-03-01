import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import SearchForm from './components/Search';
import DataTable from './components/DataTable';
import API from './utils/API';
import DataContext from "./utils/DataContext";
import './App.css';

function App() {
  const [rowState, setRowState] = useState({
    image: "",
    name: "",
    phone:"",
    email: "",
    dob: ""
  });
  useEffect(() => {
    API.getUsers.then((res) => {
      setRowState(res);
    });
  }, []);
  return (
    <div className="App">
        <Wrapper>
          <DataContext.Provider value = {rowState}>
          <Header/> 
          <SearchForm/> 
          <DataTable/>
          </DataContext.Provider>
        </Wrapper>
    </div>
  );
}

export default App;
