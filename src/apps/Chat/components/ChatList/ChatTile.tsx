
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"


export default function CHatTile() {
  return (
    <div className="p-4 border-b hover:bg-[#333333]">
        <button className=" w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 w-full">
          <Avatar>
            <AvatarImage alt="User profile" className="w-full h-10 " src="https://github.com/shadcn.png" />
            <AvatarFallback className="hidden">UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col w-full items-start">
            <div className="flex flex-row justify-between w-full items-center "> 
            <h2 className="font-semibold text-md">Skybo</h2>
            <p className="text-gray-400 text-xs">12:45</p>
            </div>
            
            <p className="text-gray-500 text-sm">Enthanu bro</p>
          </div>
        </div>

        
      </div>
      </button>
    </div>
  )
}

