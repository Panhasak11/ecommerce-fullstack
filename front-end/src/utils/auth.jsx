let isAuthenticated = false;

export const login = (cb) => {
    isAuthenticated = true;
    cb();
};

export const logout = (cb) => {
    isAuthenticated = false;
    cb();
};

export const isLoggedIn = () => isAuthenticated;
