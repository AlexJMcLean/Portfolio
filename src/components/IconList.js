import React from "react";
import styled from "styled-components";

const IconListStyles = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  text-align: center;

  h2 {
  }

  .icon {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  }
`;

const IconStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  img {
    height: 50px;
    margin: 0 auto 10px;
  }
  h3 {
    color: var(--green);
    font-weight: 300;
    font-size: 1rem;
    text-align: center;
  }
`;

function SingleIcon({ language }) {
  return (
    <IconStyles>
      <img src={language.image} alt={language.title} />
      <h3>{language.title}</h3>
    </IconStyles>
  );
}

export default function IconList({ languages }) {
  return (
    <IconListStyles>
      <h2>Languages I've worked with</h2>
      <div className="icon">
        {languages.map((language) => (
          <SingleIcon key={language.id} language={language} />
        ))}
      </div>
    </IconListStyles>
  );
}
