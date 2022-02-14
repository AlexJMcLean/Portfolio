import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import PageTitle from "../components/PageTitle";
import { signin, demo } from "../actions/auth";

const initialState = {
  email: "",
  password: "",
};

const LoginFormStyles = styled.div`
  width: 70%;
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 85%;
  }

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
        min-width: 150px;
        margin-top: 10px;
        padding: 5px;
      }
    }
    button {
      width: calc(50% + 10px);
      min-width: 160px;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
`;

export default function Auth() {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStateChange = (e) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signin(formState, navigate));
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    dispatch(demo(navigate));
  };
  return (
    <>
      <PageTitle text="Log in" />
      <LoginFormStyles>
        <form>
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
          <button type="submit" onClick={handleSubmit}>
            Log in
          </button>
          <button type="submit" onClick={handleDemo}>
            Demo
          </button>
        </form>
      </LoginFormStyles>
    </>
  );
}
