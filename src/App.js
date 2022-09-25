import './App.css';
import React, {useState} from "react";
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { Grid, Divider } from '@mui/material';


const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contactList, setContactList]= useState(contactsJSON);

  const formSubmitHandler = (contact) => {
    console.log("new contact is", contact);
    setContactList([...contactList, contact]);
  };


  return (
    <div className="App">
      <Header></Header>
      <Grid container>
        <Grid item style={{width:'45%'}}>
          <ContactForm propsSubmitHandler={(data)=>formSubmitHandler(data)}></ContactForm>
        </Grid>
        <Grid item style={{width:'55%', padding:'4em 2em 2em 4em', marginLeft:''}}>
          {contactList.map((kontak)=>{return(<>
            <Contact data={kontak}></Contact>
            <Divider></Divider>
          </>
            );
          })}
        </Grid>
      </Grid>
      
    </div>
  );
};

export default App;
