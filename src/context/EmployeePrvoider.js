import React from 'react'

const EmployerContext = React.createContext()

const EmployerProvider = ({children}) => {
    const [isEmployer, setI]
    return (
        <EmployerContext.Provider value={isEmployer}>
            {children}
        </EmployerContext.Provider>
    )
}

export default EmployerProvider;