import { Button } from "@/components/ui/button"
import { MessageSquarePlus } from "lucide-react"
import SearchBar from "./SearchBar"
import ChatTile from "./ChatTile"
import { ScrollArea } from "@/components/ui/scroll-area"

const ChatList = () => {
  return (
    <div className="w-[300px] pt-4 border-r bg-[#111111]">
        <div className="flex flex-row   px-4 w-full 
        justify-between items-center ">
        <h1 className="text-2xl font-bold">SkyHub</h1>
        <Button variant={'ghost'} size={'icon'}>
        <MessageSquarePlus color="gray"/>
        </Button>
        </div>
        <div className="p-4">
        <SearchBar />
        </div>
        <div>
          <ScrollArea>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          <ChatTile></ChatTile>
          </ScrollArea>
        </div>
    </div>
  )
}

export default ChatList