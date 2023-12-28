"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          No account needed, just login with your email.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            onClick={() =>
              signIn("email", {
                email: email,
                callbackUrl: `${window.location.origin}`,
              })
            }
          >
            Get magic link
          </Button>
          <div className="flex items-center gap-2 justify-between">
            <Separator className="w-[130px]" />
            <p className="text-xs font-light">OR</p>
            <Separator className="w-[130px]" />
          </div>
          <Button
            onClick={() =>
              signIn("google", { callbackUrl: `${window.location.origin}` })
            }
            variant={"secondary"}
          >
            Login with Google
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs font-light">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
}
