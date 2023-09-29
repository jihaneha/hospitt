'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function HomePage() {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    // Date du 1er novembre
    const targetDate = new Date('2023-11-01T00:00:00Z').getTime();


    const updateRemainingTime = () => {
        const currentDate = new Date().getTime();

      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const formattedHours = hours.toString().padStart(2, '0');
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining(
          `${days} jours: ${formattedHours} heures: ${minutes} minutes: ${seconds} secondes`
        );
      } else {
        // Le 1er novembre est déjà passé
        setTimeRemaining('Le 1er novembre est passé.');
      }
    };

    // Mettre à jour le temps restant initialement
    updateRemainingTime();

    // Mettre à jour le temps restant toutes les secondes
    const intervalId = setInterval(updateRemainingTime, 1000);

    return () => {
      // Nettoyer l'intervalle lors du démontage du composant
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="w-full max-w-screen-xl h-auto">
    <div className="w-full h-auto">
      <div className="mt-8 ml-8 mr-8 flex flex-row justify-between md:justify-start">
        <Link href="/">
          <img
            alt="logo full"
            src="/images/logo_full.png"
            className="flex h-7 sm:h-9 md:h-11"
          />
        </Link>
      </div><div className="mt-20 text-xl">
        <p className="text-center">Lancement de la plateforme le 1er Novembre</p>
        
      </div>
      <div className="ml-10 mt-20">
        <p className="mb-4 text-xl">Temps restants </p>
        <p style={{ color: 'var(--primaryColor)' }} className="text-5xl font-bold" >{timeRemaining}</p></div>
    </div>
  </div>

  );
}

export default HomePage;
