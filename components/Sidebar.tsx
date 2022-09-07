import SidebarOptions from "./SidebarOptions";
import {RiHome4Line, RiHashtag, RiFileList3Line} from "react-icons/ri";
import {HiOutlineBell} from "react-icons/hi";
import {MdMailOutline, MdBookmarkBorder} from "react-icons/md";
import {IoEllipsisHorizontalCircle, IoPersonOutline} from "react-icons/io5";

const Sidebar = () => {
    return (
        <div>
            <div>
                <img className={"w-10 h-10"} src="https://links.papareact.com/drq" alt=""/>

                <SidebarOptions Icon={RiHome4Line} title={"Home"} />
                <SidebarOptions Icon={RiHashtag} title={"Explore"} />
                <SidebarOptions Icon={HiOutlineBell} title={"Notifications"} />
                <SidebarOptions Icon={MdMailOutline} title={"Messages"} />
                <SidebarOptions Icon={MdBookmarkBorder} title={"Bookmarks"} />
                <SidebarOptions Icon={RiFileList3Line} title={"Lists"} />
                <SidebarOptions Icon={IoPersonOutline} title={"Profile"} />
                <SidebarOptions Icon={IoEllipsisHorizontalCircle} title={"More"} />
            </div>
        </div>
    );
};

export default Sidebar;