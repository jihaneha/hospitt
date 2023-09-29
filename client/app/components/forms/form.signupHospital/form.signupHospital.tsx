import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import CustomButton from '../../common/buttons/button';
import * as Yup from 'yup'; // Importez Yup
import validationHospital from './validationForm'; // Importez votre schéma de validation
import Link from 'next/link';

const SignupHospitalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    email: '',
    phone: '',
    hospitalname: '',
    groupname: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validez les données de formulaire en utilisant le schéma de validation
      await validationHospital.validate(formData, { abortEarly: false });

      // Si la validation réussit, vous pouvez soumettre les données
      console.log('Form data submitted:', formData);

      // Réinitialisez le formulaire ici si nécessaire
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
        phone: '',
        hospitalname: '',
        groupname: '',
      });
    } catch (errors) {
      // Si la validation échoue, les erreurs seront stockées dans "errors"
      console.error('Validation errors:', errors);
    }
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
      />
      </div>
      <div className="mb-5 flex justify-center">
      <TextField
        label="Prénom"
        name="prénom"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      />
      </div>
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
        type= "tel"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
        <div className="mb-5 flex justify-center">
        <TextField
        label="Nom du groupe"
        name="nom du groupe"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
        <div className="mb-5 flex justify-center">
       <TextField
        label="Nom de l'établissement"
        name="nom de l'etablissement"
        variant="standard"
        className={'w-full min-w-auto md:min-w-[400px]'}
      /></div>
      <div className="w-full flex justify-center pt-2 pb-2">
<Link href="/home">
            <button className="custom-button" type="submit">
              Continuer
              </button></Link>
            </div>
    </form></div>
  );
};

export default SignupHospitalForm;