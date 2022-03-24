// import { useState } from "react";
// const BookDetails = (props) => {
//     const [bookDetails, setBookDetails] = useState({Title:'Book Title', Description: 'Book Description'})
//     const titleChangeHandler = (events)=>{
//         setBookDetails((prevState)=>{
//             return {...prevState, Title:events.target.value}
//         })
//     }
//     const descriptionChangeHandler = (events)=>{
//         setBookDetails((prevState)=>{
//             return {...prevState, Title:events.target.value}
//         })
//     }

//     const submitHandler = (events) =>{
//         events.preventDefault();
//         const Subscription = {title:Title, description:Description}
//         props.onSave(Subscription)
//         console.log('onsubmit Subscription ', Subscription);
//     }
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <div className="new_subscription_control">
//           <label>Title</label>
//           <input
//             type="text"
//             onChange={titleChangeHandler}
//             value={Title}
//           ></input>
//         </div>
//         <div className="new_subscription_control">
//           <label>Description</label>
//           <input
//             type="text"
//             onChange={descriptionChangeHandler}
//             value={Description}
//           ></input>
//           <button type="submit">Add Subscription</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default BookDetails;
