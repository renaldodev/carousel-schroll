import React from "react";

import { Container, Wrapper } from "./styles";

import ImageItem from "../ImageItem";

interface IProps {
  source: Array<string>;
}

const Carousel: React.FC<IProps> = ({ source }) => {
  return (
    <Container>
      {source.map((url,key) => (
        <Wrapper>
          <ImageItem key={key} src={url}/>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Carousel;
