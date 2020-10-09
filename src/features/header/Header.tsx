import React, { ReactElement, ReactNode } from "react";
import { Background, Logo, Container, ButtonLink } from "./styles/header";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import { Link, useLocation } from "react-router-dom";

type HeaderPropsType = {
  children?: ReactNode;
  hasBackground?: boolean;
  src?: string;
};

export default function Header({
  children,
  hasBackground = true,
  src,
}: HeaderPropsType): ReactElement {
  const location = useLocation();
  return hasBackground ? (
    <Background dontShowOnSmallViewPort={false} src={src}>
      <Container>
        <Logo src={logo} alt="Netflix" />
        {location.pathname === ROUTES.HOME && (
          <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
        )}
      </Container>
      {children}
    </Background>
  ) : (
    <>
      <Container>
        <Link to={ROUTES.HOME}>
          <Logo src={logo} alt="Netflix" />
        </Link>
      </Container>
      {children}
    </>
  );
}
