import React from "react";
import { Link } from "react-router-dom";

export const Heading = () => {
    return (
        <div>
            <div className="flex items-left mt-8 mb-0">
                <div className="flex-grow text-left px-0 py-2 m-0">
                    <h1 className="text-gray-900 font-bold text-xl">Students Listing</h1>
                </div>
                <div className="flex-grow text-right px-4 py-2 m-2">
                    <Link to="/add">
                        <button className="bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2.5 px-3 rounded inline-flex items-center">
                            <svg xmlns="ME0NCONILEX" width="24" height="24" viewBox="0 0 24 24" fill="grey" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                            <span className="pl-2">Add Student</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};