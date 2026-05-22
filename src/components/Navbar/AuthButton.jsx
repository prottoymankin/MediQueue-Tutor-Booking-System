import { Button } from "@heroui/react";
import Link from "next/link";

const AuthButton = ({ path, text, isFullWidth, isSecondary }) => {
  return (
    <Link href={path}>
      <Button 
        className={`
          rounded-md 
          ${isSecondary ? "bg-transparent border border-blue-600  dark:border-blue-500 text-blue-600 dark:text-blue-500" : "bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"}
          ${isFullWidth ? "w-full" : ""}
        `}
      >
        {text}
      </Button>
    </Link>
  );
};

export default AuthButton;