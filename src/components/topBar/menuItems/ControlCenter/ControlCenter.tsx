import ControlCentreIcon from "@/assets/IconPack/system/control-center"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { PopoverTrigger } from "@radix-ui/react-popover"


const ControlCenter = () => {
  return (
    <Popover>
  <PopoverTrigger>
  <button className="mr-2 my-1" >
          <ControlCentreIcon />
        </button>
  </PopoverTrigger>
  <PopoverContent className="bg-slate-900 bg-opacity-40  border-1 bg-clip-padding backdrop-filter 
  
  backdrop-blur-xl">Gotta add items here..</PopoverContent>
</Popover>

  )
}

export default ControlCenter