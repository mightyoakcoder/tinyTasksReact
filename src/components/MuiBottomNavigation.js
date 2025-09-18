import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useState } from 'react'

const MuiBottomNavigation = () => {
  const [value, setValue] = useState(0)
  return  (
    <BottomNavigation className='bottom-nav'
      sx={{ width: '100%', position: 'absolute', bottom: 0}} 
      value={value} 
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
    >
      <BottomNavigationAction icon={<HomeIcon />} />
      <BottomNavigationAction icon={<FavoriteIcon />} />
      <BottomNavigationAction icon={<AddIcon />} />
      <BottomNavigationAction icon={<PaymentsIcon />} />
      <BottomNavigationAction icon={<PersonIcon />} />
    </BottomNavigation>
  )
}

export default MuiBottomNavigation
