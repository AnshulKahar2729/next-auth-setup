import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className=" flex h-full flex-col items-center justify-center">
      <Card className=" space-y-6 text-center">
        <CardHeader>
          <CardTitle className=" text-6xl font-semibold  drop-shadow-md">
            🔐 Auth
          </CardTitle>
          <CardDescription className=" text-lg">
            Simple authentication system using NextAuth (Auth.js)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginButton>Login</LoginButton>
        </CardContent>
      </Card>
    </main>
  );
}
