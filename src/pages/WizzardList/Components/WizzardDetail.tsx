// external imports
import { useContext } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// internal imports
import mysteryBook from '../../../assets/mystery-book.jpg'

// import types
import { IWizzard, IElixir } from '../../../types/wizzardTypes'

interface IProps {
  selectedWizzard: IWizzard
}

// optional way to style elemets:

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// }

export const WizzardDetail: React.FC<any> = ({ selectedWizzard }) => {
  const { firstName, lastName, elixirs } = selectedWizzard
  return (
    <>
      <Box
        sx={{
          position: 'absolute' as 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: 500,
          minHeight: 300,
          backgroundImage: `url(${mysteryBook})`,
          backgroundSize: 'cover',
          border: '2px solid #000',
          borderRadius: 5,
          boxShadow: 24,
          p: 4,
          opacity: 0.9,
        }}
      >
        <Typography
          sx={{ color: 'lightgray', fontSize: 30, fontWeight: 'bold' }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {firstName} {lastName}'s elixirs :
        </Typography>
        {elixirs?.map((elixir: IElixir) => (
          <Typography sx={{ color: 'lightgray', mt: 2, fontSize: 20 }} id={elixir?.id}>
            {elixir?.name}
          </Typography>
        ))}
      </Box>
    </>
  )
}
