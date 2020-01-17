const utlities = {

    delay: t => new Promise(resolve => setTimeout(resolve, t)),
    
    toTitleCase: (str) => {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    },

    hasProperty: (object, property) => {
        return Object.prototype.hasOwnProperty.call(object, property);
    }

};

export default utlities;