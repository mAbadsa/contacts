import { CSSProperties, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";
import CheckBoxType from "./CheckBox.type";
import "./styles.css";

const CheckBox: FC<CheckBoxType> = ({
  checked,
  className,
  onChange,
  ...props
}) => {
  const style = {
    background: `${checked ? "#c7c7c0" : "#efefef"}`,
    Visibility: `${checked ? "visible" : "hidden"}`,
  } as CSSProperties;

  return (
    <Form className={`d-flex align-items-center ${className}`}>
      <Form.Check
        className="CheckBox"
        type="checkbox"
        id="Select All"
        label="Select All"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <div className="styled-checkbox" style={style} onClick={onChange}>
        {checked ? <FontAwesomeIcon icon={faCheck} /> : null}
      </div>
    </Form>
  );
};

export default CheckBox;
