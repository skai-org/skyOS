import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Settings2 } from "lucide-react";


const SideBar = () => {
    return (
      <aside className="w-min  text-white p-4  flex flex-col justify-between border-r">
        <div>
      <Avatar className="mb-2">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Button variant={'secondary'} size={'icon'} className="mb-2">
<MessageCircle />
</Button>

<Button variant={'ghost'} size={'icon'}>
<Bot />
</Button>



</div>
<div className="mb-4">
<Button variant={'ghost'} size={'icon'}>
<Settings2 />
</Button>
</div>

  
    </aside>
    )
  }
  
export default SideBar;