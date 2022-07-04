import React, { useContext } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ThemeContext, { themes } from './Theme_context';
import SearchContext from './SearchContext';
import { Link } from 'react-router-dom';
import './header.css'
import { useState } from 'react';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { keyword, setKeyword } = useContext(SearchContext);
    const [value, setValue] = useState("");
    const changeValue = (e) => {
        setValue(e.target.value)
    }
    const changeKeyword = () => {
        setKeyword(value);
    }

    const changeTheme = () => {
        const new_theme = theme === themes.dark ? themes.light : themes.dark;
        setTheme(new_theme);
    }


    return (
        <div className="header" style={theme}>
            <div class="header_left">
                <MenuIcon />
                <Link to="/">
                    <div className="youtube_logo">youtube</div>
                </Link>
            </div>
            <div className="header_mid">
                <input type="text" value={value} onChange={changeValue} ></input>
                <Link to={`/search/${value}`} >
                    <SearchIcon onClick={changeKeyword} />
                </Link>
            </div>
            <div className="header_right">
                <NotificationsIcon />
                <button onClick={changeTheme} > {theme === themes.dark ? "dark" : "light"}  </button>
            </div>

        </div>
    )
}

export default Header