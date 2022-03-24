import "./FormSubscription.css";
import { useState } from "react";
const FormSuscription = (props) => {
  const [form, setForm] = useState({ userTitle: "Enter User Title", userDate: "Enter User Date", userAmount: "Enter User Amount" })
  const titleChangedHandler = (events) => {
    setForm ((prevState) => {
      return { ...prevState, userTitle:events.target.value }
    })
    console.log("======Title====", form);
  }
  const dateChangedHandler = (events) => {
    setForm ((prevState) => {
      return { ...prevState,userDate:events.target.value }
    })
    console.log("===DAte=====", form);
  }
  const amountChangedHandler = (events) => {
    setForm((prevState) => {
      return { ...prevState, userAmount:events.target.value };
    })
    console.log('Amount', form)

   
  }
  const submitHandler = (events) =>{
    events.preventDefault();
    const Subscription = {title:form.userTitle, amount:form.userAmount, date: new Date(form.userDate)}
    props.onSave(Subscription)
    console.log('onsubmit Subscription ', Subscription);
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new_subscription_controls">
        <div className="new_subscription_control">
          <label>Title</label>
          <input type="text" value={form.userTitle} onChange={titleChangedHandler}></input>
        </div>
        <div className="new_subscription_control">
          <label>Date</label>
          <input type="date" value={form.userDate} onChange={dateChangedHandler}></input>
        </div>
        <div className="new_subscription_control">
          <label>amount</label>
          <input type="text" min="10" value={form.userAmount} onChange={amountChangedHandler}></input>
        </div>
      </div>
      <div className="new_subscription_actions">
        <button type="submit">Add Subscription</button>
      </div>
    </form>
  );
};
export default FormSuscription;
