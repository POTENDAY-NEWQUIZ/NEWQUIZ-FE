import { INavItem } from "@interface/props";

const NavItem = ({ icon, text }: INavItem) => {
  return (
    <div>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default NavItem;
