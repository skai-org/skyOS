"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import SignUpDialog from "../auth-components/SignUpForm";
import { SignInDialog } from "../auth-components/SignInForm";

export function SignUpModal({ children }: { children: React.ReactNode }) {
  const [signUp, setSignUp]: [boolean, any] = useState(true);
  let [open, setOpen]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[30%]">
        <DialogHeader>
          <DialogTitle>Get started now</DialogTitle>
          <DialogDescription>
            Enter your credentials to continue.
          </DialogDescription>
        </DialogHeader>
        {signUp ? (
          <SignUpDialog open={open} handleClose={handleClose} />
        ) : (
          <SignInDialog open={open} handleClose={handleClose} />
        )}
        <DialogFooter>
          <div className="flex flex-row items-center justify-center w-full mt-2">
            <p className="text-muted-foreground text-sm">
              {signUp ? "Already an user ?" : "Not a member yet ?"}
            </p>
            <Button
              variant={"ghost"}
              onClick={() => setSignUp(!signUp)}
              className="text-sm"
            >
              {signUp ? "Login" : "Sign Up"}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
