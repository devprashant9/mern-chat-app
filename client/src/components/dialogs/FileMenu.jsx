import { Menu } from '@mui/material'
import React from 'react'

function FileMenu({anchorE1}) {
  return (
    <Menu open={false} anchorEl={anchorE1}>FileMenu</Menu>
  )
}

export default FileMenu