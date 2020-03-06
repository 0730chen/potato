import styled from "styled-components";

const Tag = styled.div`
  border: 1px solid black;
  padding: 10px 20px;
  margin: 8px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TagWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const tagTime = styled.div`
    font-size: 12px;
    margin: 10px 0;
`;
export default {
    Tag,
    TagWrapper
}