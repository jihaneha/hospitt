import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';


const SignupDoctorForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address : '',
    city : '',
    email: '',
    phone: '',
    job: '',
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here
    console.log('Form data submitted:', formData);
    // Reset form data if needed
    setFormData({
      firstName: '',
      lastName: '',
      address : '',
      city : '',
      email: '',
      phone: '',
      job: '',
    });
  };

  return (
    <div className="w-full flex items-center justify-center pl-[8%] pr-[8%]">
    <form onSubmit={handleSubmit}>
      <div className="mb-5 flex justify-center">
      <TextField
        label="Nom"
        name="nom"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
      <TextField
        label="Prénom"
        name="prénom"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
       <TextField
        label="Adresse"
        name="adresse"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
       <TextField
        label="Ville"
        name="ville"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
      <TextField
        label="Email"
        name="email"
        type="email"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
      <TextField
        label="Télephone"
        name="telephone"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mb-5 flex justify-center">
       <TextField
        label="Spécialité"
        name="spécialité"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="mt-10 text-center mb-10">
      <button className="custom-button" type="submit">
              Continuer
              </button>
            </div>
    </form></div>
  );
};

export default SignupDoctorForm;
