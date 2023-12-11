import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react";
import '../style.css'


interface TaskTileProps {
    task: string;
  }

  const TaskTile: React.FC<TaskTileProps> = ({ task }) => {

  return (  
  <div className="mt-2 flex 
  gap-1  p-2
  rounded-md
 
  justify-between
  bg-gray-800 bg-opacity-40  bg-clip-padding backdrop-filter backdrop-blur-xl border-0
  items-center ">
    <Checkbox />

    <div contentEditable className="w-full  task-tile">{task}</div>

    <MoreHorizontal size={16}/>
  
    
  </div>
  )
}

export default TaskTile