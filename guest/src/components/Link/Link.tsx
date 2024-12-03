import { useMemo } from "react";
import { Link, LinkProps } from "react-router";

export type ALinkProps = LinkProps & {
 routeParams?: { [key: string]: string | number };
};

export const ALink = (props: ALinkProps) => {
 const { routeParams, ...linkProps } = props;
 const to = useMemo(() => {
  if (routeParams) {
   let newLink = linkProps.to as string;
   Object.keys(routeParams).forEach((key) => {
    newLink = newLink.replace(`:${key}`, String(routeParams[key]));
   });
   return newLink;
  }
  return linkProps.to;
 }, [linkProps.to, routeParams]);
 return <Link {...linkProps} to={to} />;
};
