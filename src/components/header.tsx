import { IHeader } from "@interface/props";

const Header = ({ title, leftChild, rightChild }: IHeader) => {
  return (
    <header className="h-[50px] bg-white flex justify-between items-center px-5">
      <div className="flex items-center">{leftChild}</div>
      <div>{title}</div>
      <div className="flex items-center">{rightChild}</div>
    </header>
  );
};

export default Header;
