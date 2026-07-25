class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map  = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.map.has(key)){
            let val  = this.map.get(key)
            this.map.delete(key)
            this.map.set(key , val)
            return this.map.get(key)
        }else return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key)
            this.map.set(key ,value)
        }else{
            this.map.set(key , value)
        }
       
       if(this.map.size > this.capacity){
        let lru = this.map.keys().next().value
        this.map.delete(lru)
       }
    }
}
