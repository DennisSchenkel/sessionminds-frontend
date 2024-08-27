import Content from "../components/content/Content"
import Sidebar from "../components/sidebar/Sidebar"

export default function Home() {
    return (
        <div className="row g-0">
        
        <h1>Explore</h1>
        <p>Explore the latest and greatest tools for your session.</p>

            <div className="col-8">
                <Content />
            </div>

            <div className="col-4">
                <Sidebar />
            </div>
            
        </div>
    )
    }