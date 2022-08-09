import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { UseTranslate } from "src/contexts/Translate";
const PaginationContainer = styled.div`
  width: "100%";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 12px;
  border-bottom: 1px solid #525f7f45;
`;

const PaginationText = styled.div`
  color: #5e6e82;
  font-size: 14px;
  font-weight: 300;
`;

const PaginationButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 120px;
  align-items: center;
  justify-content: center;
`;
const PaginationButton = styled.button`
  margin: 0px 5px;
  background-color: transparent;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 40px;
  height: 30px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")} !important;
`;

const Pagination = ({ page = 1, count = 0, pageSize = 10, onChangePage }) => {
  const { translate } = UseTranslate();
  const [_page, setPage] = useState(page);
  useEffect(() => {}, []);
  return (
    <PaginationContainer>
      <PaginationText>
        {translate("showing")} {_page} {"-"} {Math.ceil(Number(count / pageSize))} {translate("of")} {count} {translate("entries")}
      </PaginationText>
      <PaginationButtons>
        <PaginationButton
          disabled={Math.ceil(Number(count / pageSize)) == 1 ? true : _page == 1 ? true : false}
          onClick={() => {
            if (_page > 1) {
              let p = _page;
              p -= 1;
              onChangePage(p);
              setPage(p);
            } else {
              onChangePage(_page);
            }
          }}
        >
          <FaChevronLeft />
        </PaginationButton>
        <PaginationButton
          disabled={Math.ceil(Number(count / pageSize)) == 1 ? true : page === Math.ceil(Number(count / pageSize)) ? true : false}
          onClick={() => {
            if (page < Math.ceil(Number(count / pageSize))) {
              let p = page;
              p += 1;
              onChangePage(p);
              setPage(p);
            } else {
              onChangePage(page);
            }
          }}
        >
          <FaChevronRight />
        </PaginationButton>
      </PaginationButtons>
    </PaginationContainer>
  );
};
export default Pagination;
