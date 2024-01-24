from flask import Flask, render_template, redirect, request
from flask_mail import Mail, Message

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Portfolio\index.html')

if __name__ == '__main__':
    app.run(debug=True)