import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[80vh] flex items-center">
            <h2 className="text-2xl">No Data available</h2>
            <Link className="btn btn-ghost" to="/">Go Back</Link>
            
        </div>
    );
};

export default ErrorPage;