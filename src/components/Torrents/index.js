// Libs
import React from 'react'

// Material
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import CommentIcon from 'material-ui-icons/Comment'

const Torrents = () => (
  <List>
    {[0, 1, 2, 3].map(value => (
      <ListItem
        key={value}
        dense
        button
        onClick={() => {}}
      >
        <Checkbox
          checked={false}
          tabIndex={-1}
          disableRipple
        />
        <ListItemText primary={`Star.Trek.Discovery.S01E07.540p.CBS.WEB-DL.AAC2.0.x264-AJP69[ettv]`} secondary={`Downloading from 9 of 14 peers - 733Kb/s | 1.2MB/s`} />
        <ListItemSecondaryAction>
          <IconButton aria-label="Comments">
            <CommentIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)

export default Torrents