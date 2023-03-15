import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const AddStudent = () => {
    let history = useHistory();

    const { addStudent, students } = useContext(GlobalContext);

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: students.length + 1,
            name,
            city,
            email,
            details,
        };
        addStudent(newStudent);
        history.push("/");
    };

    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-10 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block normalize h4 text-shade tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name of student
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:text-gray-600"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block normalize h4 tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="City"
                        >
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:text-gray-600 focus:shadow-outline"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            type="text"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block normalize h4 tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="Email"
                        >
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:text-green-600 focus:shadow-outline"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="w-full mb-5">
                        <label
                            className="block h4 normalize tracking-wide text-blue-800 text-xs font-bold mb-2"
                            htmlFor="details"
                        >
                            Details
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-green-500 leading-tight focus:outline-none focus:text-gray-600"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            type="text"
                            placeholder="Enter details"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-blue-500 w-full hover:bg-blue-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add Student
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