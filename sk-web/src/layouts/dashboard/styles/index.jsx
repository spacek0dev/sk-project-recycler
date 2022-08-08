import styled from "styled-components";

const ExportButtonContainer = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 12px;
`;

const ItemsForm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (max-width: 771px) {
    justify-content: center;
  }
`;
const ItemForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  padding: 0px 12px;
  @media screen and (max-width: 771px) {
    max-width: 320px;
  }
  @media screen and (max-width: 771px) and (min-width: 570px) {
    max-width: 280px;
  }
`;
const RegisterTitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const RegisterTitle = styled.h1`
  margin: 12px;
  padding: 0;
`;
const RegisterDescription = styled.p`
  margin: 12px;
  padding: 12px;
  font-weight: 200;
  max-width: 420px;
  text-align: center;
`;

export { ExportButtonContainer, ItemsForm, ItemForm, RegisterTitleContainer, RegisterTitle, RegisterDescription };
