// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, Card, List, ListItem, TextField } from "@mui/material";
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
    const addContactHandler = (event) =>{
        event.preventDefault();    
        props.propsSubmitHandler({
            name:inputName,
            phone:inputPhone,
            email: inputEmail,
            photo: inputUrl
        });
        setInputName("");
        setInputPhone("");
        setInputEmail("");
        setInputUrl("");
    }
   
    return (
        <>
        <Card component="form"
            sx={{ bgcolor: '#f3f1eb', padding:'0.5em', margin:'4em 2em',
                '& .MuiTextField-root': { m: 1, width: '95%' },
            }}>
                {/* <form 
                // onSubmit={formOnSubmitHandler}
                > */}
                    <List>
                        <ListItem>
                            <TextField type="text" label="Name" variant="filled" value={inputName} onChange={onChangeName}/>
                        </ListItem>
                        <ListItem>
                            <TextField type="text" label="Phone" variant="filled" value={inputPhone} onChange={onChangePhone}/>
                        </ListItem>
                        <ListItem>
                            <TextField type="text" label="Email" variant="filled" value={inputEmail} onChange={onChangeEmail}/>
                        </ListItem>
                        <ListItem>
                            <TextField type="text" label="Photo URL" variant="filled" value={inputUrl} onChange={onChangeUrl}/>                           
                        </ListItem>
                        <ListItem>
                            <Button sx={{color:"green", marginTop:"1em"}} type="submit" onClick={addContactHandler} > ADD NEW</Button>
                        </ListItem>
                    </List>
                {/* </form> */}
                
        </Card>  
         </>
    );
}

export default ContactForm;