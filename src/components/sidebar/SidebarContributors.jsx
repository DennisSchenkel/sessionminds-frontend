import TopicsSidebarList from "../topics/TopicsSidebarList";
import ToolsSidebarList from "../tools/ToolsSidebarList";

export default function SidebarContributors() {
    return (
        <>
        <div className="pb-4">     
            <TopicsSidebarList />
        </div>
        <div>
            <ToolsSidebarList />
        </div>
        </>
    )
    }