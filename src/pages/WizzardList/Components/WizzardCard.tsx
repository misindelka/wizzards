// external imports
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// internal imports
import mysteryCard from '../../../assets/mystery-card.jpg'

// import types
import { IWizzard } from '../../../types/wizzardTypes'

// types
interface IProps {
  wizzard: IWizzard
}

export const WizzardCard: React.FC<IProps> = ({ wizzard }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        minHeight: 300,
        backgroundImage: `url(${mysteryCard})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 5,
        boxShadow: 40,
        padding: 2,
        opacity: 0.9,
        '&:hover': {
          transform: 'scale3d(1.05, 1.05, 1)',
          opacity: 1,
        },
      }}
    >
      <Typography sx={{ fontSize: 30, color: 'lightgray' }} gutterBottom fontFamily={'fantasy'}>
        {wizzard?.firstName}
      </Typography>
      <Typography sx={{ color: 'lightgray' }} variant="h4" fontFamily={'fantasy'}>
        {wizzard?.lastName}
      </Typography>
      <CardActions>
        <Button
          sx={{
            margin: 2,
            fontSize: 20,
            fontFamily: 'fantasy',
            color: 'gray',
          }}
        >
          click to see my elixirs
        </Button>
      </CardActions>
    </Card>
  )
}
