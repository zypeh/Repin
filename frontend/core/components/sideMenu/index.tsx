import * as React from 'react';

interface SideMenuOption {
    onToggle: any;
    onChange: any;
}

function SideMenu(option: SideMenuOption) {
    let [isOpen, setIsOpen] = React.useState(false);

    const menuClass = `menu ${isOpen ? 'menu--open' : ''}`
    return (
        <div className={menuClass}>
            <MenuIcon
                open={isOpen}
                onClick={() => {
                    setIsOpen(!isOpen);
                    onToggle();
                }}>
            </MenuIcon>

            <div className="menu__content">
                <h2>Project directory</h2>
            </div>
        </div>
    )
}

export default SideMenu;