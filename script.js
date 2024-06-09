class HashMap {
    constructor() {
        this.nrOfBuckets = 16;
        this.loadFactor = 0.75;
        this.arr = new Array(this.nrOfBuckets)
    }
    
    hash(key) { //1
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.nrOfBuckets;
        }

        return hashCode;
    }

    set(key, value) {
        let currentIndex = this.hash(key);
        let tempObj = {key: key, value:value};
   
        if (this.arr[currentIndex] == undefined || this.arr[currentIndex].key == tempObj.key) {
            this.arr[currentIndex] = tempObj;    
        } else {
            //make it a linekd list
        }
    }
}

let test = new HashMap;

// console.log(test.hash("alex")) // 1
test.set("alex", 2);
test.set("alexa", 4);
console.log(test);