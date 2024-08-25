import Sidebar from "../components/sidebar/Sidebar"
import Content from "../components/content/Content"

export default function Tools() {
    return (
        <div className="row">
        
            <div className="col-8">
                <Content />
            </div>

            <div className="col-4">
                <Sidebar />
            </div>
            
        </div>
    )
    }