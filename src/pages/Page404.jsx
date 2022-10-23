import React from "react";

const Page404 = () => {
    React.useEffect(() => {
        document.title = "Burgelo - 404 Page Not Found";
    }, []);
    return <div>404</div>;
};

export default Page404;
