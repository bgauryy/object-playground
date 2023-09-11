
//Bad 
Object.defineProperty(HTMLInputElement.prototype, 'value', {
    set: function (x, y, z) {
        this.value = x;
    }
}
);

// RangeError: Maximum call stack size exceeded
Object.defineProperty(HTMLInputElement.prototype, 'value', {
    set: function (value) {
        this.value = value;
    }
}
);

(function (){
    let newValue;

    Object.defineProperty(HTMLInputElement.prototype, 'value', {
        set: function (_newValue) {
            newValue = _newValue;
        },
        get: function (value) {
            return value;
        }
    }
    );
})();