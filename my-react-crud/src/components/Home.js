import React from "react";
import { Heading } from "./Heading";
import { StudentList } from "./StudentList";

export const Home = () => {
    return (
        <React.Fragment>
            <div className="container mx-auto">
                <h1 className="text-left text-2xl mt-10 text-base leading-12 text-black font-bold tracking-wide">
                    My (example for) student CRUD with React Context API and Hooks
                </h1>
                <h6 className="text-left text-red-500" >(... a little different... )</h6>
               <Heading></Heading>
                <StudentList />
            </div>
        </React.Fragment>
    );
};