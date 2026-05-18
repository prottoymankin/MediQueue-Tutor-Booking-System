"use client";

import Link from "next/link";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10">
      <header className="space-y-2 text-center">
        <h2 className="text-4xl">Create Your Account</h2>
        <p className="max-w-2xl text-muted">
          Create an account to connect with expert tutors and schedule your learning sessions easily.
        </p>
        <p className="text-muted">
          Already have an account? 
          <Link 
            className="font-medium ml-2 text-blue-500 underline" 
            href={"/signin"}
          >
            Signin
          </Link>
        </p>
      </header>

      <div className="border border-gray-400 max-w-xl mx-auto p-6 rounded-2xl shadow-sm space-y-6">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>

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
            name="image"
          >
            <Label>Photo URL</Label>
            <Input placeholder="https://via.placeholder.com/300x300" />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={6}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 6 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button className={"bg-primary hover:bg-blue-500 duration-200 transition w-full"} type="submit">
              Sign up
            </Button>
          </div>
        </Form>

        <div className="flex items-center gap-2">
          <div className="border border-gray-300 w-full"></div>
          <span className="text-sm whitespace-nowrap">Or signup with</span>
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

export default SignUpPage;