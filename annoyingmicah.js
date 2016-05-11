//inital code written by Kyrsten Iley‎ 

Number.prototype.ordinal = function(){
    var numStr = this.toString();
    var ord = '';
    switch (numStr.slice(-1)) {
        case '1': ord = numStr.slice(-2) === '11' ? 'th' : 'st'; break;
        case '2': ord = numStr.slice(-2) === '12' ? 'th' : 'nd'; break;
        case '3': ord = numStr.slice(-2) === '13' ? 'th' : 'rd'; break;
        default: ord = 'th'; break;
<<<<<<< HEAD
    } 
=======
    }
>>>>>>> ef7d629d69134d861742e5beb1b8e40805b96bf2
    return this.toString() + ord;
};

Date.prototype.getMonthName = function() {
    var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return names[this.getMonth()];
};

function annoyingMicahFilter(message) {
    var today = new Date(),
        message = !!message ? message + " " : "";
    return message + today.getMonthName().toUpperCase() + " THE " + today.getDate().ordinal().toUpperCase() + " BE WITH YOU!";
};

console.log(annoyingMicahFilter("Happy birthday!"));
