'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HeaderConnexion } from '../components/common/headers/signupheader';
import SignupDoctorForm from '../components/forms/form.signupDoctor/form.signupDoctor';
import SignupHospitalForm from '../components/forms/form.signupHospital/form.signupHospital';
import dynamic from 'next/dynamic';


function SignUpPage() {
  const SignupHospitalForm = dynamic(
    () => import('../components/forms/form.signupHospital/form.signupHospital'),
    { ssr: false }
  );
  const SignupDoctorForm = dynamic(
    () => import('../components/forms/form.signupDoctor/form.signupDoctor'),
    { ssr: false }
  );

  return (
    <div className="w-full  max-w-screen-xl h-auto">
      <div className="w-full h-auto">
        <div className="mt-8 ml-8 mr-8 flex flex-row justify-between md:justify-start">
          <Link href="/">
            <img
              alt="logo full"
              src="/images/logo_full.png"
              className="flex h-7 sm:h-9 md:h-11 cursor-pointer"
            />
          </Link>
          <div className="md:pl-20">
            {/* <ButtonReturn /> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-[5%]">
        <HeaderConnexion
          title="Rejoignez-nous !"
          subtitle1="La solution complète pour faciliter et optimiser le parcours entre médecins et établissements de santé."
          subtitle2="contact@hospitaccess.fr"
          button="Continuer"
          handleRoleSelection={() => {}}
        />
   {/* {type === 'establishment' &&  */}
   
  <SignupHospitalForm /> 
   
  {/* //  }
  //       {type === 'practitioner' &&  */}
        
       {/* <SignupDoctorForm /> */}
        
         {/* }  */}
       
      
      </div>
    </div>
  );
}

export default SignUpPage;
