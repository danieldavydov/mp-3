import { useState } from "react";
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

const CalcButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1vh;
`;

const NegativeOutput = styled.p`
  color: red;
`;

export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState("");

  function display(result: number) {
    const output = document.getElementById("output");
    if (output != null) {
      output.innerHTML = String(result);

      // color red
      if (result < 0) {
        output.style.color = "red";
      }
      // color black
      else {
        output.style.color = "black";
      }
    }
  }

  function doAdd() {
    setResult(String(Number(first) + Number(second)));
  }

  function doSubtract() {
    setResult(String(Number(first) - Number(second)));
  }

  function doDivision() {
    setResult(String(Number(first) / Number(second)));
  }

  function doMultiply() {
    setResult(String(Number(first) * Number(second)));
  }

  function doPower() {
    const firstNum = Number(first);
    const secondNum = Number(second);
    let power = 1;
    let bounds = secondNum;

    if (secondNum < 0) {
      bounds *= -1;
    }

    for (let i = 1; i <= bounds; i++) {
      power = power * firstNum;
    }

    if (secondNum < 0) {
      power = 1 / power;
    }
    setResult(String(power));
  }

  function doClear() {
    setFirst("");
    setSecond("");
    setResult("");
  }

  return (
    <CalcWrapper>
      <ProjectTitle>Calculator</ProjectTitle>
      <Boxes>
        <CalcLabels>First Number:</CalcLabels>
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <CalcLabels>Second Number:</CalcLabels>
        <input
          type="text"
          value={second}
          onChange={(e) => setSecond(e.target.value)}
        />

        <CalcButtons>
          <button type="button" onClick={doAdd}>
            +
          </button>
          <button type="button" onClick={doSubtract}>
            -
          </button>
          <button type="button" onClick={doDivision}>
            /
          </button>
          <button type="button" onClick={doMultiply}>
            *
          </button>
          <button type="button" onClick={doPower}>
            **
          </button>
          <button type="button" onClick={doClear}>
            Clear
          </button>
        </CalcButtons>

        {result !== null && Number(result) > 0 && <p>{result}</p>}
        {result !== null && Number(result) < 0 && (
          <NegativeOutput>{result}</NegativeOutput>
        )}
      </Boxes>
    </CalcWrapper>
  );
}
