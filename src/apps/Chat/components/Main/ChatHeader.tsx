/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NcP4hrAUQDt
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Archive, MoreHorizontal, Share2 } from "lucide-react"


export default function ChatHeader() {
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt="User profile" className="w-10 h-10 rounded-full" src="/placeholder-avatar.jpg" />
            <AvatarFallback className="hidden">UN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="font-semibold text-lg">Skybo</h2>
            <p className="text-gray-500 text-sm">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="focus:outline-none">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="focus:outline-none">
            <Archive className="w-4 h-4" />
          </button>
          <button className="focus:outline-none">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
