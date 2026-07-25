class MyHashSet {
    constructor() {
        this.set = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        this.set.push([key])

    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.set = this.set.filter(a => a[0] !== key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
       if(this.set.find((a) => a[0] == key))return true
       else return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
