import Draggable from "react-draggable"


const TodoWidget = () => {
  return (
    <Draggable bounds="parent">
    <div className="
    absolute 
    top-20
    right-1
  
   p-6
    rounded-2xl  h-[35] min-w-[35]
    bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl
   flex flex-col items-center justify-center
   ">
    <div className="flex h-10px w-full border-b-2"> title</div>
   </div>
   </Draggable>
  )
}

export default TodoWidget