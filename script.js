import LinkedList from "./linkedList.js";

class HashMap {
    constructor() {
        this.nrOfBuckets = 16;
        this.loadFactor = 0.75;
        this.arr = new Array(this.nrOfBuckets)
        this.nrOfKeys = 0;
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

    set(key, value) { //2
        if (this.nrOfKeys > (this.nrOfBuckets * this.loadFactor)) {
            this.nrOfBuckets *= 2; 
        }
        let currentIndex = this.hash(key);
        let tempObj = {key: key, value:value};
   
        if (this.arr[currentIndex] == undefined) {
            this.arr[currentIndex] = tempObj;  
            this.nrOfKeys += 1;
        } else if (this.arr[currentIndex].key == tempObj.key) {
            this.arr[currentIndex] = tempObj;    
        } else {
            let test = new LinkedList;
            test.append((this.arr[currentIndex].key), (this.arr[currentIndex].value))
            test.append(tempObj.key, tempObj.value)
            this.arr[currentIndex] = test
            this.nrOfKeys += 1;
        }
    }

    get(key) {
        let currentIndex = this.hash(key);
        if (this.arr[currentIndex] === undefined) {
            return null;
        } else if (typeof(this.arr[currentIndex]) == "object" && this.arr[currentIndex].key !== undefined) { 
            if (this.arr[currentIndex].key == key) {
                return this.arr[currentIndex].value;
            }
            return null;
        } else {
            let temporary = this.arr[currentIndex].head;
            while ((temporary !== null)) {
                if (temporary.key == key) {
                    return temporary.value;
                }
                temporary = temporary.next;
            }
            return null;
        }
    }

    has(key) {
        if (this.get(key) == null) {
            return false;
        }
        return true;
    }

    remove(key) {
        if (this.get(key) == null) {
            return false;
        }
        let currentIndex = this.hash(key);

        if (this.arr[currentIndex].key !== undefined) {
            let removed = this.arr.splice(currentIndex, 1);
        } else {
            let listIndex = this.arr[currentIndex].find(key);
            // this.arr[currentIndex].removeAt(listIndex);
            if (this.arr[currentIndex].head === null) {
                let removed = this.arr.splice(currentIndex, 1);
            }
        }
        this.nrOfKeys -= 1;
        return true;
    }
}

let test = new HashMap;

// console.log(test.hash("alex")) // 1
test.set("alex2", 2);
test.set("alexa3", 3);
test.set("alexaz4", 4);
test.set("alexaza5", 5);
test.set("alexaza6", 6);
test.set("alexaza7", 7);
test.set("alexaza8", 8);
console.log(test);
// console.log(test.get("alex2"))
// console.log(test.has("alexaza7")) 

// console.log(test.arr) //undefined [1]
test.remove("alexaza7");
test.remove("alexaz4");
test.remove("alexa3");