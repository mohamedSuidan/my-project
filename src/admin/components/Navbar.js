import { HiMenu } from "react-icons/hi";

function Navbar(props) {
  let btn = () => {
    if (props.bool === true) {
      props.active(false);
    } else {
      props.active(true);
    }
  };
  return (
    <nav>
      <HiMenu onClick={btn} />
    </nav>
  );
}

export default Navbar;
