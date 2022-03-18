import './FormSubscription.css'
import { useState } from 'react';
const FormSuscription = () => {
    // const [userTitle, setUserTitle] = useState("");
    // const [userDate, setUserDate] = useState("");
    // const [amoutn, SetAmount] = useState(""); 

    const [form, setForm] = useState({userTitle:'', userDate:'', amoutn: ''})
    const titleOnChangeHandler = (events) =>{
        // setForm({...form,userTitle:events.target.value})
        setForm = (prevState) => {
            return {prevState, userTitle:events.target.value}
        }
        // setUserTitle(events.target.value)
        console.log('Form', form);
    }
    const dateChangedHandler = (events) =>{
        // setForm({...form,userDate:events.target.value})
        setForm = (prevState) => {
            return {prevState, userDate:events.target.value}
        }
        console.log('Form', form);
        // setUserDate(events.target.value)
        // setForm(events.target.value)
        // console.log('==userDate--', userDate)
    }
    const amountChangedHandler = (events) => {
        // setForm({...form,amoutn:events.target.value})
        setForm = (prevState) => {
            return {prevState, amoutn:events.target.value}
        }

        // SetAmount(events.target.value);
        // console.log('==SetAmount--', amoutn)
    }
    return(
        <form>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text" onChange={titleOnChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangedHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>amount</label>
                    <input type="text" min="10" onChange={amountChangedHandler}></input>
                </div>
            </div>
            <div className="new_subscription_actions">
                <button type="submit">Add Subscription</button>
            </div>
        </form>
    )
}
export default FormSuscription