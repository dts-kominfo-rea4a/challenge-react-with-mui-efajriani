// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Box, Grid, Avatar, Typography } from '@mui/material';
// import { Label } from '@mui/icons-material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    
    return (<>
    <Box component="form"
            sx={{ bgcolor: '#dbf6f0', padding:'0.5em', 
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }} noValidate autoComplete="off">
                <Grid container>
                    <Grid item >
                        <Avatar style={{width: 85, height: 85, margin:'0.5em'}}> 
                        <img src={data.photo} alt={data.photo} >
                        </img></Avatar>
                    </Grid>
                    <Grid item style={{textAlign:'left', marginTop:'0.7em'}}>
                        <Typography variant='h6'>{data.name}</Typography>
                        <Typography>{data.phone}</Typography>
                        <Typography>{data.email}</Typography>
                    </Grid>
                </Grid>            
        </Box>


    </>);
};

export default Contact;
