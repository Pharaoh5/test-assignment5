import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Random Cat Images</Title>
    </HeaderContainer>
  );
};

export default Header;