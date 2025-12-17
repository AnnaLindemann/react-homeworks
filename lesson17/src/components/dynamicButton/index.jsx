/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { css } from '@emotion/react'
import { Button } from '@mui/material'

const dinamStyles = isActiv => css`
  background-color: ${isActiv ? '#2e7d32' : '#757575'};
  color: white;
  box-shadow: ${isActiv ? '0 0 10px #2e7d32' : '0 0 10px #757575'};
`
function DynamicButton() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      <Button
        css={dinamStyles(isActive)}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? 'Activ' : 'Inactiv'} Dinamyc Emotion Button
      </Button>
    </div>
  )
}

export default DynamicButton