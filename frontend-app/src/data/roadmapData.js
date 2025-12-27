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
    // 2. Stacks & Monotonic
    {
        id: 'stacks_monotonic',
        title: 'Stacks & Monotonic',
        questions: [
            { id: '9', title: 'Valid Parentheses', difficulty: 'Easy', url: lc('Valid Parentheses') },
            { id: '10', title: 'Min Stack', difficulty: 'Medium', url: lc('Min Stack') },
            { id: '11', title: 'Daily Temperatures', difficulty: 'Medium', url: lc('Daily Temperatures') },
            { id: '12', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: lc('Evaluate Reverse Polish Notation') },
            { id: '13', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', url: lc('Largest Rectangle in Histogram') },
        ]
    },
    // 3. Two Pointers
    {
        id: 'two_pointers',
        title: 'Two Pointers',
        questions: [
            { id: '14', title: 'Valid Palindrome', difficulty: 'Easy', url: lc('Valid Palindrome') },
            { id: '15', title: '3Sum', difficulty: 'Medium', url: lc('3Sum') },
            { id: '16', title: 'Two Sum II', difficulty: 'Medium', url: lc('Two Sum II - Input Array Is Sorted') },
            { id: '17', title: 'Trapping Rain Water', difficulty: 'Hard', url: lc('Trapping Rain Water') },
            { id: '18', title: 'Container With Most Water', difficulty: 'Medium', url: lc('Container With Most Water') },
            { id: '19', title: 'Sort Colors', difficulty: 'Medium', url: lc('Sort Colors') },
        ]
    },
    // 4. Sliding Window
    {
        id: 'sliding_window',
        title: 'Sliding Window',
        questions: [
            { id: '20', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: lc('Longest Substring Without Repeating Characters') },
            { id: '21', title: 'Minimum Window Substring', difficulty: 'Hard', url: lc('Minimum Window Substring') },
            { id: '22', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', url: lc('Longest Repeating Character Replacement') },
            { id: '23', title: 'Permutation in String', difficulty: 'Medium', url: lc('Permutation in String') },
            { id: '24', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: lc('Best Time to Buy and Sell Stock') },
            { id: '25', title: 'Sliding Window Maximum', difficulty: 'Hard', url: lc('Sliding Window Maximum') },
        ]
    },
    // 5. Binary Search & Quickselect
    {
        id: 'binary_search_quickselect',
        title: 'Binary Search & Quickselect',
        questions: [
            { id: '26', title: 'Binary Search', difficulty: 'Easy', url: lc('Binary Search') },
            { id: '27', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: lc('Search in Rotated Sorted Array') },
            { id: '28', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', url: lc('Find Minimum in Rotated Sorted Array') },
            { id: '29', title: 'Kth Largest Element in an Array', difficulty: 'Medium', url: lc('Kth Largest Element in an Array') },
            { id: '30', title: 'Find Peak Element', difficulty: 'Medium', url: lc('Find Peak Element') },
        ]
    },
    // 6. Linked List
    {
        id: 'linked_list',
        title: 'Linked List',
        questions: [
            { id: '31', title: 'Reverse Linked List', difficulty: 'Easy', url: lc('Reverse Linked List') },
            { id: '32', title: 'Merge Two Sorted Lists', difficulty: 'Easy', url: lc('Merge Two Sorted Lists') },
            { id: '33', title: 'Linked List Cycle', difficulty: 'Easy', url: lc('Linked List Cycle') },
            { id: '34', title: 'Remove Nth Node From End of List', difficulty: 'Medium', url: lc('Remove Nth Node From End of List') },
            { id: '35', title: 'Add Two Numbers', difficulty: 'Medium', url: lc('Add Two Numbers') },
            { id: '36', title: 'Reorder List', difficulty: 'Medium', url: lc('Reorder List') },
        ]
    },
    // 7. Trees
    {
        id: 'trees',
        title: 'Trees',
        questions: [
            { id: '37', title: 'Invert Binary Tree', difficulty: 'Easy', url: lc('Invert Binary Tree') },
            { id: '38', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: lc('Maximum Depth of Binary Tree') },
            { id: '39', title: 'Validate Binary Search Tree', difficulty: 'Medium', url: lc('Validate Binary Search Tree') },
            { id: '40', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: lc('Binary Tree Level Order Traversal') },
            { id: '41', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', url: lc('Construct Binary Tree from Preorder and Inorder Traversal') },
            { id: '42', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', url: lc('Kth Smallest Element in a BST') },
            { id: '43', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', url: lc('Binary Tree Maximum Path Sum') },
            { id: '44', title: 'Lowest Common Ancestor of a Binary Tree', difficulty: 'Medium', url: lc('Lowest Common Ancestor of a Binary Tree') },
        ]
    },
    // 8. Trie
    {
        id: 'trie',
        title: 'Trie',
        questions: [
            { id: '45', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: lc('Implement Trie (Prefix Tree)') },
            { id: '46', title: 'Word Search II', difficulty: 'Hard', url: lc('Word Search II') },
        ]
    },
    // 9. Heap / Priority Queue
    {
        id: 'heap_priority_queue',
        title: 'Heap / Priority Queue',
        questions: [
            { id: '47', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: lc('Kth Largest Element in a Stream') },
            { id: '48', title: 'Merge k Sorted Lists', difficulty: 'Hard', url: lc('Merge k Sorted Lists') },
            { id: '49', title: 'Task Scheduler', difficulty: 'Medium', url: lc('Task Scheduler') },
            { id: '50', title: 'Find Median from Data Stream', difficulty: 'Hard', url: lc('Find Median from Data Stream') },
            { id: '51', title: 'K Closest Points to Origin', difficulty: 'Medium', url: lc('K Closest Points to Origin') },
        ]
    },
    // 10. Backtracking
    {
        id: 'backtracking',
        title: 'Backtracking',
        questions: [
            { id: '52', title: 'Subsets', difficulty: 'Medium', url: lc('Subsets') },
            { id: '53', title: 'Permutations', difficulty: 'Medium', url: lc('Permutations') },
            { id: '54', title: 'Combination Sum', difficulty: 'Medium', url: lc('Combination Sum') },
            { id: '55', title: 'Word Search', difficulty: 'Medium', url: lc('Word Search') },
            { id: '56', title: 'Generate Parentheses', difficulty: 'Medium', url: lc('Generate Parentheses') },
            { id: '57', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', url: lc('Letter Combinations of a Phone Number') },
        ]
    },
    // 11. Graphs
    {
        id: 'graphs',
        title: 'Graphs',
        questions: [
            { id: '58', title: 'Number of Islands', difficulty: 'Medium', url: lc('Number of Islands') },
            { id: '59', title: 'Clone Graph', difficulty: 'Medium', url: lc('Clone Graph') },
            { id: '60', title: 'Course Schedule', difficulty: 'Medium', url: lc('Course Schedule') },
            { id: '61', title: 'Course Schedule II', difficulty: 'Medium', url: lc('Course Schedule II') },
            { id: '62', title: 'Rotting Oranges', difficulty: 'Medium', url: lc('Rotting Oranges') },
            { id: '63', title: 'Flood Fill', difficulty: 'Easy', url: lc('Flood Fill') },
            { id: '64', title: 'Word Ladder', difficulty: 'Hard', url: lc('Word Ladder') },
            { id: '65', title: 'Redundant Connection', difficulty: 'Medium', url: lc('Redundant Connection') },
            { id: '66', title: 'Evaluate Division', difficulty: 'Medium', url: lc('Evaluate Division') },
            { id: '67', title: 'Network Delay Time', difficulty: 'Medium', url: lc('Network Delay Time') },
            { id: '68', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', url: lc('Pacific Atlantic Water Flow') },
        ]
    },
    // 12. Dynamic Programming — 1D
    {
        id: 'dp_1d',
        title: 'Dynamic Programming — 1D',
        questions: [
            { id: '69', title: 'Climbing Stairs', difficulty: 'Easy', url: lc('Climbing Stairs') },
            { id: '70', title: 'House Robber', difficulty: 'Medium', url: lc('House Robber') },
            { id: '71', title: 'Coin Change', difficulty: 'Medium', url: lc('Coin Change') },
            { id: '72', title: 'Longest Increasing Subsequence', difficulty: 'Medium', url: lc('Longest Increasing Subsequence') },
            { id: '73', title: 'Word Break', difficulty: 'Medium', url: lc('Word Break') },
            { id: '74', title: 'Partition Equal Subset Sum', difficulty: 'Medium', url: lc('Partition Equal Subset Sum') },
            { id: '75', title: 'Decode Ways', difficulty: 'Medium', url: lc('Decode Ways') },
            { id: '76', title: 'Longest Palindromic Substring', difficulty: 'Medium', url: lc('Longest Palindromic Substring') },
            { id: '77', title: 'Maximum Product Subarray', difficulty: 'Medium', url: lc('Maximum Product Subarray') },
        ]
    },
    // 13. Dynamic Programming — 2D
    {
        id: 'dp_2d',
        title: 'Dynamic Programming — 2D',
        questions: [
            { id: '78', title: 'Unique Paths', difficulty: 'Medium', url: lc('Unique Paths') },
            { id: '79', title: 'Longest Common Subsequence', difficulty: 'Medium', url: lc('Longest Common Subsequence') },
            { id: '80', title: 'Edit Distance', difficulty: 'Medium', url: lc('Edit Distance') },
            { id: '81', title: 'Regular Expression Matching', difficulty: 'Hard', url: lc('Regular Expression Matching') },
            { id: '82', title: 'Interleaving String', difficulty: 'Medium', url: lc('Interleaving String') },
        ]
    },
    // 14. Greedy
    {
        id: 'greedy',
        title: 'Greedy',
        questions: [
            { id: '83', title: 'Maximum Subarray', difficulty: 'Medium', url: lc('Maximum Subarray') },
            { id: '84', title: 'Jump Game', difficulty: 'Medium', url: lc('Jump Game') },
            { id: '85', title: 'Gas Station', difficulty: 'Medium', url: lc('Gas Station') },
        ]
    },
    // 15. Intervals
    {
        id: 'intervals',
        title: 'Intervals',
        questions: [
            { id: '86', title: 'Merge Intervals', difficulty: 'Medium', url: lc('Merge Intervals') },
            { id: '87', title: 'Insert Interval', difficulty: 'Medium', url: lc('Insert Interval') },
            { id: '88', title: 'Non-overlapping Intervals', difficulty: 'Medium', url: lc('Non-overlapping Intervals') },
        ]
    },
    // 16. Bit Manipulation
    {
        id: 'bit_manipulation',
        title: 'Bit Manipulation',
        questions: [
            { id: '89', title: 'Single Number', difficulty: 'Easy', url: lc('Single Number') },
            { id: '90', title: 'Number of 1 Bits', difficulty: 'Easy', url: lc('Number of 1 Bits') },
            { id: '91', title: 'Missing Number', difficulty: 'Easy', url: lc('Missing Number') },
            { id: '92', title: 'Counting Bits', difficulty: 'Easy', url: lc('Counting Bits') },
        ]
    },
    // 17. Math & Geometry
    {
        id: 'math_geometry',
        title: 'Math & Geometry',
        questions: [
            { id: '93', title: 'Rotate Image', difficulty: 'Medium', url: lc('Rotate Image') },
            { id: '94', title: 'Spiral Matrix', difficulty: 'Medium', url: lc('Spiral Matrix') },
            { id: '95', title: 'Set Matrix Zeroes', difficulty: 'Medium', url: lc('Set Matrix Zeroes') },
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
