import { Stack, Chip, Avatar } from '@mui/material'
import { useState } from 'react'

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
  const handleDelete = (chipToDelete) => {
    setChips(chips => chips.filter(chip => chip !== chipToDelete))
  }
  return (
    <Stack direction='row' spacing={1}>
        {/* Normal Chip  */}
      <Chip label='Chip' color='primary' size='small' />
      {/* With Avatar  */}
      <Chip
        label='Chip Outlined'
        variant='outlined'
        color='secondary'
        avatar={<Avatar>V</Avatar>}
      />
      {/* Clickable  */}
      <Chip label='Click' color='success' onClick={() => alert('Clicked')} />
      {/* Dynamic  */}
      <Chip
        label='Delete'
        color='error'
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete')}
      />
      {chips.map(chip => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  )
}