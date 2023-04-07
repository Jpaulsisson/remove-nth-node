// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

// Example 2:
// Input: head = [1], n = 1
// Output: []

// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]




////// solution ///////    <----normally this would say "first attempt" but working on linked lists
function removeNode(head, n) {  //and binary trees is too much work to set up for every challenge 
    let fast = head;            //so I'm working them out on leetcode and then pasting the final solution
    let slow = head;
    for (let i = 0; i < n; i++) {////this is creating a "head start" for the search by 
        fast = fast.next;        ////fast forwarding "fast" to the node at "n"
    }
    if (!fast) {
        return head.next;       ////edge case failsafe
    }
    while (fast.next) {         ////while fast.next exists, move both forward
        fast = fast.next;       ////when it finally doesn't, remove the node
        slow = slow.next;       ////slow.next by making it slow.next.next
    }
    slow.next = slow.next.next;
    return head;
};
