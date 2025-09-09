import "../App.css";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Button";
import UserCard from "./UserCard";
import HasanPhoto from "../assets/F.S.jpg";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function SideBar() {
  const links = [
    {
      id: 1,
      name: "Home",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "Explore",
      icon: <FaSearch />,
    },
    { id: 3, name: "Notifications", icon: <FaBell /> },
    { id: 4, name: "Messages", icon: <IoMdMail /> },
    { id: 5, name: "Lists", icon: <CiViewList /> },
    { id: 6, name: "Bookmarks", icon: <CiBookmark /> },
    { id: 7, name: "Communities", icon: <FaUserFriends /> },
    { id: 8, name: "Profile", icon: <IoMdPerson /> },
    { id: 9, name: "More", icon: <CiCircleMore /> },
  ];
  const [open, setOpen] = useState(true);
  return (
    <div className="side-bar">
      {open && (
        <div className="side-bar-logo">
          <FaXTwitter />
        </div>
      )}
      <CiMenuBurger
        className="menu-icon"
        onClick={() => {
          setOpen((o) => !o);
        }}
      />
      {open && (
        <div className="side-bar-links">
          {links.map((link) => {
            return (
              <div key={link.id} className="side-bar-link">
                <div className="side-bar-link-icon">{link.icon}</div>
                <div className="side-bar-link-name">{link.name}</div>
              </div>
            );
          })}
        </div>
      )}
      {open && (
        <Button bg="#1d9bf0" color="white" className={"side-bar-tweet-btn"}>
          Post
        </Button>
      )}

      {open && (
        <UserCard
          photo={HasanPhoto}
          name="Hasan Al-Saafin"
          account="@hasanSaafin"
          className={"sidebar-user"}
        >
          ...{" "}
        </UserCard>
      )}
    </div>
  );
}
