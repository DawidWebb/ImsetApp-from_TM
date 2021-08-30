import { useHistory } from "react-router";

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button type="button" onClick={handleGoBack}>
      powrót
    </button>
  );
};

export default BackButton;
