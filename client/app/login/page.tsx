// pages/login.js

import React from 'react';
import Link
 from 'next/link';
function LoginPage() {
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
          <div className="md:pl-20">
            {/* <ButtonReturn /> */}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row mt-[10%]">
        {/* {!formForgotPassword && (
          <HeaderConnexion
            title={t('login:line1')}
            subtitle1={t('login:line2')}
            subtitle2={t('login:line3')}
            button={t('login:button1')}
          />
        )}
        <LoginForm /> */}
      </div>
    </div>
  );
}

export default LoginPage;
