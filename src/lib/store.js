class Store {

    units = {};
    getUnitId = (unit) => {
        if (typeof this.units[unit] === 'undefined') {
            this.units[unit] = 2;
            return unit;
        } else {
            ++this.units[unit];
            return `${unit}${this.units[unit]}`
        }
    }

};
export default new Store();
