const GlobalConstants = {
    END_POINT_URL : 'https://swapi.co/api/',
    setLocalStorage: function(name, value) {
        localStorage.setItem(name, value);
    },
    getLocalStorage: function(name) {
        if (localStorage.getItem(name) == null){ 
             return '';
        } else {
            return localStorage.getItem(name)
        }
    },
    eraseLocalStorage: function(name) {
        localStorage.removeItem(name);
    },
    deleteAllLocalStorage: function() {
        localStorage.clear();
    }
};

export default GlobalConstants;
