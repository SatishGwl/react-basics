import React from "react";
import "./Subscription.css";
import SubscriptionDate from "./SubscriptionDate";

const Subscription = (props) => {
  let title = props.title
  const changeTitle = (e) => {
    title = 'change Title wrap'
    console.log('onclick button')
  }
  return (
    <div className="subscription">
        <SubscriptionDate date={props.date}/>
      <h2 className="subscription_title">{title}</h2>
      <div className="subscription_price"> {props.amount} </div>
      <button type="button" id="changeBtnTitle" onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default Subscription;
