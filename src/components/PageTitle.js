import React from "react";
import styled from "styled-components";

const PageTitleStyles = styled.div`
  text-align: center;
  margin-bottom: 100px;
  span {
    margin-left: -5px;
  }
`;

export default function PageTitle(props) {
  return (
    <PageTitleStyles>
      <h1 className="font-title">
        {props.text}
        <span>.</span>
      </h1>
    </PageTitleStyles>
  );
}
