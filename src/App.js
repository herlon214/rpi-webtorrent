// Libs
import React, { Component } from 'react'

// Material
import Grid from './components/Grid'
import Typography from 'material-ui/Typography'

// Project
import Menu from './components/Menu'
import Torrents from './components/Torrents'
import theme from './theme'


class App extends Component {
  render() {
    return (
      <div>
        <Grid container
          spacing={0}
          justify='center'
          style={{padding: '15px 0px', background: '#e6e2dd'}} >
          <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
            <img src='/rpi_logo.png' style={{width: '100px'}} /> <br />
            <Typography type='display2' color='primary'>RPI<br />WebTorrent</Typography>
          </Grid>
        </Grid>
        <Menu />
        <Torrents />
      </div>
    )
  }
}

export default App
