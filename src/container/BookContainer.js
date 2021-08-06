import Book from "../app/component/Book/Book";
import DesktopHeader from "../app/component/HomeHeader/DesktopHeader";
import Header from "../app/component/HomeHeader/Header";
import CategoryContainer from "../app/component/Rhapso/CategoryContainer";

const BookContainer = () => {
  return (
    <>
      <DesktopHeader title="Rhapso Translate" />
      <Header title="Book" />
      <CategoryContainer>
        <Book />
      </CategoryContainer>
    </>
  );
};

export default BookContainer;
