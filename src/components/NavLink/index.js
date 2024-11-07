import {NavLink as NavLinkOld} from "react-router-dom";
import React from "react";

export function NavLink(props) {
    const {
        className,
        activeClassName,
        ...rest
    } = props;

    return <NavLinkOld className={({isActive}) => className + (isActive ? ` ${activeClassName}` : "")} {...rest} />;
}

export default NavLink;
