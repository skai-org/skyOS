
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SignUpModal } from "./SignUpModal";
import { DialogClose } from "@radix-ui/react-dialog";
  export function UnAuthorizedModal(
    {
        Icon,
        className,
      }: {
        Icon: React.ReactNode;
        className: string;
      }
  ) {
    return (
        <Dialog>
        <DialogTrigger asChild >
        <Button variant={'ghost'} size={'icon'} className={className}>{Icon}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[30%]">
        <DialogHeader>
        <DialogTitle>Join for free</DialogTitle>
        <DialogDescription>
        Create an account to unlock rooms, timer, video chat, to-do list, and more!
        </DialogDescription>
      </DialogHeader>
       
        <DialogFooter>
          <SignUpModal>
            <DialogClose asChild>
          <Button>Join now</Button>
          </DialogClose>
          </SignUpModal>
          
       
  
      </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }