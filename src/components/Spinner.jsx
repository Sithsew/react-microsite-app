import { ThreeDots } from "react-loader-spinner";
import "./Spinner.css";

function Spinner({color}) {
  return (
    <div className="spinnerStyle">
      <ThreeDots
        height="80"
        width="80"
        radius="15"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
