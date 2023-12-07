import { useAppSelector } from "@/redux/store";
import { UnAuthorizedModal } from "../modals/UnAuthorizedModal";
import { HelpCircle, HelpCircleIcon } from "lucide-react";

export const UnAuthorizedWrapper = ({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className: string;
}) => {
  
    
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  return isAuth ? (
    <>{children}</>
  ) : (
    <UnAuthorizedModal Icon={icon} className={className} />
  );
};
