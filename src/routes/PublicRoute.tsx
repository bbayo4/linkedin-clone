import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";

interface Props extends RouteProps { }
interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

export const PublicRoute: React.FC<IProps> = (props)=> {
  const { component: Component, ...restProps } = props;

  if (!Component) return null;
  return (
    <Route
      {...restProps}
      render={routeRenderProps => (
        !(localStorage.getItem("user") || sessionStorage.getItem("user")) ? (
          <Component {...routeRenderProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/feed",
              state: { from: routeRenderProps.location }
            }}
          />
        )
      )}
    />
  )
}