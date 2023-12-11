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
    rounded-2xl  h-[35] min-w-[35]
    bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl
   flex flex-col 
   ">
    <div className="flex h-10px w-full border-b-2"> title</div>
    <Button className="w-full" onClick={handleAddTask}>
      Add Task <Plus className="ml-2"/>
    </Button>
    {tasks.map((task, index) => (
                <TaskTile key={index} task={task} />
              ))}
    {showTodoBox && (
          <div className="mt-2 flex 
          gap-1 border p-2
          rounded-md
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