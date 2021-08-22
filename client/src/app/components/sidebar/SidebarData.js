import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import * as AiIcons from "react-icons/ai";
// import * as GiIcons from "react-icons/gi";
// import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <RiIcons.RiHome6Line />,
    cName: "nav-text",
  },
  {
    title: "Applications",
    path: "/applications",
    icon: <RiIcons.RiApps2Line />,
    cName: "nav-text",
  },

  {
    title: "Android Games",
    path: "/android-games",
    icon: <RiIcons.RiGamepadLine />,
    cName: "nav-text",
  },

  {
    title: "Contact-Us",
    path: "/contact",
    icon: <RiIcons.RiSendPlaneFill />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
