import { StyledHeader } from "./StyledHeader";

export const Header = ({ className, children }) => {
  return (
    <StyledHeader className={className}>
      <h1>Kenzie Hub</h1>
      {children}
    </StyledHeader>
  );
};
