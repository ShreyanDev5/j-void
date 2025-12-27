/**
 * Java Boilerplate Generator
 * Generates Allman-style Java method signatures based on problem titles
 */

// Problem-specific signature mappings (LeetCode standard signatures)
const signatureMap = {
    // 1. Arrays & Hashing
    'Two Sum': { returnType: 'int[]', methodName: 'twoSum', params: 'int[] nums, int target' },
    'Contains Duplicate': { returnType: 'boolean', methodName: 'containsDuplicate', params: 'int[] nums' },
    'Valid Anagram': { returnType: 'boolean', methodName: 'isAnagram', params: 'String s, String t' },
    'Group Anagrams': { returnType: 'List<List<String>>', methodName: 'groupAnagrams', params: 'String[] strs' },
    'Top K Frequent Elements': { returnType: 'int[]', methodName: 'topKFrequent', params: 'int[] nums, int k' },
    'Longest Consecutive Sequence': { returnType: 'int', methodName: 'longestConsecutive', params: 'int[] nums' },
    'Product of Array Except Self': { returnType: 'int[]', methodName: 'productExceptSelf', params: 'int[] nums' },
    'First Missing Positive': { returnType: 'int', methodName: 'firstMissingPositive', params: 'int[] nums' },

    // 2. Stacks & Monotonic
    'Valid Parentheses': { returnType: 'boolean', methodName: 'isValid', params: 'String s' },
    'Min Stack': { returnType: 'void', methodName: 'MinStack', params: '', isClass: true },
    'Daily Temperatures': { returnType: 'int[]', methodName: 'dailyTemperatures', params: 'int[] temperatures' },
    'Evaluate Reverse Polish Notation': { returnType: 'int', methodName: 'evalRPN', params: 'String[] tokens' },
    'Largest Rectangle in Histogram': { returnType: 'int', methodName: 'largestRectangleArea', params: 'int[] heights' },

    // 3. Two Pointers
    'Valid Palindrome': { returnType: 'boolean', methodName: 'isPalindrome', params: 'String s' },
    '3Sum': { returnType: 'List<List<Integer>>', methodName: 'threeSum', params: 'int[] nums' },
    'Two Sum II': { returnType: 'int[]', methodName: 'twoSum', params: 'int[] numbers, int target' },
    'Trapping Rain Water': { returnType: 'int', methodName: 'trap', params: 'int[] height' },
    'Container With Most Water': { returnType: 'int', methodName: 'maxArea', params: 'int[] height' },
    'Sort Colors': { returnType: 'void', methodName: 'sortColors', params: 'int[] nums' },

    // 4. Sliding Window
    'Longest Substring Without Repeating Characters': { returnType: 'int', methodName: 'lengthOfLongestSubstring', params: 'String s' },
    'Minimum Window Substring': { returnType: 'String', methodName: 'minWindow', params: 'String s, String t' },
    'Longest Repeating Character Replacement': { returnType: 'int', methodName: 'characterReplacement', params: 'String s, int k' },
    'Permutation in String': { returnType: 'boolean', methodName: 'checkInclusion', params: 'String s1, String s2' },
    'Best Time to Buy and Sell Stock': { returnType: 'int', methodName: 'maxProfit', params: 'int[] prices' },
    'Sliding Window Maximum': { returnType: 'int[]', methodName: 'maxSlidingWindow', params: 'int[] nums, int k' },

    // 5. Binary Search & Quickselect
    'Binary Search': { returnType: 'int', methodName: 'search', params: 'int[] nums, int target' },
    'Search in Rotated Sorted Array': { returnType: 'int', methodName: 'search', params: 'int[] nums, int target' },
    'Find Minimum in Rotated Sorted Array': { returnType: 'int', methodName: 'findMin', params: 'int[] nums' },
    'Kth Largest Element in an Array': { returnType: 'int', methodName: 'findKthLargest', params: 'int[] nums, int k' },
    'Find Peak Element': { returnType: 'int', methodName: 'findPeakElement', params: 'int[] nums' },

    // 6. Linked List
    'Reverse Linked List': { returnType: 'ListNode', methodName: 'reverseList', params: 'ListNode head', needsListNode: true },
    'Merge Two Sorted Lists': { returnType: 'ListNode', methodName: 'mergeTwoLists', params: 'ListNode list1, ListNode list2', needsListNode: true },
    'Linked List Cycle': { returnType: 'boolean', methodName: 'hasCycle', params: 'ListNode head', needsListNode: true },
    'Remove Nth Node From End of List': { returnType: 'ListNode', methodName: 'removeNthFromEnd', params: 'ListNode head, int n', needsListNode: true },
    'Add Two Numbers': { returnType: 'ListNode', methodName: 'addTwoNumbers', params: 'ListNode l1, ListNode l2', needsListNode: true },
    'Reorder List': { returnType: 'void', methodName: 'reorderList', params: 'ListNode head', needsListNode: true },

    // 7. Trees
    'Invert Binary Tree': { returnType: 'TreeNode', methodName: 'invertTree', params: 'TreeNode root', needsTreeNode: true },
    'Maximum Depth of Binary Tree': { returnType: 'int', methodName: 'maxDepth', params: 'TreeNode root', needsTreeNode: true },
    'Validate Binary Search Tree': { returnType: 'boolean', methodName: 'isValidBST', params: 'TreeNode root', needsTreeNode: true },
    'Binary Tree Level Order Traversal': { returnType: 'List<List<Integer>>', methodName: 'levelOrder', params: 'TreeNode root', needsTreeNode: true },
    'Construct Binary Tree from Preorder and Inorder Traversal': { returnType: 'TreeNode', methodName: 'buildTree', params: 'int[] preorder, int[] inorder', needsTreeNode: true },
    'Kth Smallest Element in a BST': { returnType: 'int', methodName: 'kthSmallest', params: 'TreeNode root, int k', needsTreeNode: true },
    'Binary Tree Maximum Path Sum': { returnType: 'int', methodName: 'maxPathSum', params: 'TreeNode root', needsTreeNode: true },
    'Lowest Common Ancestor of a Binary Tree': { returnType: 'TreeNode', methodName: 'lowestCommonAncestor', params: 'TreeNode root, TreeNode p, TreeNode q', needsTreeNode: true },

    // 8. Trie
    'Implement Trie (Prefix Tree)': { returnType: 'void', methodName: 'Trie', params: '', isClass: true },
    'Word Search II': { returnType: 'List<String>', methodName: 'findWords', params: 'char[][] board, String[] words' },

    // 9. Heap / Priority Queue
    'Kth Largest Element in a Stream': { returnType: 'int', methodName: 'add', params: 'int val', isClass: true },
    'Merge k Sorted Lists': { returnType: 'ListNode', methodName: 'mergeKLists', params: 'ListNode[] lists', needsListNode: true },
    'Task Scheduler': { returnType: 'int', methodName: 'leastInterval', params: 'char[] tasks, int n' },
    'Find Median from Data Stream': { returnType: 'void', methodName: 'MedianFinder', params: '', isClass: true },
    'K Closest Points to Origin': { returnType: 'int[][]', methodName: 'kClosest', params: 'int[][] points, int k' },

    // 10. Backtracking
    'Subsets': { returnType: 'List<List<Integer>>', methodName: 'subsets', params: 'int[] nums' },
    'Permutations': { returnType: 'List<List<Integer>>', methodName: 'permute', params: 'int[] nums' },
    'Combination Sum': { returnType: 'List<List<Integer>>', methodName: 'combinationSum', params: 'int[] candidates, int target' },
    'Word Search': { returnType: 'boolean', methodName: 'exist', params: 'char[][] board, String word' },
    'Generate Parentheses': { returnType: 'List<String>', methodName: 'generateParenthesis', params: 'int n' },
    'Letter Combinations of a Phone Number': { returnType: 'List<String>', methodName: 'letterCombinations', params: 'String digits' },

    // 11. Graphs
    'Number of Islands': { returnType: 'int', methodName: 'numIslands', params: 'char[][] grid' },
    'Clone Graph': { returnType: 'Node', methodName: 'cloneGraph', params: 'Node node', needsGraphNode: true },
    'Course Schedule': { returnType: 'boolean', methodName: 'canFinish', params: 'int numCourses, int[][] prerequisites' },
    'Course Schedule II': { returnType: 'int[]', methodName: 'findOrder', params: 'int numCourses, int[][] prerequisites' },
    'Rotting Oranges': { returnType: 'int', methodName: 'orangesRotting', params: 'int[][] grid' },
    'Flood Fill': { returnType: 'int[][]', methodName: 'floodFill', params: 'int[][] image, int sr, int sc, int color' },
    'Word Ladder': { returnType: 'int', methodName: 'ladderLength', params: 'String beginWord, String endWord, List<String> wordList' },
    'Redundant Connection': { returnType: 'int[]', methodName: 'findRedundantConnection', params: 'int[][] edges' },
    'Evaluate Division': { returnType: 'double[]', methodName: 'calcEquation', params: 'List<List<String>> equations, double[] values, List<List<String>> queries' },
    'Network Delay Time': { returnType: 'int', methodName: 'networkDelayTime', params: 'int[][] times, int n, int k' },
    'Pacific Atlantic Water Flow': { returnType: 'List<List<Integer>>', methodName: 'pacificAtlantic', params: 'int[][] heights' },

    // 12. Dynamic Programming — 1D
    'Climbing Stairs': { returnType: 'int', methodName: 'climbStairs', params: 'int n' },
    'House Robber': { returnType: 'int', methodName: 'rob', params: 'int[] nums' },
    'Coin Change': { returnType: 'int', methodName: 'coinChange', params: 'int[] coins, int amount' },
    'Longest Increasing Subsequence': { returnType: 'int', methodName: 'lengthOfLIS', params: 'int[] nums' },
    'Word Break': { returnType: 'boolean', methodName: 'wordBreak', params: 'String s, List<String> wordDict' },
    'Partition Equal Subset Sum': { returnType: 'boolean', methodName: 'canPartition', params: 'int[] nums' },
    'Decode Ways': { returnType: 'int', methodName: 'numDecodings', params: 'String s' },
    'Longest Palindromic Substring': { returnType: 'String', methodName: 'longestPalindrome', params: 'String s' },
    'Maximum Product Subarray': { returnType: 'int', methodName: 'maxProduct', params: 'int[] nums' },

    // 13. Dynamic Programming — 2D
    'Unique Paths': { returnType: 'int', methodName: 'uniquePaths', params: 'int m, int n' },
    'Longest Common Subsequence': { returnType: 'int', methodName: 'longestCommonSubsequence', params: 'String text1, String text2' },
    'Edit Distance': { returnType: 'int', methodName: 'minDistance', params: 'String word1, String word2' },
    'Regular Expression Matching': { returnType: 'boolean', methodName: 'isMatch', params: 'String s, String p' },
    'Interleaving String': { returnType: 'boolean', methodName: 'isInterleave', params: 'String s1, String s2, String s3' },

    // 14. Greedy
    'Maximum Subarray': { returnType: 'int', methodName: 'maxSubArray', params: 'int[] nums' },
    'Jump Game': { returnType: 'boolean', methodName: 'canJump', params: 'int[] nums' },
    'Gas Station': { returnType: 'int', methodName: 'canCompleteCircuit', params: 'int[] gas, int[] cost' },

    // 15. Intervals
    'Merge Intervals': { returnType: 'int[][]', methodName: 'merge', params: 'int[][] intervals' },
    'Insert Interval': { returnType: 'int[][]', methodName: 'insert', params: 'int[][] intervals, int[] newInterval' },
    'Non-overlapping Intervals': { returnType: 'int', methodName: 'eraseOverlapIntervals', params: 'int[][] intervals' },

    // 16. Bit Manipulation
    'Single Number': { returnType: 'int', methodName: 'singleNumber', params: 'int[] nums' },
    'Number of 1 Bits': { returnType: 'int', methodName: 'hammingWeight', params: 'int n' },
    'Missing Number': { returnType: 'int', methodName: 'missingNumber', params: 'int[] nums' },
    'Counting Bits': { returnType: 'int[]', methodName: 'countBits', params: 'int n' },

    // 17. Math & Geometry
    'Rotate Image': { returnType: 'void', methodName: 'rotate', params: 'int[][] matrix' },
    'Spiral Matrix': { returnType: 'List<Integer>', methodName: 'spiralOrder', params: 'int[][] matrix' },
    'Set Matrix Zeroes': { returnType: 'void', methodName: 'setZeroes', params: 'int[][] matrix' },
};



// Helper class definitions
const listNodeClass = `/**
 * Definition for singly-linked list.
 */
class ListNode 
{
    int val;
    ListNode next;
    
    ListNode() 
    {
    }
    
    ListNode(int val) 
    {
        this.val = val;
    }
    
    ListNode(int val, ListNode next) 
    {
        this.val = val;
        this.next = next;
    }
}

`;

const treeNodeClass = `/**
 * Definition for a binary tree node.
 */
class TreeNode 
{
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode() 
    {
    }
    
    TreeNode(int val) 
    {
        this.val = val;
    }
    
    TreeNode(int val, TreeNode left, TreeNode right) 
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

`;

const graphNodeClass = `/**
 * Definition for a Node.
 */
class Node 
{
    public int val;
    public List<Node> neighbors;
    
    public Node() 
    {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val) 
    {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val, ArrayList<Node> _neighbors) 
    {
        val = _val;
        neighbors = _neighbors;
    }
}

`;

/**
 * Generates Java boilerplate code in Allman brace style for a given problem
 * @param {string} title - The problem title
 * @returns {string} - Java code with Allman braces
 */
export const generateBoilerplate = (title) => {
    const signature = signatureMap[title];

    if (!signature) {
        // Fallback for unknown problems
        const methodName = title.toLowerCase().replace(/[^a-z0-9]/g, ' ').trim().split(/\s+/)
            .map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
            .join('');

        return `class Solution 
{
    public void ${methodName}() 
    {
        // Your solution here
    }
}
`;
    }

    let prefix = '';

    // Add helper class definitions if needed
    if (signature.needsListNode) {
        prefix += listNodeClass;
    }
    if (signature.needsTreeNode) {
        prefix += treeNodeClass;
    }
    if (signature.needsGraphNode) {
        prefix += graphNodeClass;
    }

    // Handle special class-based problems
    if (signature.isClass) {
        return prefix + generateClassBoilerplate(title, signature);
    }

    // Standard method boilerplate
    return prefix + `class Solution 
{
    public ${signature.returnType} ${signature.methodName}(${signature.params}) 
    {
        // Your solution here
    }
}
`;
};

/**
 * Generates boilerplate for class-based problems (like MinStack, Trie, etc.)
 */
const generateClassBoilerplate = (title, signature) => {
    switch (title) {
        case 'Min Stack':
            return `class MinStack 
{
    public MinStack() 
    {
        // Initialize your data structure here
    }
    
    public void push(int val) 
    {
        // Your code here
    }
    
    public void pop() 
    {
        // Your code here
    }
    
    public int top() 
    {
        // Your code here
    }
    
    public int getMin() 
    {
        // Your code here
    }
}
`;

        case 'Implement Trie (Prefix Tree)':
            return `class Trie 
{
    public Trie() 
    {
        // Initialize your data structure here
    }
    
    public void insert(String word) 
    {
        // Your code here
    }
    
    public boolean search(String word) 
    {
        // Your code here
    }
    
    public boolean startsWith(String prefix) 
    {
        // Your code here
    }
}
`;

        case 'Kth Largest Element in a Stream':
            return `class KthLargest 
{
    public KthLargest(int k, int[] nums) 
    {
        // Initialize your data structure here
    }
    
    public int add(int val) 
    {
        // Your code here
    }
}
`;



        default:
            return `class ${signature.methodName} 
{
    public ${signature.methodName}() 
    {
        // Initialize your data structure here
    }
}
`;
    }
};

export default generateBoilerplate;
