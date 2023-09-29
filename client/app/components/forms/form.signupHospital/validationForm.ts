import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Le nom est requis'),
  lastName: Yup.string().required('Le prénom est requis'),
  address: Yup.string().required("L'adresse est requise"),
  city: Yup.string().required('La ville est requise'),
  email: Yup.string().email('Adresse e-mail invalide').required("L'e-mail est requis"),
  phone: Yup.string()
    .required('Le numéro de téléphone est requis'),
  hospitalname: Yup.string().required("Le nom de l'établissement est requis"),
  groupname: Yup.string().required('Le nom du groupe est requis'),
});

export default validationSchema;
