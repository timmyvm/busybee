import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import SideBarUserInfo from "./SideBarUserInfo";

export default function Sidebar() {
   
  return (
    <nav className="h-screen hidden sm:flex flex-col sticky top-0 p-3 xl:ml-20
    xl:mr-10">
      <div className="relative h-full flex flex-col items-center">
        <div className="py-3 ">
          <Image
            src={"/assets/busybee-logo2.png"}
            alt="Logo"
            width={48}
            height={48}
          />
        </div>
        <ul>
          <SidebarLink Icon={HomeIcon} text="Home" />
          <SidebarLink Icon={HashtagIcon} text="Explore" />
          <SidebarLink Icon={BellIcon} text="Notifications" />
          <SidebarLink Icon={InboxIcon} text="Messages" />
          <SidebarLink Icon={BookmarkIcon} text="Bookmarks" />
          <SidebarLink Icon={UserIcon} text="Profile" />
          <SidebarLink Icon={EllipsisHorizontalCircleIcon} text="More" />
          <button className="hidden xl:block bg-[#f4af01] w-[200px] h-[52px] rounded-full text-white font-medium cursor-pointer shadow-md mt-2">
            Bumble
          </button>
        </ul>
       <SideBarUserInfo/>
      </div>
    </nav>
  );
}

interface SideBarLinkProps {
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

function SidebarLink({ text, Icon }: SideBarLinkProps) {
  return (
    <li className="flex items-center text-xl mb-2 space-x-3 p-2.5">
      <Icon className="h-7 " />
      <span className="hidden xl:block">{text}</span>
    </li>
  );
}
