import { IconType } from "react-icons";
import { ReactNode } from "react";

interface ButtonProps {
  text?: string | ReactNode;
  icon?: IconType;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, icon: Icon, className, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={` bg-bg-red text-white rounded outline   rounded-full ${className} cursor-pointer font-medium`}
    >
      {Icon && <Icon className="text-[0.6rem]" />}
      {text}
    </div>
  );
};
export default Button;
