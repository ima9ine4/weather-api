//Weather.js
import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PinkButton = styled.button`
  background-color: pink;
  margin:10px;
  height:3rem;
  width:6rem;
  font-size:1rem;
`;

class Weather extends Component {
    render() {
        return (
            <div>
                <h1 align='center'>어느 곳의 날씨를 알려드릴까요?</h1>
                <ButtonContainer>
                    <Link to={"/Seoul"} state= { {cityName: "Seoul" } }>
                        <PinkButton>서울</PinkButton>
                    </Link>
                    <Link to={"/Ulchin"} state= { {cityName: "Ulchin" } }>
                        <PinkButton>울진</PinkButton>
                    </Link>
                    <Link to={"/Mokpo"} state= { {cityName: "Mokpo" } }>
                        <PinkButton>목포</PinkButton>
                    </Link>
                    <Link to={"/Busan"} state= { {cityName: "Busan" } }>
                        <PinkButton>부산</PinkButton>
                    </Link>
                    <Link to={"/Jeju"} state= { {cityName: "Jeju City" } }>
                        <PinkButton>제주</PinkButton>
                    </Link>
                    <Link to={"/Daejeon"} state= { {cityName: "Daejeon" } }>
                        <PinkButton>대전</PinkButton>
                    </Link>
                    <Link to={"/Daegu"} state= { {cityName: "Daegu" } }>
                        <PinkButton>대구</PinkButton>
                    </Link>
                    <Link to={"/Gwangju"} state= { {cityName: "Gwangju" } }>
                        <PinkButton>광주</PinkButton>
                    </Link>
                </ButtonContainer>
            </div>
        );
    }
}

export default Weather;
