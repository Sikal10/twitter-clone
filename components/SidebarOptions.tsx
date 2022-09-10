import {IconType} from "react-icons";

interface Props {
    Icon: IconType
    title: string
}

const SidebarOptions = ({Icon, title}: Props) => {
    return (
        <div className={"sidebar-options group"}>
            <Icon className={"sidebar-icon"} />
            <p className={"sidebar-text group-hover:text-twitter dark:group-hover:text-[#e7e9ea]"}>{title}</p>
        </div>
    );
};

export default SidebarOptions;