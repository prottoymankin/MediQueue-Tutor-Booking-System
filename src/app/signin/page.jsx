"use client";

import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10">
      <header className="space-y-2 text-center">
        <h2 className="font-bold text-primary text-4xl">Welcome Back!</h2>
        <p className="max-w-2xl text-muted">
          Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.
        </p>
        <p className="text-muted">
          No account yet? 
          <Link 
            className="font-medium ml-2 text-blue-500 underline" 
            href={"/signup"}
          >
            Signup
          </Link>
        </p>
      </header>

      <div className="border border-gray-400 max-w-xl mx-auto p-6 rounded-2xl shadow-sm space-y-6">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>
          
          <p className="cursor-pointer text-blue-600 text-sm underline">
            Forget password?
          </p>

          <div className="flex gap-2">
            <Button className={"bg-primary hover:bg-blue-500 duration-200 transition w-full"} type="submit">
              Sign in
            </Button>
          </div>
        </Form>

        <div className="flex items-center gap-2">
          <div className="border border-gray-300 w-full"></div>
          <span className="text-sm whitespace-nowrap">Or signin with</span>
          <div className="border border-gray-300 w-full"></div>
        </div>

        <Button 
          className={"border-primary w-full"} 
          variant="outline"
        >
          <FcGoogle />
          Google
        </Button>
      </div>
    </section>
  );
};

export default SignInPage;