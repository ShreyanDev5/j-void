import React, { useState, useRef, useEffect } from "react";
import { roadmapData, getAllQuestions } from "../data/roadmapData";

// Difficulty sort order: Easy < Medium < Hard
const DIFFICULTY_ORDER = { Easy: 0, Medium: 1, Hard: 2 };

const sortByDifficulty = (questions) => {
    return [...questions].sort(
        (a, b) =>
            (DIFFICULTY_ORDER[a.difficulty] ?? 99) -
            (DIFFICULTY_ORDER[b.difficulty] ?? 99),
    );
};

const QuestionSelector = ({
    onSelect,
    selectedId,
    selectedQuestion: propSelectedQuestion,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [expandedCategories, setExpandedCategories] = useState({});
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const touchStartYRef = useRef(0);
    const isSwipingRef = useRef(false);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside, { passive: true });
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const handleTouchStart = (e) => {
        if (window.innerWidth > 576) return;

        const categoriesList = dropdownRef.current?.querySelector(".categories-list");
        if (categoriesList && categoriesList.scrollTop > 0) {
            return;
        }

        touchStartYRef.current = e.touches[0].clientY;
        isSwipingRef.current = true;
    };

    const handleTouchMove = (e) => {
        if (!isSwipingRef.current) return;

        const currentY = e.touches[0].clientY;
        const diffY = currentY - touchStartYRef.current;

        if (diffY > 0) {
            const dropdownElement = dropdownRef.current?.querySelector(".selector-dropdown");
            if (dropdownElement) {
                dropdownElement.style.transform = `translateY(${diffY}px)`;
                dropdownElement.style.transition = "none";
            }
        }
    };

    const handleTouchEnd = (e) => {
        if (!isSwipingRef.current) return;
        isSwipingRef.current = false;

        const dropdownElement = dropdownRef.current?.querySelector(".selector-dropdown");
        if (dropdownElement) {
            const currentY = e.changedTouches[0].clientY;
            const diffY = currentY - touchStartYRef.current;

            if (diffY > 80) {
                setIsOpen(false);
                setSearchTerm("");
                dropdownElement.style.transform = "";
                dropdownElement.style.transition = "";
            } else {
                dropdownElement.style.transform = "";
                dropdownElement.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
                setTimeout(() => {
                    if (dropdownElement) dropdownElement.style.transition = "";
                }, 200);
            }
        }
    };

    const activeQuestionId = propSelectedQuestion?.id || selectedId;

    // Focus input when dropdown opens and auto-expand category of selected problem
    useEffect(() => {
        if (isOpen) {
            if (inputRef.current) {
                inputRef.current.focus();
            }
            // Auto-expand the category containing the selected problem
            if (activeQuestionId) {
                const categoryWithSelected = roadmapData.find((category) =>
                    category.questions.some((q) => q.id === activeQuestionId),
                );
                if (
                    categoryWithSelected &&
                    !expandedCategories[categoryWithSelected.id]
                ) {
                    setExpandedCategories((prev) => ({
                        ...prev,
                        [categoryWithSelected.id]: true,
                    }));
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, activeQuestionId]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    const toggleCategory = (categoryId) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [categoryId]: !prev[categoryId],
        }));
    };

    const handleSelect = (question) => {
        onSelect(question);
        setIsOpen(false);
        setSearchTerm("");
    };

    // Filter questions based on search term and sort by difficulty
    const getFilteredCategories = () => {
        if (!searchTerm.trim()) {
            return roadmapData.map((category) => ({
                ...category,
                questions: sortByDifficulty(category.questions),
            }));
        }

        const term = searchTerm.toLowerCase();
        return roadmapData
            .map((category) => ({
                ...category,
                questions: sortByDifficulty(
                    category.questions.filter((q) =>
                        q.title.toLowerCase().includes(term),
                    ),
                ),
            }))
            .filter((category) => category.questions.length > 0);
    };

    const filteredCategories = getFilteredCategories();
    const allQuestions = getAllQuestions();
    const selectedQuestion =
        propSelectedQuestion || allQuestions.find((q) => q.id === activeQuestionId);

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case "Easy":
                return "difficulty-easy";
            case "Medium":
                return "difficulty-medium";
            case "Hard":
                return "difficulty-hard";
            default:
                return "";
        }
    };

    return (
        <div
            className="question-selector"
            ref={dropdownRef}
            onKeyDown={handleKeyDown}
        >
            <button
                className={`selector-button ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                title="Select a problem"
                aria-expanded={isOpen}
            >
                <div className="selector-left">
                    <svg
                        className="selector-icon-svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="3"
                            y="3"
                            width="6"
                            height="6"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            transform="rotate(45 6 6)"
                        />
                        <circle
                            cx="18"
                            cy="6"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <rect
                            x="15"
                            y="15"
                            width="6"
                            height="6"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <path
                            d="M9 6H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M18 9V12H18C18 13.6569 16.6569 15 15 15H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                    <span className="selector-text">
                        {selectedQuestion ? selectedQuestion.title : "Select a problem"}
                    </span>
                    {selectedQuestion && (
                        <span
                            className={`difficulty-pill ${getDifficultyClass(selectedQuestion.difficulty)}`}
                        >
                            {selectedQuestion.difficulty}
                        </span>
                    )}
                </div>
                <svg
                    className={`selector-arrow ${isOpen ? "open" : ""}`}
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>

            {isOpen && (
                <div
                    className="selector-dropdown"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="search-container">
                        <div className="search-input-wrapper">
                            <svg
                                className="search-icon"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                className="search-input"
                                placeholder="Search problems..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            {searchTerm && (
                                <button
                                    className="search-clear-btn"
                                    onClick={() => setSearchTerm("")}
                                    title="Clear search"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="categories-list">
                        {selectedQuestion && !searchTerm && (
                            <button
                                className="clear-problem-btn"
                                onClick={() => handleSelect(null)}
                            >
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                <span>Default template</span>
                            </button>
                        )}

                        {filteredCategories.map((category) => (
                            <div key={category.id} className="category-group">
                                <button
                                    className="category-header"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <svg
                                        className={`category-chevron ${expandedCategories[category.id] ? "expanded" : ""}`}
                                        width="10"
                                        height="10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                    <span className="category-title">{category.title}</span>
                                    <span className="category-count">
                                        {category.questions.length}
                                    </span>
                                </button>

                                {(expandedCategories[category.id] || searchTerm) && (
                                    <div className="questions-list">
                                        {category.questions.map((question) => {
                                            const isSelected = activeQuestionId === question.id;
                                            return (
                                                <button
                                                    key={question.id}
                                                    className={`question-item ${isSelected ? "selected" : ""}`}
                                                    onClick={() => handleSelect(question)}
                                                >
                                                    {isSelected && (
                                                        <svg
                                                            className="selected-check-icon"
                                                            width="11"
                                                            height="11"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    )}
                                                    <span className="question-title">{question.title}</span>
                                                    <span
                                                        className={`difficulty-badge ${getDifficultyClass(question.difficulty)}`}
                                                    >
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
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M7 17L17 7"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                />
                                                                <path
                                                                    d="M7 7H17V17"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </button>
                                            );
                                        })}
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
