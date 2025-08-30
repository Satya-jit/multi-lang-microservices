from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Python Flask Backend is running!"

@app.route('/hello')
def hello():
    return "Hello from Python Flask! 🐍"

@app.route('/health')
def health():
    return jsonify({
        "service": "python-backend",
        "status": "healthy",
        "version": "1.0.0"
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
