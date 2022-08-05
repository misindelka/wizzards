// external imports
import { Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import { Typography, Box } from '@mui/material'

// internal imports
import mystery from '../../assets/mystery.jpg'

export const Home: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${mystery})`,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component={Link}
          to="/wizzards"
          sx={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#E8E8E9',
            color: 'black',
            opacity: 0.7,
            transition: 'background 1s, color 1s',
            '&:hover': {
              backgroundColor: '#1d1e23',
              color: 'lightgrey',
              boxShadow: 'none',
              opacity: 0.9,
            },
          }}
        >
          <Typography
            sx={{ opacity: 1 }}
            variant="h1"
            component="h2"
            fontWeight={'bold'}
            fontFamily={'fantasy'}
          >
            Michal's Wizzard Library
          </Typography>
          <Typography variant="h4" component="h2" fontWeight={'bold'} fontFamily={'fantasy'}>
            Click to discover all my misterious Wizzards
          </Typography>
        </Box>
      </Box>
    </>
  )
}
