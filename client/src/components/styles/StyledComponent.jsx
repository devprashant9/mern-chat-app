import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { grayColor } from "../../constants/color";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0,0,0,0)",
  border: "0",
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const InputBox = styled("input")`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0 3rem;
  border-radius: 2rem;
  background-color: #f0f0f0;
  box-sizing: border-box;
  font-size: 1rem;
  color: #333;
  transition: all 0.2s ease;

  &::placeholder {
    color: #999;
    font-size: 0.95rem;
  }

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 0 2px ${grayColor};
  }
`;
