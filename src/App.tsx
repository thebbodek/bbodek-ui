import React from "react";
import { styled } from "@linaria/react";
import { globals } from "@/theme/globals";

const Title = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  color: ${props => props.color};
`;

function App() {
  return (
    <div className = {globals}>
      <Title color = "#fff">
        나는 뽀득 디자인 시스템 이다
      </Title>
    </div>
  );
}

export default App;
