import * as Yup from 'yup';

const signupDoctorValidation = Yup.object().shape({
  nom: Yup.string().required('Le nom est requis'),
  prénom: Yup.string().required('Le prénom est requis'),
  address: Yup.string().required("L'adresse est requise"),
  ville: Yup.string().required('La ville est requise'),
  email: Yup.string().email('Adresse e-mail invalide').required("L'e-mail est requis"),
  phone: Yup.string().matches(/^\d{10}$/, 'Numéro de téléphone invalide').required('Le numéro de téléphone est requis'),
  spécialité: Yup.string().required('La spécialité est requise'),
});

export default signupDoctorValidation;
