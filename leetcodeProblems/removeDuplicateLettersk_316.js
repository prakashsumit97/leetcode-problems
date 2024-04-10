// /**
//  * @param {string} s
//  * @return {string}
//  */
// const removeDuplicateLetters = (s) => {
//     const stack = [];
//     const seen = new Set();

//     for (let i = 0; i < s.length; i++) {
//         const char = s[i];

//         if (!seen.has(char)) {
//             while (
//                 stack.length > 0 &&
//                 stack[stack.length - 1] > char &&
//                 s.indexOf(stack[stack.length - 1], i) > i
//             ) {
//                 seen.delete(stack.pop());
//             }

//             seen.add(char);
//             stack.push(char);
//         }
//     }

//     return stack.join('');
// };

// console.log(removeDuplicateLetters("cbacdcbc"))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let currNode = head;
    let prevNode = head;
    let count = 1;
    while (currNode?.next) {
        console.log(currNode);
        if (count % 2 == 0) {
            let currExiNode = currNode;
            let lastEvenNode = currExiNode;
            let oddNode = currExiNode.next;
            let oddNextNodes = oddNode.next;

            /**
            now we need to take the oddNode and make next item to currNode
             */
            oddNode.next = currNode;
            /**
            Now prev node should ponint to odd next nodes */
            lastEvenNode.next = oddNextNodes;

            /**
            last prevNode points to curr node */
            prevNode.next = oddNode;
            prevNode = prevNode.next;
            if (!oddNextNodes) {
                return head;
            }
            console.log(head, lastEvenNode, oddNode, oddNextNodes);
        }
    }

    return head;
};