import styled from "styled-components";

const CalcWrapper = styled.div`
  background-image: url("https://media3.giphy.com/media/MyWrJJIdAfoJuEPlLP/200w.gif?cid=6c09b9522770ik2eoh4i6i597cgfcao2umys7xg1rtkdh1kq&ep=v1_gifs_search&rid=200w.gif&ct=g");
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid #7895b5;
  border-radius: 15%;
  padding: 2vh 2vw;
  width: 50%;
  margin: 4vh auto;
  text-align: center;
`;

const ProjectTitle = styled.h4`
  font-size: calc(2px + 2.5vw);
  font-family: "Delius", serif;
  color: black;
  text-align: center;
`;

const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1vh;
`;

const CalcLabels = styled.label`
  font-size: calc(1vh + 1vw);
  font-weight: bold;
  color: black;
`;

export default function Calculator() {
  return (
    <CalcWrapper>
      <ProjectTitle>Calculator</ProjectTitle>
      <Boxes>
        <CalcLabels>First Number:</CalcLabels>
      </Boxes>
    </CalcWrapper>
  );
}
