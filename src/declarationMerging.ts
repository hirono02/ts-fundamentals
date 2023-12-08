// Declaration merging is not support by type aliases
// Express Base
export interface Request {
    body: any;
}

// Express JSON
export interface Request {
    json: any;
}

// App
const handleRequest = (req: Request) => {
    req.body;
    req.json;
}
