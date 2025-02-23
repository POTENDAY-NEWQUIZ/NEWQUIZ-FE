import { IHeader } from "@interface/props";

const Header = ({ title, leftChild, rightChild }: IHeader) => {
  return (
    <header>
      <div>{leftChild}</div>
      <div>{title}</div>
      <div>{rightChild}</div>
    </header>
  );
};

export default Header;
