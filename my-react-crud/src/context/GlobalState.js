import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
    students: [
        {
            id: 1,
            name: 'ME0NCONILEX',
            city: 'Växjö',
            email: 'me@0nconilex.se',
            details: 'Analyst (and much more... ** smile **)',
        }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addStudent(student) {
        dispatch({
            type: "ADD_STUDENT",
            payload: student
        });
    }

    function editStudent(student) {
        dispatch({
            type: "EDIT_STUDENT",
            payload: student
        });
    }

    function removeStudent(id) {
        dispatch({
            type: "REMOVE_STUDENT",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                students: state.students,
                addStudent,
                editStudent,
                removeStudent
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};