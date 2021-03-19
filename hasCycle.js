/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let first = head;
    let second = first.next;
    
    while (first && second) {
        if (first == second) { 
            return true;
        } else {
            first = first.next;
            second = second.next.next;
        }
    }
    return false;
};
