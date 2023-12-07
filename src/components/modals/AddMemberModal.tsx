import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Button } from "../ui/button"
   
  export function MemberModal() {
    return (
      <Dialog>
        <DialogTrigger asChild>
        <button className="round-button" ><Plus></Plus></button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add member</DialogTitle>
            <DialogDescription>
             Add members to your room.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              
           
          </div>
          <DialogFooter>
            <Button type="submit">Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }