import * as React from 'react'

export const user = {
    Currency: "€"
};

const AuthContext = React.createContext(user);
export default AuthContext;

