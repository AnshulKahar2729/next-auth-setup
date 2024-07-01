import LoginForm from "@/components/auth/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const LoginPage = () => {
  return (
    <Card className=" w-[400px] drop-shadow-sm">
      <CardHeader>
        <CardTitle className=" text-center text-3xl font-semibold">Login</CardTitle>
        <CardDescription className=" text-center">Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export default LoginPage;
