// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import '../App.css';


const ContactForm = (props) => {    
     // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [inputName, setInputName]=useState("");
    const [inputPhone, setInputPhone]=useState("");
    const [inputEmail, setInputEmail]=useState("");
    const [inputUrl, setInputUrl]=useState("");

    // const newId = contact[contact.length - 1].id + 1;

    const onChangeName = (event) =>{
        setInputName(event.target.value);
    }
    const onChangePhone = (event) =>{
        setInputPhone(event.target.value);
    }
    const onChangeEmail = (event) =>{
        setInputEmail(event.target.value);  
    }
    const onChangeUrl = (event) =>{
        setInputUrl(event.target.value);
    }
    const formOnSubmitHandler = (event) =>{
        event.preventDefault();    
        props.propsSubmitHandler({
            "name":inputName,
            "phone":inputPhone,
            "email":inputEmail,
            "url":inputUrl
        });
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputUrl("");
    }
   

    return (
        <>
        <Box component="form"
            sx={{ bgcolor: '#f3f1eb', padding:'0.5em', margin:'4em 2em',
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }} noValidate autoComplete="off" >
                <form onSubmit={formOnSubmitHandler}>
                    <TextField id="name" label="Name" variant="filled" onChange={onChangeName}/>
                    <TextField id="phone" label="Phone" variant="filled" onChange={onChangePhone}/>
                    <TextField id="email" label="Email" variant="filled" onChange={onChangeEmail}/>
                    <TextField id="url" label="Photo URL" variant="filled" onChange={onChangeUrl}/>
                    <Button sx={{color:"green", marginTop:"1em"}} type="submit" > ADD NEW</Button>
                </form>
                
        </Box>  
         </>
    );
}

export default ContactForm;