import { useState } from "react";
import { MenuBtn, MenuItem, MenuItems, NavContainer } from "../stylesheets/styles";

export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <NavContainer $isOpen={menu}
            initial={{
                y: '-100%'
            }}
            animate={{
                y: 0
            }}
            transition={{
                duration: 2,
                delay: 2,
            }}
        >
            <MenuItems
                drag="y"
                dragConstraints={{
                    top: 0,
                    bottom: 70
                }}
                dragElastic={.05}
                dragSnapToOrigin
            >
                <MenuBtn onClick={() => setMenu(!menu)}>
                    Navbar
                </MenuBtn>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.09, y: 0 }}>
                    Home
                </MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.09, y: 0 }}>
                    About
                </MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.09, y: 0 }}>
                    Shop
                </MenuItem>
                <MenuItem whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.09, y: 0 }}>
                    New Arrival
                </MenuItem>
            </MenuItems>
        </NavContainer>
    );
};
