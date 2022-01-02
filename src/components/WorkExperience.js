import React from "react";
import styled from "styled-components";

const EducationStyles = styled.div`
display: flex;
position: relative;


.icon {
  background-color: var(--green);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3em;
  margin-right: 30px;
}
.container {
  display: flex;
  flex-direction: column;
}
.date {
  display: inline-block;
  background-color: var(--darkNavy);
  color: var(--slate);
  width: auto;
  font-size: .9rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 1px 10px;
}
.arrow-right {
  display: inline-block;
  position: relative;
  top: 11px;
  width: 0; 
  height: 0; 
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid var(--darkNavy);
}
h3 {
  color: var(--green);
}
::after{
  content: "";
    position: absolute;
    top: 40px;
    left: 20px;
    bottom: 0;
    height: calc(100% - 60px);
    border-left: 1px solid var(--green);
}

`;

export default function WorkExperience({ date, name, description }) {
  return (
    <EducationStyles>
        <div className="material-icons icon">
          apartment
        </div>
      <div className="container">
      <div>
        <p className="date">{date}</p>
        <div className="arrow-right"></div>
      </div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </EducationStyles>
  );
}