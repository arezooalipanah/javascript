import { createContext, useState } from 'react';

export const UserContext = createContext(
    JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
);
const { Provider } = UserContext;

const UserProvider = ({ children }) => {
    const [user, set] = useState(
        JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
    );

    const setUser = (usr) => {
        set(usr);
        localStorage.setItem('user', JSON.stringify(usr));
    };

    return <Provider value={{ user, setUser }}>{children}</Provider>;
};

export default UserProvider;
