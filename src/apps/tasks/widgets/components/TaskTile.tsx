import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react";


interface TaskTileProps {
    task: string;
  }

  const TaskTile: React.FC<TaskTileProps> = ({ task }) => {

  return (  
  <div className="mt-2 flex 
  gap-1 border p-2
  rounded-md
  items-center ">
    <Checkbox />

    <div contentEditable>{task}</div>

    <MoreHorizontal size={10}/>
  
    
  </div>
  )
}

export default TaskTile