//inital code written by Kyrsten Iley‎ 

Number.prototype.ordinal = function(){
    var numStr = this.toString();
    var ord = '';
    switch (numStr.slice(-1)) {
        case '1': ord = numStr.slice(-2) === '11' ? 'th' : 'st'; break;
        case '2': ord = numStr.slice(-2) === '12' ? 'th' : 'nd'; break;
        case '3': ord = numStr.slice(-2) === '13' ? 'th' : 'rd'; break;
        default: ord = 'th'; break;
    }
    return this.toString() + ord;
};

function annoyingMicahFilter(message) {
    var today = new Date();
    var dd = today.getDate().ordinal
    return "MAY THE " + today.getDate().ordinal() + " BE WITH YOU!";
};
console.log(annoyingMicahFilter());
