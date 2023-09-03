import { ThreeDots } from "react-loader-spinner";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinnerStyle">
      <ThreeDots
        height="80"
        width="80"
        radius="15"
        color="white"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
