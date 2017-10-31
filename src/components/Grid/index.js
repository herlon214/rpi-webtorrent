// Libs
import React from 'react'

// Components
import Grid from 'material-ui/Grid'

// ({ children, alignContent, alignItems, classes, container, direction, hidden, item, justify, lg, md, sm, spacing }) 
const CustomGrid = (props) => (
  <Grid 
    style={{paddingLeft: 20, paddingRight: 20}}
    {...props} />
)

export default CustomGrid