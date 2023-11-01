import { styled } from "@linaria/react"

const Title = styled.div<{color : string}>`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: ${(props) => props.color};
`;

function App() {
  return (
    <>
      <Title color="#fff">
          나는 뽀득 디자인 시스템 이다
      </Title>
    </>
  )
}

export default App
