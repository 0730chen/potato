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
const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Font = styled.span`
    font-size: 12px;
    margin: 10px 0;
`
export default function Tags(props) {
    return (
        <Tag>
            <Div>
                <p>{props.name}</p>
                <Font>{props.tag}</Font>
            </Div>
            <div>开始</div>
        </Tag>
    )
}