import React from "react";
import "./Subscription.css";
import SubscriptionDate from "./SubscriptionDate";

function Subscription(props) {
  
  return (
    <div className="subscription">
        <SubscriptionDate date={props.date}/>
      <h2 className="subscription_title">{props.title}</h2>
      <div className="subscription_price"> {props.amount} </div>
    </div>
  );
}

export default Subscription;
