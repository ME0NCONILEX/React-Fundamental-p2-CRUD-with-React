import React, {useCallback, useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const StudentList = () => {
    const { students, removeStudent } = useContext(GlobalContext);
    const onSvgAbort = useCallback((event) => {
    }, []);

    return (
        <React.Fragment>
            {students.length > 0 ? (
                <React.Fragment>
                    {students.map((student) => (
                        <div
                            className="flex items-left bg-blue-10 mb-10 shadow"
                            key={student.id}

                        >
                            <label
                                className="block h5 normalize tracking-wide text-green-500 text-left px-1 py-2 m-2  text-xs font-bold mb-2"
                                htmlFor="name"
                            >
                                Student id.{` ${student.id}`}
                                </label>
                            <div className="flex-auto text-right px-4 py-0 m-2">
                                <Link
                                    to={`/edit/${student.id}`}
                                    title="Edit Student (details)"
                                >
                                    <div className="bg-green-300 hover:bg-blue-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                       <svg xmlns="ME0NCONILEX" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"
                                            onAbort={onSvgAbort}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                    </div>
                                </Link>
                                <button
                                    onClick={() => removeStudent(student.id)}
                                    className="block bg-red-500 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                                    title="Remove Student"
                                >
                                    <svg xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            ) : (
                <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
            )}
        </React.Fragment>
    );
};