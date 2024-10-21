import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>404</h1>
          <p>Page not found</p>
          <p>
            Go back to the <Link to="/">home page</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
