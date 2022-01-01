import React from "react";
import styled from "styled-components";

const PageTitleStyles = styled.div`
  span {
    margin-left: -10px;
  }
`;

export default function PageTitle(props) {
  return (
    <PageTitleStyles>
          <h1 className="font-title">{props.text} <span>.</span></h1>
    </PageTitleStyles>
  );
}

