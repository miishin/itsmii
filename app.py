from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route("/pro")
def pro():
    return render_template('pro.html')

@app.route("/personal")
def personal():
    return render_template('personal.html')