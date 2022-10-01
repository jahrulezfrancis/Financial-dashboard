import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './Components/Pages/HomePage';

function App() {
  return (
   <Box>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='home' element={<Homepage />} />
    </Routes>
   </Box>
  );
}

export default App;
