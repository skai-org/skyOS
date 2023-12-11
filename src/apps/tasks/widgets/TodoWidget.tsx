import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {  Plus } from "lucide-react"
import { useState ,ChangeEvent, KeyboardEvent} from "react";
import Draggable from "react-draggable"
import TaskTile from "./components/TaskTile";



const TodoWidget: React.FC = () => {
  const [showTodoBox, setShowTodoBox] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleAddTask = () => {
    setShowTodoBox(true);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask('');
    }
  };
 
  return (
    <Draggable bounds="parent">
    <div className="
    absolute 
    top-20
    right-1
    
   p-2
    rounded-2xl  h-auto min-h-[100px] w-[250px]
    bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl
   flex flex-col 
   ">

    <Button className="w-full bg-gray-800 bg-opacity-40 
    text-white hover:bg-zinc-800 border border-dashed 
    bg-clip-padding backdrop-filter backdrop-blur-xl border-gray-800" onClick={handleAddTask}>
      Add Task <Plus className="ml-2"/>
    </Button>
    
    {!showTodoBox && tasks.length==0 && (
      <div className="w-full  flex justify-center items-center text-center mt-3">
      All caught up 🔥
    </div>
    )}
    {tasks.map((task, index) => (
                <TaskTile key={index} task={task} />
              ))}
    {showTodoBox && (
          <div className="mt-2 flex 
          gap-1  p-2
          rounded-md
          bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl border-0
          items-center ">
            <Checkbox />

            <Input
            type="text"
            placeholder="Type your task here..."
            className=" rounded px-2 py-1 bg-transparent border-0 "
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          
            
          </div>
        )}
        
 </div>
   </Draggable>
  )
}

export default TodoWidget