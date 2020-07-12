import styled from 'styled-components';

interface IProps{
    url?:string,
    alt?:string
}

export default styled.img<IProps>`
  width:100%;
  height:100%;
  object-fit:cover;
  mix-blend-mode:multiply;
`;
