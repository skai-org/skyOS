import React from "react";
import { ActionTooltip } from "@/components/action-tooltip";
import { Button } from "@/components/ui/button";
import { WidgetTile } from "@/types/widget.interface";

const WidgetTrigger: React.FC<WidgetTile> = ({ icon, name }) => {
  return (
    <ActionTooltip label={name} side="left">
      <Button
        className="bg-gray-800 bg-opacity-40 
        hover:bg-zinc-800 bg-clip-padding backdrop-filter backdrop-blur-xl 
        mb-3 mr-0
        ml-1
        border-0"
        size={"icon"}
      >
        <div className="text-white">{icon}</div>
      </Button>
    </ActionTooltip>
  );
};

export default WidgetTrigger;
