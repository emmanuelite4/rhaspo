import styled from "@emotion/styled";
import { useEffect } from "react";
import "react-html5-camera-photo/build/css/index.css";
import { useHistory } from "react-router-dom";
import { HOME_URL } from "../../../constant/navigation";
import { CSS_CONTAINER_STYLE } from "../../../style/shared";
import Button from "../Button/Button";
import CancelButton from "../CancelButton/CancelButon";
import HomeRoutesContainer from "../HomeRoute/HomeRoutesContainer";
import Loader from "../Loader/Loader";

const TranslateCamera = ({ loading, imageURI, onSetImage }) => {
  const history = useHistory();
  useEffect(() => {
    if (!imageURI) history.push(HOME_URL);
  }, []);
  return (
    <HomeRoutesContainer>
      <Holder>
        <CancelButton onCancel={() => history.goBack()} />
        {imageURI && <CapturedImage src={imageURI} alt={"snap"} />}

        <ButtonHolder>
          <Button onClick={onSetImage(imageURI)} disabled={loading}>
            Scan Image
          </Button>
          {loading && <Loader />}
        </ButtonHolder>
      </Holder>
    </HomeRoutesContainer>
  );
};

export default TranslateCamera;

const CapturedImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Holder = styled.div`
  ${CSS_CONTAINER_STYLE}
  position:relative;
  padding-top: 80px;
`;

const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
