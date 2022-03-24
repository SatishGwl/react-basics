import BookDetails from "./BookDetails"

const BookList = (props) =>{
    const onSaveHandler = (data) => {
        const bookData = {...data, }
        props.onAddSubscription(bookData)
        console.log('on Save', bookData);
      }
    return(
        <BookDetails onSave={onSaveHandler}/>
    )
}
export default BookList;