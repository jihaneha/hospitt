import React from 'react';
import Button from '@mui/material/Button';

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
}

function CustomButton({ text, onClick }: CustomButtonProps) {
  return (
    <Button
      type="button"
      className="custom-button"
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
