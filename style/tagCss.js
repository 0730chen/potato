import styled from "styled-components";

 const tag = styled.div`
  border: 1px solid black;
  padding: 10px 20px;
  margin: 8px 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
 const tagWrapper =styled.div`
  display: flex;
  flex-direction: column;
` ;
const tagTime = styled.div`
    font-size: 12px;
    margin: 10px 0;
`;
export default {
 tag,
 tagWrapper,
 tagTime
}