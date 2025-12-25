// Helper to generate LeetCode URL
const lc = (name) => `https://leetcode.com/problems/${name.toLowerCase().replace(/ /g, '-').replace(/[()]/g, '')}/`;

export const roadmapData = [
    // 1. Arrays & Hashing
    {
        id: 'arrays_hashing',
        title: 'Arrays & Hashing',
        questions: [
            { id: '1', title: 'Two Sum', difficulty: 'Easy', url: lc('Two Sum') },
            { id: '2', title: 'Contains Duplicate', difficulty: 'Easy', url: lc('Contains Duplicate') },
            { id: '3', title: 'Valid Anagram', difficulty: 'Easy', url: lc('Valid Anagram') },
            { id: '4', title: 'Group Anagrams', difficulty: 'Medium', url: lc('Group Anagrams') },
            { id: '5', title: 'Top K Frequent Elements', difficulty: 'Medium', url: lc('Top K Frequent Elements') },
            { id: '6', title: 'Longest Consecutive Sequence', difficulty: 'Medium', url: lc('Longest Consecutive Sequence') },
            { id: '7', title: 'Product of Array Except Self', difficulty: 'Medium', url: lc('Product of Array Except Self') },
            { id: '8', title: 'First Missing Positive', difficulty: 'Hard', url: lc('First Missing Positive') },
        ]
    },
    // 2. Two Pointers
    {
        id: 'two_pointers',
        title: 'Two Pointers',
        questions: [
            { id: '9', title: 'Valid Palindrome', difficulty: 'Easy', url: lc('Valid Palindrome') },
            { id: '10', title: '3Sum', difficulty: 'Medium', url: lc('3Sum') },
            { id: '11', title: 'Two Sum II', difficulty: 'Medium', url: lc('Two Sum II - Input Array Is Sorted') },
            { id: '12', title: 'Trapping Rain Water', difficulty: 'Hard', url: lc('Trapping Rain Water') },
            { id: '13', title: 'Container With Most Water', difficulty: 'Medium', url: lc('Container With Most Water') },
            { id: '14', title: 'Sort Colors', difficulty: 'Medium', url: lc('Sort Colors') },
            { id: '15', title: 'Move Zeroes', difficulty: 'Easy', url: lc('Move Zeroes') },
        ]
    },
    // 3. Sliding Window
    {
        id: 'sliding_window',
        title: 'Sliding Window',
        questions: [
            { id: '16', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: lc('Longest Substring Without Repeating Characters') },
            { id: '17', title: 'Minimum Window Substring', difficulty: 'Hard', url: lc('Minimum Window Substring') },
            { id: '18', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', url: lc('Longest Repeating Character Replacement') },
            { id: '19', title: 'Permutation in String', difficulty: 'Medium', url: lc('Permutation in String') },
            { id: '20', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: lc('Best Time to Buy and Sell Stock') },
            { id: '21', title: 'Sliding Window Maximum', difficulty: 'Hard', url: lc('Sliding Window Maximum') },
        ]
    },
    // 4. Stacks & Monotonic
    {
        id: 'stacks_monotonic',
        title: 'Stacks & Monotonic',
        questions: [
            { id: '22', title: 'Valid Parentheses', difficulty: 'Easy', url: lc('Valid Parentheses') },
            { id: '23', title: 'Min Stack', difficulty: 'Medium', url: lc('Min Stack') },
            { id: '24', title: 'Daily Temperatures', difficulty: 'Medium', url: lc('Daily Temperatures') },
            { id: '25', title: 'Next Greater Element I', difficulty: 'Easy', url: lc('Next Greater Element I') },
            { id: '26', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: lc('Evaluate Reverse Polish Notation') },
        ]
    },
    // 5. Binary Search & Quickselect
    {
        id: 'binary_search_quickselect',
        title: 'Binary Search & Quickselect',
        questions: [
            { id: '27', title: 'Binary Search', difficulty: 'Easy', url: lc('Binary Search') },
            { id: '28', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: lc('Search in Rotated Sorted Array') },
            { id: '29', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', url: lc('Find Minimum in Rotated Sorted Array') },
            { id: '30', title: 'Kth Largest Element in an Array', difficulty: 'Medium', url: lc('Kth Largest Element in an Array') },
            { id: '31', title: 'Find Smallest Letter Greater Than Target', difficulty: 'Easy', url: lc('Find Smallest Letter Greater Than Target') },
            { id: '32', title: 'Find Peak Element', difficulty: 'Medium', url: lc('Find Peak Element') },
        ]
    },
    // 6. Linked List
    {
        id: 'linked_list',
        title: 'Linked List',
        questions: [
            { id: '33', title: 'Reverse Linked List', difficulty: 'Easy', url: lc('Reverse Linked List') },
            { id: '34', title: 'Merge Two Sorted Lists', difficulty: 'Easy', url: lc('Merge Two Sorted Lists') },
            { id: '35', title: 'Linked List Cycle', difficulty: 'Easy', url: lc('Linked List Cycle') },
            { id: '36', title: 'Remove Nth Node From End of List', difficulty: 'Medium', url: lc('Remove Nth Node From End of List') },
            { id: '37', title: 'Add Two Numbers', difficulty: 'Medium', url: lc('Add Two Numbers') },
            { id: '38', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', url: lc('Intersection of Two Linked Lists') },
            { id: '39', title: 'Reorder List', difficulty: 'Medium', url: lc('Reorder List') },
        ]
    },
    // 7. Trees
    {
        id: 'trees',
        title: 'Trees',
        questions: [
            { id: '40', title: 'Invert Binary Tree', difficulty: 'Easy', url: lc('Invert Binary Tree') },
            { id: '41', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: lc('Maximum Depth of Binary Tree') },
            { id: '42', title: 'Validate Binary Search Tree', difficulty: 'Medium', url: lc('Validate Binary Search Tree') },
            { id: '43', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: lc('Binary Tree Level Order Traversal') },
            { id: '44', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', url: lc('Construct Binary Tree from Preorder and Inorder Traversal') },
            { id: '45', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', url: lc('Lowest Common Ancestor of a Binary Search Tree') },
            { id: '46', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', url: lc('Kth Smallest Element in a BST') },
            { id: '47', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', url: lc('Binary Tree Maximum Path Sum') },
            { id: '48', title: 'Diameter of Binary Tree', difficulty: 'Easy', url: lc('Diameter of Binary Tree') },
            { id: '49', title: 'Same Tree', difficulty: 'Easy', url: lc('Same Tree') },
            { id: '50', title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', url: lc('Lowest Common Ancestor of a Binary Tree') },
        ]
    },
    // 8. Trie
    {
        id: 'trie',
        title: 'Trie',
        questions: [
            { id: '51', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: lc('Implement Trie (Prefix Tree)') },
            { id: '52', title: 'Word Search II', difficulty: 'Hard', url: lc('Word Search II') },
        ]
    },
    // 9. Heap / Priority Queue
    {
        id: 'heap_priority_queue',
        title: 'Heap / Priority Queue',
        questions: [
            { id: '53', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: lc('Kth Largest Element in a Stream') },
            { id: '54', title: 'Merge k Sorted Lists', difficulty: 'Hard', url: lc('Merge k Sorted Lists') },
            { id: '55', title: 'Task Scheduler', difficulty: 'Medium', url: lc('Task Scheduler') },
            { id: '56', title: 'Find Median from Data Stream', difficulty: 'Hard', url: lc('Find Median from Data Stream') },
            { id: '57', title: 'K Closest Points to Origin', difficulty: 'Medium', url: lc('K Closest Points to Origin') },
            { id: '58', title: 'Find K Closest Elements', difficulty: 'Medium', url: lc('Find K Closest Elements') },
        ]
    },
    // 10. Backtracking
    {
        id: 'backtracking',
        title: 'Backtracking',
        questions: [
            { id: '59', title: 'Subsets', difficulty: 'Medium', url: lc('Subsets') },
            { id: '60', title: 'Permutations', difficulty: 'Medium', url: lc('Permutations') },
            { id: '61', title: 'Combination Sum', difficulty: 'Medium', url: lc('Combination Sum') },
            { id: '62', title: 'Word Search', difficulty: 'Medium', url: lc('Word Search') },
            { id: '63', title: 'Generate Parentheses', difficulty: 'Medium', url: lc('Generate Parentheses') },
            { id: '64', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', url: lc('Letter Combinations of a Phone Number') },
        ]
    },
    // 11. Graphs
    {
        id: 'graphs',
        title: 'Graphs',
        questions: [
            { id: '65', title: 'Number of Islands', difficulty: 'Medium', url: lc('Number of Islands') },
            { id: '66', title: 'Clone Graph', difficulty: 'Medium', url: lc('Clone Graph') },
            { id: '67', title: 'Course Schedule', difficulty: 'Medium', url: lc('Course Schedule') },
            { id: '68', title: 'Course Schedule II', difficulty: 'Medium', url: lc('Course Schedule II') },
            { id: '69', title: 'Rotting Oranges', difficulty: 'Medium', url: lc('Rotting Oranges') },
            { id: '70', title: 'Flood Fill', difficulty: 'Easy', url: lc('Flood Fill') },
            { id: '71', title: 'Word Ladder', difficulty: 'Hard', url: lc('Word Ladder') },
        ]
    },
    // 12. Dynamic Programming — 1D
    {
        id: 'dp_1d',
        title: 'Dynamic Programming — 1D',
        questions: [
            { id: '72', title: 'Climbing Stairs', difficulty: 'Easy', url: lc('Climbing Stairs') },
            { id: '73', title: 'House Robber', difficulty: 'Medium', url: lc('House Robber') },
            { id: '74', title: 'Coin Change', difficulty: 'Medium', url: lc('Coin Change') },
            { id: '75', title: 'Longest Increasing Subsequence', difficulty: 'Medium', url: lc('Longest Increasing Subsequence') },
            { id: '76', title: 'Word Break', difficulty: 'Medium', url: lc('Word Break') },
            { id: '77', title: 'Partition Equal Subset Sum', difficulty: 'Medium', url: lc('Partition Equal Subset Sum') },
            { id: '78', title: 'Decode Ways', difficulty: 'Medium', url: lc('Decode Ways') },
            { id: '79', title: 'Longest Palindromic Substring', difficulty: 'Medium', url: lc('Longest Palindromic Substring') },
            { id: '80', title: 'Maximum Product Subarray', difficulty: 'Medium', url: lc('Maximum Product Subarray') },
            { id: '81', title: 'Palindromic Substrings', difficulty: 'Medium', url: lc('Palindromic Substrings') },
        ]
    },
    // 13. Dynamic Programming — 2D
    {
        id: 'dp_2d',
        title: 'Dynamic Programming — 2D',
        questions: [
            { id: '82', title: 'Unique Paths', difficulty: 'Medium', url: lc('Unique Paths') },
            { id: '83', title: 'Longest Common Subsequence', difficulty: 'Medium', url: lc('Longest Common Subsequence') },
        ]
    },
    // 14. Greedy
    {
        id: 'greedy',
        title: 'Greedy',
        questions: [
            { id: '84', title: 'Maximum Subarray', difficulty: 'Medium', url: lc('Maximum Subarray') },
            { id: '85', title: 'Jump Game', difficulty: 'Medium', url: lc('Jump Game') },
            { id: '86', title: 'Gas Station', difficulty: 'Medium', url: lc('Gas Station') },
        ]
    },
    // 15. Intervals
    {
        id: 'intervals',
        title: 'Intervals',
        questions: [
            { id: '87', title: 'Merge Intervals', difficulty: 'Medium', url: lc('Merge Intervals') },
            { id: '88', title: 'Insert Interval', difficulty: 'Medium', url: lc('Insert Interval') },
            { id: '89', title: 'Non-overlapping Intervals', difficulty: 'Medium', url: lc('Non-overlapping Intervals') },
        ]
    },
    // 16. Bit Manipulation
    {
        id: 'bit_manipulation',
        title: 'Bit Manipulation',
        questions: [
            { id: '90', title: 'Single Number', difficulty: 'Easy', url: lc('Single Number') },
            { id: '91', title: 'Number of 1 Bits', difficulty: 'Easy', url: lc('Number of 1 Bits') },
            { id: '92', title: 'Missing Number', difficulty: 'Easy', url: lc('Missing Number') },
            { id: '93', title: 'Counting Bits', difficulty: 'Easy', url: lc('Counting Bits') },
        ]
    },
    // 17. Math & Geometry
    {
        id: 'math_geometry',
        title: 'Math & Geometry',
        questions: [
            { id: '94', title: 'Rotate Image', difficulty: 'Medium', url: lc('Rotate Image') },
            { id: '95', title: 'Spiral Matrix', difficulty: 'Medium', url: lc('Spiral Matrix') },
            { id: '96', title: 'Set Matrix Zeroes', difficulty: 'Medium', url: lc('Set Matrix Zeroes') },
        ]
    },

];

// Get all questions as a flat array
export const getAllQuestions = () => {
    return roadmapData.flatMap(category =>
        category.questions.map(q => ({
            ...q,
            category: category.title,
            categoryId: category.id
        }))
    );
};

// Get question by id
export const getQuestionById = (id) => {
    for (const category of roadmapData) {
        const question = category.questions.find(q => q.id === id);
        if (question) {
            return { ...question, category: category.title, categoryId: category.id };
        }
    }
    return null;
};
