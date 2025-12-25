import React, { useState, useRef, useEffect } from 'react';
import { roadmapData, getAllQuestions } from '../data/roadmapData';

const QuestionSelector = ({ onSelect, selectedId }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedCategories, setExpandedCategories] = useState({});
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Focus input when dropdown opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryId]: !prev[categoryId]
        }));
    };

    const handleSelect = (question) => {
        onSelect(question);
        setIsOpen(false);
        setSearchTerm('');
    };

    // Filter questions based on search term
    const getFilteredCategories = () => {
        if (!searchTerm.trim()) {
            return roadmapData;
        }

        const term = searchTerm.toLowerCase();
        return roadmapData
            .map(category => ({
                ...category,
                questions: category.questions.filter(q =>
                    q.title.toLowerCase().includes(term)
                )
            }))
            .filter(category => category.questions.length > 0);
    };

    const filteredCategories = getFilteredCategories();
    const allQuestions = getAllQuestions();
    const selectedQuestion = allQuestions.find(q => q.id === selectedId);

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'difficulty-easy';
            case 'Medium': return 'difficulty-medium';
            case 'Hard': return 'difficulty-hard';
            default: return '';
        }
    };

    return (
        <div className="question-selector" ref={dropdownRef} onKeyDown={handleKeyDown}>
            <button
                className="selector-button"
                onClick={() => setIsOpen(!isOpen)}
                title="Select a problem"
            >
                <svg className="selector-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" transform="rotate(45 6 6)" />
                    <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 9V12H18C18 13.6569 16.6569 15 15 15H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="selector-text">
                    {selectedQuestion ? selectedQuestion.title : 'Problems'}
                </span>
                <span className="selector-arrow">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
                <div className="selector-dropdown">
                    <div className="search-container">
                        <input
                            ref={inputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search 95 problems..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="categories-list">
                        {filteredCategories.map(category => (
                            <div key={category.id} className="category-group">
                                <button
                                    className="category-header"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <span className="category-arrow">
                                        {expandedCategories[category.id] ? '▼' : '▶'}
                                    </span>
                                    <span className="category-title">{category.title}</span>
                                    <span className="category-count">{category.questions.length}</span>
                                </button>

                                {(expandedCategories[category.id] || searchTerm) && (
                                    <div className="questions-list">
                                        {category.questions.map(question => (
                                            <button
                                                key={question.id}
                                                className={`question-item ${selectedId === question.id ? 'selected' : ''}`}
                                                onClick={() => handleSelect(question)}
                                            >
                                                <span className="question-title">{question.title}</span>
                                                <span className={`difficulty-badge ${getDifficultyClass(question.difficulty)}`}>
                                                    {question.difficulty}
                                                </span>
                                                {question.url && (
                                                    <a
                                                        href={question.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="leetcode-link"
                                                        onClick={(e) => e.stopPropagation()}
                                                        title="Open on LeetCode"
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                            <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {filteredCategories.length === 0 && (
                            <div className="no-results">No problems found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuestionSelector;
