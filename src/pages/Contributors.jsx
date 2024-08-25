import Sidebar from "../components/sidebar/Sidebar"
import Content from "../components/content/Content.jsx"

export default function Contributors() {
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