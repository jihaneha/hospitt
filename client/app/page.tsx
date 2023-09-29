'use client';
import Image from 'next/image';
import CustomButton from './components/common/buttons/button';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {

  return (
    <div className="w-full h-screen flex flex-column justify-between">
      <div className="w-full pr-[8%] h-screen">
        <div className="mt-6 ml-8">
          <Image
            src="/images/logo_full.png"
            alt="logo"
            width={350}
            height={56}
            className="flex h-7 sm:h-9 md:h-12"
          />
        </div>
        <div className="flex flex-col w-full  justify-center pl-[4%] mt-10">
          <div className="w-full flex flex-col justify-start pl-[8%] pr-[8%] ">
            <img
              alt="logo solid"
              src="/images/logo_solid.png"
              className="flex w-7 h-7 sm:w-9 sm:h-9 md:w-14 md:h-14 mb-8"
            />
            <p className="
            text-sm md:text-base lg:text-lg text-secondary mb-3">
              <span
                style={{ color: 'var(--secondaryColor)' }}
                className="text-base sm:text-lg md:text-xl lg:text-3xl text-primary font-bold items-center"
              >
                Gérez, accompagnez et suivez vos patients
              </span>{' '}
              <span
                style={{ color: 'var(--primaryColor)' }}
                className="text-base sm:text-lg md:text-xl lg:text-3xl text-primary font-bold items-center"
              >
                de la consultation jusqu'à l'hospitalisation !
              </span>
            </p>
            <p
              style={{ color: 'var(--secondaryColor)' }}
              className="text-sm md:text-base lg:text-lg text-secondary font-semibold"
            >
              La solution complète pour faciliter et optimiser le parcours
              entre médecins et établissements de santé.
            </p>
            <div className="w-full flex flex-wrap justify-around mt-1">
              <div className="pt-2 pb-2">
              <Link href="/signup">
    <CustomButton
      text="Je travaille dans un établissement"
    />
  </Link>
              </div>
              <div className="pt-2 pb-2">
              <Link href="/signup">
    <CustomButton
      text="Je suis un praticien"
    />
  </Link>
              </div>
            </div>
            <div className="text-xl mt-6">
              <Link href="/login">
                <p
                  className="text-xl"
                  style={{ color: 'var(--purpaleColor)' }}
                >
                  Je veux découvrir la plateforme &gt;
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:flex justify-end">
        <Image
          src="/images/banner_welcome.png"
          alt="Description de l'image"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
