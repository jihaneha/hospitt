

import CustomButton from '../buttons/button';
import { EmailOutlined } from '@mui/icons-material';

interface HeaderConnexionProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  button: string;
  handleRoleSelection?: (role: string) => void;
}

export const HeaderConnexion = ({
  title,
  subtitle1,
  subtitle2,
  button,
}: HeaderConnexionProps) => {




  return (
    <div className="w-full flex flex-col justify-start pl-[8%] pr-[8%]">
      <img
        alt="logo solid"
        src="/images/logo_solid.png"
        className="flex w-7 h-7 sm:w-9 sm:h-9 md:w-14 md:h-14 mb-8"
      />
      <h1 style={{ color: 'var(--primaryColor)' }} className="text-base sm:text-lg md:text-3xl lg:text-4xl text-primary font-bold items-center mb-8">
        {title}
      </h1>
      <p style={{ color: 'var(--secondaryColor)' }} className="text-sm md:text-base lg:text-lg text-secondary font-semibold mb-3">
        {subtitle1}
      </p>
      <p style={{ color: 'var(--inProgressColor)' }} className="text-sm md:text-base lg:text-lg text-fontLight mb-5">
        <span>
          <EmailOutlined className={'pl-0'} />
        </span>
        <span>{subtitle2}</span>
      </p>

      
        {/* <div className="flex justify-center mb-10 pt-2 pb-2">
          <CustomButton text="Continuer"
            />
        </div> */}
   
    </div>
  );
};
