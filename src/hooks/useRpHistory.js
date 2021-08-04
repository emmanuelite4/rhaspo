import { useHistory } from "react-router-dom";

const useRpHistory = () => {
  const history = useHistory();

  const onGoBack = () => {
    history.goBack();
  };

  const onPush = (path) => () => {
    history.push(path);
  };

  return [onGoBack, onPush];
};

export default useRpHistory;
