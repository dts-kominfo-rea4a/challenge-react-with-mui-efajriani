// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';


// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <Typography variant="h3" style={{margin:"0.3em 0em"}}>Call a Friend</Typography>
    {/* <Typography variant="h5">Your friendly contact app</Typography> */}
    <Divider sx={{marginBottom:'0em'}}>
      Your friendly contact app
    </Divider>

    </>
  );
};

export default Header;
