import ChatList from "./components/ChatList/ChatList"
import SideBar from "./components/SideBar"


const Chat = () => {
  return (
   <div className='flex h-screen' >
  <SideBar/>
  <ChatList />
 
  <main className="w-3/4 p-4">
    

  </main>
</div>

  )
}

export default Chat