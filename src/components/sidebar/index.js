import React from "react";
import { Container, Logo, Link, Icon, Text, LogoAlt } from "./styles/sidebar";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Sidebar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Sidebar.Logo = function SidebarLogo({ to, src, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo src={src} {...restProps} />
		</ReactRouterLink>
	);
};

Sidebar.LogoAlt = function SidebarLogoAlt({ to, src, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<LogoAlt src={src} {...restProps} />
		</ReactRouterLink>
	);
};

Sidebar.Icon = function SidebarIcon({ src, ...restProps }) {
	return <Icon src={src} {...restProps} />;
};

Sidebar.Text = function SidebarText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Sidebar.Link = function SidebarLink({ active, to, children, ...restProps }) {
	return (
		<Link to={to} {...restProps} active={active}>
			{children}
		</Link>
	);
};
