// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Box, Grid, Avatar, Divider, Typography } from '@mui/material';
// import { Label } from '@mui/icons-material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    
    return (<>
    <Box component="form"
            sx={{ bgcolor: '#dbf6f0', padding:'0.5em', margin:'4em 5em',
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }} noValidate autoComplete="off">
                {data.map((contactList)=>{return(
                    <>
                    <Grid container>
                    <Grid sx={{width:'20%'}}>
                        <Avatar src={contactList.photo} style={{width: 85, height: 85, margin:'0.5em',}}> </Avatar>
                        {console.log(contactList.photo)}
                    </Grid>
                    <Grid sx={{width:'80%', textAlign:'left', marginTop:'0.7em'}} style={{alignContent:'left'}}>
                        <Typography variant='h6'>{contactList.name}</Typography>
                        <Typography>{contactList.phone}</Typography>
                        <Typography>{contactList.email}</Typography>
                    </Grid>
                </Grid>
                <Divider></Divider>
                    </>
                

                );
                
                })}
                

             

        </Box>


    </>);
};

export default Contact;
