import React from "react";
import styled from "styled-components";
import PageTitle from "./PageTitle";

const LoginPageStyles = styled.div``;

export default function Login() {
  return (
    <>
      <LoginPageStyles>
        <PageTitle text="Please Login" />
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </LoginPageStyles>
    </>
  );
}
