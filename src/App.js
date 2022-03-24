import "./App.css";
// import Container from './templates/Container'
import Subscription from "./component/Subscription";
import Container from "./component/Container";
import StudentDetails from "./component/StudentDetails";
import NewSubscription from "./component/NewSubscription/NewSubscription";
import Filter from "./component/NewSubscription/Filter";
import { useState } from "react";
// import BookDetails from './component/assignments/BookDetails';
const INITIAL_SUBSCRIPTION = [
  {
    id: "1",
    date: new Date("2021", "03", "23"),
    title: "Monthly Subscription",
    amount: "125.60",
  },
  {
    id: "2",
    date: new Date("2020", "06", "28"),
    title: "Annual Subscription",
    amount: "1125.00",
  },
  {
    id: "3",
    date: new Date("2021", "09", "05"),
    title: "Quarterly Subscription",
    amount: "425.50",
  },
];
const App = () => {
  const [subscriptions, setSubscriptions] = useState(INITIAL_SUBSCRIPTION)
  const [filterData, setFilterData] = useState("2022");
  const addSubscriptionHandler = (data) => {
    console.log("===onAddSusbcription===", data, subscriptions);
    setSubscriptions(prevState=>{return [data, ...subscriptions]})
    subscriptions.push(data);
  };

  const filterChangeHandler = (data) => {
    console.log("Filter Change Handler", data);
    setFilterData(data);
  };
  return (
    <Container>
      {/* <BookDetails/> */}
      <NewSubscription onAddSubscription={addSubscriptionHandler} />
      <Filter
        onFilterChangeProps={filterChangeHandler}
        selectedFilter={filterData}
      />
      <StudentDetails studentDetails="firstName" />
      {/* {subscriptions.map(subscription =><Subscription date={subscription.date} title={subscription[0].title} amount={subscription[0].amount}
      />)} */}

      {subscriptions.map((subscription) => (
        <Subscription
          key={subscription.id}
          date={subscription.date}
          title={subscriptions[0].title}
          amount={subscriptions[0].amount}
        />
      ))}
      {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/> */}
    </Container>
  );
};

export default App;
