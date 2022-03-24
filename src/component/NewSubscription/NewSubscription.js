import FormSuscription from "./FormSubscription";
import './NewSubscription.css'
const NewSubscription = (props)=>{
  console.log('======', props)
  const onSaveHandler = (data) => {
    const subscriptionData = {...data, id:Math.random().toString}
    props.onAddSubscription(subscriptionData)
    console.log('on Save', subscriptionData);
  }
    return(
        <div className="new_subscription">
          <FormSuscription onSave={onSaveHandler}/>
        </div>
    )
}
export default NewSubscription;