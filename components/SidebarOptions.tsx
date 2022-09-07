import {IconType} from "react-icons";

interface Props {
    Icon: IconType
    title: string
}

const SidebarOptions = ({Icon, title}: Props) => {
    return (
        <div className={"sidebar-options group"}>
            <Icon className={"h-6 w-6 "} />
            <p className={"group-hover:text-twitter"}>{title}</p>
        </div>
    );
};

export default SidebarOptions;