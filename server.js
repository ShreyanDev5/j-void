const express = require('express');

const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'frontend-app/dist')));

const TEMP_BASE_DIR = path.join(__dirname, 'temp');

// Ensure temp base directory exists
if (!fs.existsSync(TEMP_BASE_DIR)) {
    fs.mkdirSync(TEMP_BASE_DIR);
}

function cleanup(dir) {
    try {
        if (fs.existsSync(dir)) {
            fs.rmSync(dir, { recursive: true, force: true });
        }
    } catch (e) {
        console.error(`Failed to cleanup directory ${dir}:`, e);
    }
}

app.post('/compile', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    const jobId = uuidv4();
    const jobDir = path.join(TEMP_BASE_DIR, jobId);

    try {
        fs.mkdirSync(jobDir);
        const filePath = path.join(jobDir, 'Main.java');
        fs.writeFileSync(filePath, code);

        // Compile
        exec(`javac "${filePath}"`, (compileError, compileStdout, compileStderr) => {
            if (compileError) {
                cleanup(jobDir);
                return res.json({
                    output: '',
                    error: `Compilation Error:\n${compileStderr || compileError.message}`
                });
            }

            // Execute with timeout (e.g., 5 seconds)
            const runCommand = `java -cp "${jobDir}" Main`;
            exec(runCommand, { timeout: 5000 }, (runError, runStdout, runStderr) => {
                cleanup(jobDir);
                if (runError) {
                    if (runError.killed) {
                        return res.json({
                            output: '',
                            error: 'Runtime Error: Execution timed out.'
                        });
                    }
                    return res.json({
                        output: runStdout,
                        error: `Runtime Error:\n${runStderr || runError.message}`
                    });
                }

                res.json({
                    output: runStdout,
                    error: runStderr ? `Stderr:\n${runStderr}` : ''
                });
            });
        });
    } catch (err) {
        cleanup(jobDir);
        console.error('Internal Server Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Anything that doesn't match the above, send back index.html
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'frontend-app/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
