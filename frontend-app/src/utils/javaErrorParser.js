/**
 * Parses raw output from javac or java execution to extract structured error information.
 * 
 * @param {string} output - The raw stdout/stderr string.
 * @returns {object} - Structured result { type: 'success' | 'error', message: string, friendlyMessage?: string, line?: number, markers?: array }
 */
export const parseJavaOutput = (output) => {
    if (!output) return { type: 'success', message: '' };

    // Check for compilation errors (javac output usually contains "error:")
    if (output.includes('error:')) {
        return parseCompilationError(output);
    }

    // Check for runtime exceptions
    if (output.includes('Exception in thread') || output.includes('Error:')) {
        return parseRuntimeError(output);
    }

    return { type: 'success', message: output };
};

const parseCompilationError = (output) => {
    const lines = output.split('\n');
    const markers = [];
    let friendlyMessage = '';
    let firstErrorLine = null;

    // Regex to capture standard javac error format: File.java:Line: error: Message
    const errorRegex = /Main\.java:(\d+):\s*error:\s*(.+)/;

    for (const line of lines) {
        const match = line.match(errorRegex);
        if (match) {
            const lineNumber = parseInt(match[1], 10);
            const errorMessage = match[2].trim();

            if (!firstErrorLine) firstErrorLine = lineNumber;

            // Generate friendly message based on common errors
            if (!friendlyMessage) {
                friendlyMessage = getFriendlyMessage(errorMessage, lineNumber);
            }

            markers.push({
                startLineNumber: lineNumber,
                startColumn: 1,
                endLineNumber: lineNumber,
                endColumn: 1000, // Highlight full line for visibility
                message: errorMessage,
                severity: 8, // MarkerSeverity.Error
            });
        }
    }

    return {
        type: 'error',
        category: 'Compilation Error',
        message: output,
        friendlyMessage: friendlyMessage || "The compiler found an issue with your code. Check the red lines!",
        line: firstErrorLine,
        markers: markers
    };
};

const parseRuntimeError = (output) => {
    let friendlyMessage = "Something went wrong while running your code.";
    const markers = [];

    // Extract line number from stack trace: at Main.main(Main.java:5)
    const stackTraceRegex = /at Main\.main\(Main\.java:(\d+)\)/;
    const match = output.match(stackTraceRegex);

    if (match) {
        const lineNumber = parseInt(match[1], 10);
        markers.push({
            startLineNumber: lineNumber,
            startColumn: 1,
            endLineNumber: lineNumber,
            endColumn: 1000,
            message: "Runtime Error occurred here",
            severity: 8,
        });
    }

    if (output.includes('ArithmeticException')) {
        friendlyMessage = "Math error! You might be dividing by zero.";
    } else if (output.includes('ArrayIndexOutOfBoundsException')) {
        friendlyMessage = "You're trying to access an item in an array that doesn't exist (index out of range).";
    } else if (output.includes('NullPointerException')) {
        friendlyMessage = "You're trying to use a variable that is null (empty). Make sure you initialize your objects.";
    }

    return {
        type: 'error',
        category: 'Runtime Error',
        message: output,
        friendlyMessage: friendlyMessage,
        markers: markers
    };
};

const getFriendlyMessage = (errorMessage, line) => {
    const lineSuffix = line ? ` (at line ${line})` : '';

    if (errorMessage.includes('; expected')) {
        return `You seem to be missing a semicolon ';'. Java needs them at the end of most lines${lineSuffix}.`;
    }
    if (errorMessage.includes('reached end of file while parsing')) {
        return "It looks like you're missing a closing brace '}'. Check your blocks!";
    }
    if (errorMessage.includes('cannot find symbol')) {
        return `I can't find that variable or method${lineSuffix}. Check for typos or make sure you've declared it.`;
    }
    if (errorMessage.includes('illegal start of expression')) {
        return `This line looks a bit confusing to Java${lineSuffix}. Check your syntax, maybe a missing parenthesis or brace?`;
    }
    if (errorMessage.includes(') expected')) {
        return `You might be missing a closing parenthesis ')'${lineSuffix}.`;
    }
    if (errorMessage.includes('invalid method declaration')) {
        return `Check your method definition${lineSuffix}. Did you forget the return type (like void or int)?`;
    }

    // Fallback: If no specific friendly message is found, return the raw error message
    // but make it slightly more readable.
    return `Syntax Error${lineSuffix}: ${errorMessage}`;
};
