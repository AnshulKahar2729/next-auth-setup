"use client";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { Button } from "../ui/button";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}
const LoginButton: FC<LoginButtonProps> = ({ children, mode, asChild }) => {
  const router = useRouter();
  const onClick = () => {
    console.log("LoginButton clicked");
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>Implement modal</span>;
  }
  return (
    <Button onClick={onClick} className=" cursor-pointer">
      {children}
    </Button>
  );
};

export default LoginButton;
