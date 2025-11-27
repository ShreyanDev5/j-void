const http = require('http');

const data = JSON.stringify({
    code: 'public class Main { public static void main(String[] args) { System.out.println("Hello from Backend!"); } }'
});

const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/compile',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => {
        body += chunk;
    });
    res.on('end', () => {
        console.log('Response:', body);
    });
});

req.on('error', (error) => {
    console.error('Error:', error);
});

req.write(data);
req.end();
