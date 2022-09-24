// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import '../App.css';


const ContactForm = (propsContact) => {

    const [inputName, setInputName]=useState("");
    const [inputPhone, setInputPhone]=useState("");
    const [inputEmail, setInputEmail]=useState("");
    const [inputUrl, setInputUrl]=useState("");

    // const newId = contact[contact.length - 1].id + 1;

    const InputOnChangeName = (event) =>{
        setInputName(event.target.value);
    }

    const InputOnChangePhone = (event) =>{
        setInputPhone(event.target.value);
    }

    const InputOnChangeEmail = (event) =>{
        setInputEmail(event.target.value);  
    }

    const InputOnChangeUrl = (event) =>{
        setInputUrl(event.target.value);
    }

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        
        propsContact.propsSubmitHandler({
            // "id": newId,
            "name":inputName,
            "phone":inputPhone,
            "email":inputEmail,
            "url":inputUrl});

        // const tambah=[...contact, ];
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputUrl("");
        // setContact(tambah);
    }
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    return (
        <>
        <Box component="form"
            sx={{ bgcolor: '#f3f1eb', padding:'0.5em', margin:'4em 2em',
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }} noValidate autoComplete="off" >
                <form onSubmit={formSubmitHandler}>
                <Grid>
                    <TextField id="name" label="Name" variant="filled" value={inputName} onChange={InputOnChangeName}/>
                    <TextField id="phone" label="Phone" variant="filled" value={inputPhone} onChange={InputOnChangePhone}/>
                    <TextField id="email" label="Email" variant="filled" value={inputEmail} onChange={InputOnChangeEmail}/>
                    <TextField id="url" label="Photo URL" variant="filled" value={inputUrl} onChange={InputOnChangeUrl}/>
                </Grid>
                <Grid justifyContent="left">
                    <Button sx={{color:"green", marginTop:"1em"}} type="Submit" onClick={{formSubmitHandler}}> ADD NEW</Button>
                </Grid>
                </form>
                
        </Box>
         </>
    );
}

export default ContactForm;