import { ReactNode } from "react";

type IconLayoutProps = {
  children: ReactNode;
  modal: ReactNode;
};

const IconLayout = ({children, modal}: IconLayoutProps) => {
  return(
    <div>
      {children}
      {modal}
    </div>
  )
}

export default IconLayout