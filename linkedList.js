export class Node {
    constructor(key = null, value=null, next=null) {
        this.key = key;
        this.value = value; 
        this.next = next;
    }    
}


export default class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(key, value) { //2
        this.head = new Node(key, value, this.head) // is this fine or should I store the value of head in another variable and use that?
        this.length += 1;
        return this.head;
    }

    head() { //4
        if (this.head == null) return ("head is null");
        // console.log("head not null")
        return this.head.value;        
    }

    append(key, value) { //1
        if (this.head == null) {
            this.prepend(key, value)
        } else {
            let temporary = this.head;
            while (temporary.next != null) {
                temporary = temporary.next;
            }
            temporary.next = new Node(key, value);
            this.length += 1;
        }

    }
    
    size() { //3
        return this.length
    }

    tail() { //5
        if (this.head == null ) return ("head is null");
        let temporary = this.head
        while (temporary.next!= null) {
            temporary = temporary.next;
        }
        return temporary;
    }

    at(index) { //6
        if (index < 0 || index > this.length) { //index start at 0 or 1?
            return ("inexistent index")
        } 
        let temporary = this.head;
        for (let i = 0; i < index; i++) {
            temporary = temporary.next;
        }
        return temporary;
    }

    pop() { //7
        if (this.head == null) return ("head is null");
        if (this.head.next == null) {
            this.length -= 1;
            return this.head = null;
        }
        let temporary = this.head;
        while (temporary.next.next != null) {
            temporary=temporary.next;
        }
        temporary.next = null;
        this.length -= 1;
    }

    contains(key) { //8 //modified to use key instead of value
        if (this.head == null) return ("head is null");
        let temporary = this.head;
        while (temporary != null && temporary.key != key) {
            temporary = temporary.next;
        }
        if (temporary == null) return false;
        else return true;
    }

    find(key) { //9
        if (this.head == null) return ("head is null");
        let temporary = this.head;
        let index = 0;
        while (temporary != null && temporary.key != key) {
            temporary = temporary.next;
            index += 1;
        }    
        if (temporary == null) return null;
        return index;
    }

    // toString() { //10 no need?
    //     if (this.head == null) return ("head is null");
    //     let temporary = this.head;
    //     let listAsString = "";
    //     while (temporary != null) {
    //         listAsString += ((temporary.value) + " -> ");
    //         temporary = temporary.next;
    //     }
    //     listAsString += null;
    //     return listAsString;
    // }

    insertAt(key, value, index) { //11
        if (this.head == null) return ("head is null");
        if (index < 0 || index > this.length) { 
            return ("inexistent index")
        } 
        if (index == 0) return this.prepend(key, value);


        let temporary = this.head;
        for (let i = 1; i < index; i++) { //start at 1 so we stop 1 before index
            temporary = temporary.next;
        }
        temporary.next = new Node(key, value, temporary.next);
        this.length += 1;
    }

    removeAt(index) { //12
        console.log(this.length)
        if (this.head == null) return ("head is null");
        if (index < 0 || index > this.length-1) {
            return ("inexistent index");
        } 

        if (index == (this.length -1)) {
            this.pop();
        } else {
            let temporary = this.head;
            for (let i = 1; i < index; i++) {
                temporary = temporary.next;
            }
            temporary.next = temporary.next.next;
            this.length -= 1;
        }
    }
}