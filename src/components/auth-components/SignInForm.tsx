"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { login } from "@/redux/features/authSlice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { DialogClose } from "../ui/dialog";

const formSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 2 characters.",
    })
    .max(32),
  password: z
    .string()
    .min(6, {
      message: "Password must be atleast 6 characters",
    })
    .max(32),
});

interface SignInDialogProps {
  open: boolean;
  handleClose : () => void;
}

export const SignInDialog: React.FC<SignInDialogProps> = ({
  open,
  handleClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const onClickLogIn = () => {
    const { username, password } = form.getValues();
    // await new Promise(resolve => setTimeout(resolve, 5000));
    //ivide we use await for testing
    dispatch(login({ userName: username, password }));
    handleClose()
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onClickLogIn)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

          <Button type="submit" className="block mx-auto w-[80%]">
            Login
          </Button>

      </form>
    </Form>
  );
};
