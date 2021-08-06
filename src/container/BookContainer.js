import Book from "../app/component/Book/Book";
import Header from "../app/component/HomeHeader/Header";

const BookContainer = () => {
  return (
    <div>
      <Header title="Book" />
      <Book />
    </div>
  );
};

export default BookContainer;
