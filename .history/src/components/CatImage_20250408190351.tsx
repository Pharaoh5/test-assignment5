import styled from 'styled-components';

const ImageContainer = styled.div`
  margin: 20px 0;
`;

const CatImg = styled.img`
  max-width: 100%;
  max-height: 500px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Placeholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

interface CatImageProps {
  imageUrl?: string;
}

const CatImage = ({ imageUrl }: CatImageProps) => {
  return (
    <ImageContainer>
      {imageUrl ? (
        <CatImg src={imageUrl} alt="Random cat" />
      ) : (
        <Placeholder>Loading cat...</Placeholder>
      )}
    </ImageContainer>
  );
};

export default CatImage;