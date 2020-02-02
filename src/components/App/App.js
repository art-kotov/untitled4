import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import UserList from "../UserList";
import data from "../../data"
import Typography from "@material-ui/core/Typography";
console.log(data)

function App() {
  return (
      <Container>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Typography variant="h3" gutterBottom>
                    Users
                </Typography>
                <UserList/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h3" gutterBottom>
                    Posts
                </Typography>
            </Grid>
        </Grid>
      </Container>
  );
}

export default App;
