import Content from "../components/content/Content"
import Sidebar from "../components/sidebar/Sidebar"

export default function Profile() {

    return (
        <div className="row g-0">
            <div className="col-12 col-md-8">
                <Content />
            </div>

            <div className="col-md-4 d-none d-md-block">
                <Sidebar />
            </div>
        </div>
    )
}