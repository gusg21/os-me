var MyLib = {
    vars: {
        var1: 'value1',
        var2: 'value2'
    },
    func1: function () {
        return this.vars.var1;
    },
    func2: function () {
        alert("This is func2");
    }
};
