'use client'
import { Alert, Snackbar } from '@mui/material'
import React from 'react'

interface AlertProps {
  handleClose?: () => void,
  duration: number
  severity: "success" | "error" | "warning" | "info"
  content: string
  open: boolean

}

const ControlledAlert = ({ handleClose, duration, severity, content, open }: AlertProps) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={handleClose} >
      <Alert
        severity={severity}
        variant="filled"
      >
        {content}
      </Alert>
    </Snackbar>

  )
}

export default ControlledAlert
