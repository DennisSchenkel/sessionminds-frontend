import Content from "../components/content/Content"
import Sidebar from "../components/sidebar/Sidebar"

export default function Tools() {

    return (
        <div className="row g-0">
        
            <div className="col-8">
                <Content />
            </div>

            <div className="col-4">
                <Sidebar />
            </div>
            
        </div>
    )
}