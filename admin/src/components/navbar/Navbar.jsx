import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({type:'TOGGLE'})} />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationAddOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
