import { IHeader } from "@interface/props";

const Header = ({ title, leftChild, rightChild }: IHeader) => {
  return (
    <header className="max-w-[480px] w-full h-[50px] fixed top-0 bg-white flex justify-between items-center px-5">
      <div className="flex items-center">{leftChild}</div>
      <div>{title}</div>
      <div className="flex items-center">{rightChild}</div>
    </header>
  );
};

export default Header;
