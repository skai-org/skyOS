"use client";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
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

import * as z from "zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "first name must be at least 2 characters.",
    })
    .max(32),
  lastname: z
    .string()
    .min(2, {
      message: "Last name must be at least 2 characters.",
    })
    .max(32),
  email: z.string().email().max(32),
  password: z
    .string()
    .min(6, {
      message: "Password must be atleast 6 characters",
    })
    .max(32),
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 2 characters.",
    })
    .max(32),
});
interface SignUpDialogProps {
  open: boolean;
  handleClose : () => void;
}
const SignUpDialog: React.FC<SignUpDialogProps> = ({open,handleClose}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
    },
  });

  const onSubmit = () => {
    // const { username, password } = form.getValues();
    // dispatch(login({ userName: username, password }));
    handleClose()
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 p-4 "
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your firstname" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your lastname" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>User Name</FormLabel>
              <FormControl>
                <Input placeholder="Create a username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email id" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Create a password"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-[80%] col-span-2 mx-auto mt-5">
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default SignUpDialog;
