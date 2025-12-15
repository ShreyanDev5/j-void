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
            { id: '9', title: 'First Missing Positive', difficulty: 'Hard', url: lc('First Missing Positive') },
        ]
    },
    // 2. [Core] Sorting
    {
        id: 'core_sorting',
        title: 'Sorting Fundamentals',
        questions: [
            { id: '107', title: 'Insertion Sort', difficulty: 'Easy', url: '' },
            { id: '108', title: 'Merge Sort', difficulty: 'Medium', url: '' },
            { id: '109', title: 'Quick Sort', difficulty: 'Medium', url: '' },
        ]
    },
    // 3. Stacks & Monotonic
    {
        id: 'stacks_monotonic',
        title: 'Stacks & Monotonic',
        questions: [
            { id: '29', title: 'Valid Parentheses', difficulty: 'Easy', url: lc('Valid Parentheses') },
            { id: '32', title: 'Next Greater Element I', difficulty: 'Easy', url: lc('Next Greater Element I') },
            { id: '30', title: 'Min Stack', difficulty: 'Medium', url: lc('Min Stack') },
            { id: '31', title: 'Daily Temperatures', difficulty: 'Medium', url: lc('Daily Temperatures') },
            { id: '34', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', url: lc('Evaluate Reverse Polish Notation') },
            { id: '33', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', url: lc('Largest Rectangle in Histogram') },
        ]
    },
    // 4. Two Pointers & Sliding Window
    {
        id: 'two_pointers_sliding_window',
        title: 'Two Pointers & Sliding Window',
        questions: [
            { id: '10', title: 'Valid Palindrome', difficulty: 'Easy', url: lc('Valid Palindrome') },
            { id: '18', title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', url: lc('Best Time to Buy and Sell Stock') },
            { id: '20', title: 'Move Zeroes', difficulty: 'Easy', url: lc('Move Zeroes') },
            { id: '11', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', url: lc('Longest Substring Without Repeating Characters') },
            { id: '12', title: '3Sum', difficulty: 'Medium', url: lc('3Sum') },
            { id: '14', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', url: lc('Longest Repeating Character Replacement') },
            { id: '15', title: 'Two Sum II', difficulty: 'Medium', url: lc('Two Sum II - Input Array Is Sorted') },
            { id: '17', title: 'Container With Most Water', difficulty: 'Medium', url: lc('Container With Most Water') },
            { id: '19', title: 'Sort Colors', difficulty: 'Medium', url: lc('Sort Colors') },
            { id: '13', title: 'Minimum Window Substring', difficulty: 'Hard', url: lc('Minimum Window Substring') },
            { id: '16', title: 'Trapping Rain Water', difficulty: 'Hard', url: lc('Trapping Rain Water') },
            { id: '21', title: 'Sliding Window Maximum', difficulty: 'Hard', url: lc('Sliding Window Maximum') },
        ]
    },
    // 5. Binary Search & Quickselect
    {
        id: 'binary_search_quickselect',
        title: 'Binary Search & Quickselect',
        questions: [
            { id: '35', title: 'Binary Search', difficulty: 'Easy', url: lc('Binary Search') },
            { id: '41', title: 'Search Insert Position', difficulty: 'Easy', url: lc('Search Insert Position') },
            { id: '36', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', url: lc('Search in Rotated Sorted Array') },
            { id: '37', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', url: lc('Find Minimum in Rotated Sorted Array') },
            { id: '39', title: 'Kth Largest Element in an Array', difficulty: 'Medium', url: lc('Kth Largest Element in an Array') },
            { id: '40', title: 'Find Peak Element', difficulty: 'Medium', url: lc('Find Peak Element') },
        ]
    },
    // 6. Linked List
    {
        id: 'linked_list',
        title: 'Linked List',
        questions: [
            { id: '22', title: 'Reverse Linked List', difficulty: 'Easy', url: lc('Reverse Linked List') },
            { id: '23', title: 'Merge Two Sorted Lists', difficulty: 'Easy', url: lc('Merge Two Sorted Lists') },
            { id: '24', title: 'Linked List Cycle', difficulty: 'Easy', url: lc('Linked List Cycle') },
            { id: '27', title: 'Palindrome Linked List', difficulty: 'Easy', url: lc('Palindrome Linked List') },
            { id: '28', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', url: lc('Intersection of Two Linked Lists') },
            { id: '25', title: 'Remove Nth Node From End of List', difficulty: 'Medium', url: lc('Remove Nth Node From End of List') },
            { id: '26', title: 'Add Two Numbers', difficulty: 'Medium', url: lc('Add Two Numbers') },
            { id: '119', title: 'LRU Cache', difficulty: 'Medium', url: lc('LRU Cache') },
        ]
    },
    // 7. Trees
    {
        id: 'trees',
        title: 'Trees',
        questions: [
            { id: '42', title: 'Invert Binary Tree', difficulty: 'Easy', url: lc('Invert Binary Tree') },
            { id: '43', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', url: lc('Maximum Depth of Binary Tree') },
            { id: '49', title: 'Diameter of Binary Tree', difficulty: 'Easy', url: lc('Diameter of Binary Tree') },
            { id: '50', title: 'Same Tree', difficulty: 'Easy', url: lc('Same Tree') },
            { id: '51', title: 'Subtree of Another Tree', difficulty: 'Easy', url: lc('Subtree of Another Tree') },
            { id: '44', title: 'Validate Binary Search Tree', difficulty: 'Medium', url: lc('Validate Binary Search Tree') },
            { id: '45', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', url: lc('Binary Tree Level Order Traversal') },
            { id: '46', title: 'Lowest Common Ancestor of a BST', difficulty: 'Medium', url: lc('Lowest Common Ancestor of a Binary Search Tree') },
            { id: '47', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', url: lc('Kth Smallest Element in a BST') },
            { id: '52', title: 'Path Sum II', difficulty: 'Medium', url: lc('Path Sum II') },
            { id: '53', title: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium', url: lc('Binary Tree Zigzag Level Order Traversal') },
            { id: '48', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', url: lc('Binary Tree Maximum Path Sum') },
            { id: '54', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', url: lc('Serialize and Deserialize Binary Tree') },
        ]
    },
    // 8. Trie
    {
        id: 'trie',
        title: 'Trie',
        questions: [
            { id: '102', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', url: lc('Implement Trie (Prefix Tree)') },
            { id: '103', title: 'Word Search II', difficulty: 'Hard', url: lc('Word Search II') },
        ]
    },
    // 9. Heap / Priority Queue
    {
        id: 'heap_priority_queue',
        title: 'Heap / Priority Queue',
        questions: [
            { id: '84', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', url: lc('Kth Largest Element in a Stream') },
            { id: '87', title: 'Task Scheduler', difficulty: 'Medium', url: lc('Task Scheduler') },
            { id: '88', title: 'K Closest Points to Origin', difficulty: 'Medium', url: lc('K Closest Points to Origin') },
            { id: '85', title: 'Merge k Sorted Lists', difficulty: 'Hard', url: lc('Merge k Sorted Lists') },
            { id: '86', title: 'Find Median from Data Stream', difficulty: 'Hard', url: lc('Find Median from Data Stream') },
        ]
    },
    // 10. Backtracking
    {
        id: 'backtracking',
        title: 'Backtracking',
        questions: [
            { id: '78', title: 'Subsets', difficulty: 'Medium', url: lc('Subsets') },
            { id: '79', title: 'Permutations', difficulty: 'Medium', url: lc('Permutations') },
            { id: '80', title: 'Combination Sum', difficulty: 'Medium', url: lc('Combination Sum') },
            { id: '81', title: 'Combination Sum II', difficulty: 'Medium', url: lc('Combination Sum II') },
            { id: '82', title: 'Generate Parentheses', difficulty: 'Medium', url: lc('Generate Parentheses') },
            { id: '83', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', url: lc('Letter Combinations of a Phone Number') },
        ]
    },
    // 11. [Core] Graph Theory Basics
    {
        id: 'core_graph_basics',
        title: 'Graph Theory Basics',
        questions: [
            { id: '110', title: 'Matrix DFS', difficulty: 'Easy', url: '' },
            { id: '111', title: 'Matrix BFS', difficulty: 'Medium', url: '' },
            { id: '115', title: 'Topological Sort', difficulty: 'Medium', url: '' },
        ]
    },
    // 12. Graphs
    {
        id: 'graphs',
        title: 'Graphs',
        questions: [
            { id: '60', title: 'Flood Fill', difficulty: 'Easy', url: lc('Flood Fill') },
            { id: '55', title: 'Number of Islands', difficulty: 'Medium', url: lc('Number of Islands') },
            { id: '56', title: 'Clone Graph', difficulty: 'Medium', url: lc('Clone Graph') },
            { id: '57', title: 'Course Schedule', difficulty: 'Medium', url: lc('Course Schedule') },
            { id: '58', title: 'Course Schedule II', difficulty: 'Medium', url: lc('Course Schedule II') },
            { id: '59', title: 'Rotting Oranges', difficulty: 'Medium', url: lc('Rotting Oranges') },
            { id: '61', title: 'Number of Connected Components', difficulty: 'Medium', url: 'https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/' },
            { id: '62', title: 'Detect Cycles in Directed & Undirected Graphs', difficulty: 'Medium', url: '' },
            { id: '63', title: 'Word Ladder', difficulty: 'Hard', url: lc('Word Ladder') },
            { id: '64', title: 'Alien Dictionary', difficulty: 'Hard', url: 'https://leetcode.com/problems/alien-dictionary/' },
        ]
    },
    // 13. [Core] Advanced Graph Algos
    {
        id: 'core_advanced_graph',
        title: 'Advanced Graph Algorithms',
        questions: [
            { id: '112', title: "Dijkstra's Algorithm", difficulty: 'Medium', url: '' },
            { id: '113', title: "Prim's Algorithm", difficulty: 'Medium', url: '' },
            { id: '114', title: "Kruskal's Algorithm", difficulty: 'Medium', url: '' },
        ]
    },
    // 14. [Core] DP Fundamentals
    {
        id: 'core_dp_patterns',
        title: 'DP Fundamentals',
        questions: [
            { id: '116', title: '0/1 Knapsack', difficulty: 'Medium', url: '' },
            { id: '117', title: 'Unbounded Knapsack', difficulty: 'Medium', url: '' },
        ]
    },
    // 15. Dynamic Programming — 1D
    {
        id: 'dp_1d',
        title: 'Dynamic Programming — 1D',
        questions: [
            { id: '65', title: 'Climbing Stairs', difficulty: 'Easy', url: lc('Climbing Stairs') },
            { id: '66', title: 'House Robber', difficulty: 'Medium', url: lc('House Robber') },
            { id: '67', title: 'House Robber II', difficulty: 'Medium', url: lc('House Robber II') },
            { id: '68', title: 'Coin Change', difficulty: 'Medium', url: lc('Coin Change') },
            { id: '69', title: 'Longest Increasing Subsequence', difficulty: 'Medium', url: lc('Longest Increasing Subsequence') },
            { id: '70', title: 'Word Break', difficulty: 'Medium', url: lc('Word Break') },
            { id: '71', title: 'Partition Equal Subset Sum', difficulty: 'Medium', url: lc('Partition Equal Subset Sum') },
            { id: '72', title: 'Decode Ways', difficulty: 'Medium', url: lc('Decode Ways') },
            { id: '73', title: 'Longest Palindromic Substring', difficulty: 'Medium', url: lc('Longest Palindromic Substring') },
        ]
    },
    // 16. Dynamic Programming — 2D
    {
        id: 'dp_2d',
        title: 'Dynamic Programming — 2D',
        questions: [
            { id: '74', title: 'Unique Paths', difficulty: 'Medium', url: lc('Unique Paths') },
            { id: '75', title: 'Longest Common Subsequence', difficulty: 'Medium', url: lc('Longest Common Subsequence') },
            { id: '76', title: 'Minimum Path Sum', difficulty: 'Medium', url: lc('Minimum Path Sum') },
            { id: '77', title: 'Edit Distance', difficulty: 'Hard', url: lc('Edit Distance') },
        ]
    },
    // 17. Greedy
    {
        id: 'greedy',
        title: 'Greedy',
        questions: [
            { id: '89', title: 'Maximum Subarray', difficulty: 'Medium', url: lc('Maximum Subarray') },
            { id: '90', title: 'Jump Game', difficulty: 'Medium', url: lc('Jump Game') },
            { id: '91', title: 'Gas Station', difficulty: 'Medium', url: lc('Gas Station') },
        ]
    },
    // 18. Intervals
    {
        id: 'intervals',
        title: 'Intervals',
        questions: [
            { id: '96', title: 'Meeting Rooms', difficulty: 'Easy', url: 'https://leetcode.com/problems/meeting-rooms/' },
            { id: '92', title: 'Merge Intervals', difficulty: 'Medium', url: lc('Merge Intervals') },
            { id: '93', title: 'Insert Interval', difficulty: 'Medium', url: lc('Insert Interval') },
            { id: '94', title: 'Non-overlapping Intervals', difficulty: 'Medium', url: lc('Non-overlapping Intervals') },
            { id: '95', title: 'Meeting Rooms II', difficulty: 'Medium', url: 'https://leetcode.com/problems/meeting-rooms-ii/' },
        ]
    },
    // 19. Bit Manipulation
    {
        id: 'bit_manipulation',
        title: 'Bit Manipulation',
        questions: [
            { id: '97', title: 'Single Number', difficulty: 'Easy', url: lc('Single Number') },
            { id: '98', title: 'Number of 1 Bits', difficulty: 'Easy', url: lc('Number of 1 Bits') },
            { id: '99', title: 'Missing Number', difficulty: 'Easy', url: lc('Missing Number') },

        ]
    },
    // 20. Math & Geometry
    {
        id: 'math_geometry',
        title: 'Math & Geometry',
        questions: [
            { id: '104', title: 'Rotate Image', difficulty: 'Medium', url: lc('Rotate Image') },
            { id: '105', title: 'Spiral Matrix', difficulty: 'Medium', url: lc('Spiral Matrix') },
            { id: '106', title: 'Set Matrix Zeroes', difficulty: 'Medium', url: lc('Set Matrix Zeroes') },
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
