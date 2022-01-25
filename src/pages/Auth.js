import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";

const initialState = {
  email: "",
  password: "",
};

const LoginFormStyles = styled.div`
  width: 70%;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    border-radius: var(--borderRadius);

    margin: 0 auto;
    background-color: var(--white);

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      width: 100%;

      input {
        width: 50%;
        margin-top: 10px;
        padding: 5px;
      }
    }
    button {
      width: calc(50% + 10px);
      padding: 5px;
    }
  }
`;

export default function Auth() {
  const [formState, setFormState] = useState(initialState);

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <>
      <PageTitle text="Log in" />
      <LoginFormStyles>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={handleStateChange}
              value={formState.email}
            />
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleStateChange}
              value={formState.password}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </LoginFormStyles>
    </>
  );
}
