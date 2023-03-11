import { Grid, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  const [state, setState]= useState("");
  const data = [
    {
      id:1,
      name: "krisna",
      major: "informatic"
    },
    {
      id:2,
      name: "andi",
      major: "ipa"
    },
    {
      id:3,
      name: "kusen",
      major: "matematika"
    },
  ];

  const result = data.filter((x)=> x.name.toLowerCase().includes(state.toLowerCase()));
  
  return (
    <box>
      <Grid container>
        {state}
        <Grid xs={12} sx={{margin:10}}>
          <TextField 
          label ="Search"
          onChange={(e)=>{
            setState(e.target.value)
          }}/>
        </Grid>
        <Grid xs={12} sx={{margin:10}}>
          <table>
            <tr>
              <th>Name</th>
              <th>Major</th>
            </tr>
            {state 
              ? result.map((x)=>{
                return(
                  <tr>
                    <td>{x.name}</td>
                    <td>{x.major}</td>
                  </tr>
                );
            }): data.map((x)=>{
              return(
              <tr>
                  <td>{x.name}</td>
                  <td>{x.major}</td>
              </tr>)
            })}
          </table>
        </Grid>
      </Grid>
    </box>
  );
}

export default App;
