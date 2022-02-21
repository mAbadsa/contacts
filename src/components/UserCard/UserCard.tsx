import { FC, useState } from "react";
import { Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../CheckBox";
import UserCardType from "./UserCard.type";
import "./styles.css";

const UserCard: FC<UserCardType> = ({
  id,
  phoneNumber,
  name,
  img,
  selectedContacts,
  setSelectContact,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    console.log("userCard");
    console.log(checked);

    if (!checked && !selectedContacts.find((item) => item.id === id)) {
      console.log("00");
      console.log(checked);
      setSelectContact(id, "select");
      setChecked(!checked);
    } else {
      console.log("00");
      setSelectContact(id, "unselect");
      setChecked(!checked);
    }
  };

  return (
    <Col
      className="d-flex align-items-center"
      sm="6"
      md="6"
      lg="6"
      justify-content="flex-start"
    >
      <CheckBox
        className="pe-3"
        checked={!!selectedContacts.find((item) => item.id === id)}
        onChange={handleChange}
      />
      <div className="user-details">
        {img != null && img?.url.length > 0 ? (
          <Image
            className="user-avatar"
            roundedCircle
            src="https://i.pravatar.cc/300"
            alt={"username"}
          />
        ) : (
          <FontAwesomeIcon
            className="user-avatar__placeholder"
            icon={faCircleUser}
          />
        )}
        <div className="user-data ps-2">
          <p className="username my-0">{name}</p>
          <p className="phone my-0">{phoneNumber}</p>
        </div>
      </div>
    </Col>
  );
};

export default UserCard;
