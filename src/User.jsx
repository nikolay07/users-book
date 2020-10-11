/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import moment from "moment";

const User = (props) => {
  const { id, name, onDelete, onUpgrade, onUpgradePhone, updated, createdDate, phone } = props;
  const [state, setState] = useState(name);
  const [phoneNum, setPhoneNum] = useState(phone);
  const [show, setShow] = useState(false);

  let updatedTime = updated;
  useEffect(() => {
    moment(updated).format("D-MM-YYYY, H:mm");
  }, [updated]);

  if (updated) {
    updatedTime = moment(updated).format("D-MM-YYYY, H:mm");
  }

  const showInfo = classNames("showInfo", {
    "showInfo-visible": show,
  });
  const showInfoBlock = () => {
    setShow(!show);
  };

  const createdTime = moment(createdDate).format("D-MM-YYYY, H:mm");

  const changeUser = (event) => {
    setState(event.target.value);
  };
  const changePhoneNum = (event) => {
    setPhoneNum(event.target.value);
  };
  return (
    <li className="list-item">
      <div className="list-item__main">
        <span className="list-item__text">
          Name:
          <input type="text" value={state} onChange={changeUser} onKeyUp={() => onUpgrade(id, state)} />
        </span>
        <span className="list-item__text">
          Phone:
          <input
            type="number"
            value={phoneNum}
            onChange={changePhoneNum}
            onKeyUp={() => onUpgradePhone(id, phoneNum)}
          />
        </span>
        <button type="button" onClick={showInfoBlock} className="btn btn__info">
          Show Info
        </button>
        <button onClick={() => onDelete(id)} type="button" className="btn btn__delete">
          Delete
        </button>
      </div>
      <div className={showInfo}>
        <ul>
          <li>
            FirstName:
            {name}
          </li>
          <li>
            PhoneNumber:
            {phone}
          </li>
          <li>
            created:
            {createdTime}
          </li>
          {updated ? (
            <li>
              updated:
              {updatedTime}
            </li>
          ) : null}
        </ul>
        <button type="button" className="">
          <Link
            to={{
              pathname: "/edit",
              edit: props,
            }}
          >
            Edit fields
          </Link>
        </button>
      </div>
    </li>
  );
};

export default User;
