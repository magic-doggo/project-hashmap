class HashMap {
    constructor() {
        
    }
    
    hash(key) { //1
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {

    }
}

let test = new HashMap

console.log(test.hash("alex")) // 1
console.log(test)