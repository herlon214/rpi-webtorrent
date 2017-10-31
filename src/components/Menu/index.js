// Libs
import React from 'react'

// Material
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import Icon from 'material-ui/Icon'

const Menu = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Button raised color='accent' margin='normal' style={{margin: '0px 10px'}}>
          <Icon>file_upload</Icon> Upload
        </Button>
        <Button raised color='accent' margin='normal' style={{margin: '0px 10px'}}>
          <Icon>play_arrow</Icon> Start all
        </Button>
        <Button raised color='accent' margin='normal' style={{margin: '0px 10px'}}>
          <Icon>pause</Icon> Pause all
        </Button>
      </Toolbar>
    </AppBar>
  </div>
)

export default Menu