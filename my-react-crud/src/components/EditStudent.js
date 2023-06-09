import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditStudent = (route) => {
    let history = useHistory();

    const { students, editStudent } = useContext(GlobalContext);
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        city: "",
        email:"",
        details:"",
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const studentId = currentUserId;
        const selectedUser = students.find(
            (currentStudentTraversal) => currentStudentTraversal.id === parseInt(studentId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, students]);

    const onSubmit = (e) => {
        e.preventDefault();
        editStudent(selectedUser);
        history.push("/");
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({ ...selectedUser, [userKey]: newValue });

    if (!selectedUser || !selectedUser.id) {
        return <div>Invalid Student ID.</div>;
    }

    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-4">
                        <label
                            className="block h4 normalize tracking-wide text-blue-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name of student
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.name}
                            onChange={(e) => handleOnChange("name", e.target.value)}
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label
                            className="block normalize h4 tracking-wide text-blue-700 text-xs font-bold mb-2"
                            htmlFor="City"
                        >
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.city}
                            onChange={(e) => handleOnChange("city", e.target.value)}
                            type="text"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="w-full mb-4">
                        <label
                            className="block h4 normalize tracking-wide text-blue-700 text-xs font-bold mb-2"
                            htmlFor="Email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.email}
                            onChange={(e) => handleOnChange("email", e.target.value)}
                            type="text"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="w-full  mb-0">
                        <label
                            className="block h4 normalize tracking-wide text-blue-700 text-xs font-bold mb-2"
                            htmlFor="details"
                        >
                            Details
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={selectedUser.details}
                            onChange={(e) => handleOnChange("details", e.target.value)}
                            type="text"
                            placeholder="Enter details"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-blue-400 w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Student (details)
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};