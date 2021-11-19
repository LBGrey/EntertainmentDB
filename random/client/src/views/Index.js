import React from "react";
import Details from "../views/Details";
import SearchMusic from "../components/SearchMusic";

const Index = () => {
    return (
        <React.Fragment>
            <SearchMusic />
            <Details />
        </React.Fragment>
    );
};

export default Index;