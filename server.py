from flask import Flask, render_template, jsonify, redirect, request

import os
import json
import random

# instantiate Flask class
app = Flask(__name__, static_folder='build',
                      template_folder='build',
                      static_url_path = '/')

# catch all
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """Catch all URL routes that don't match specific path."""

    return render_template('index.html')

@app.route('/')
def homepage():
    """Show homepage."""

    return render_template('index.html')

@app.route('/api/questions', methods=['GET'])
def get_questions():
    """Retrieve question and choices."""
    print('in get questions\n\n\n\n')
    file = open('src/Apprentice_TandemFor400_Data.json')
    data = json.load(file)
    # data list of dictionaries of questions
    for question in data:
        question['choices'] = question['incorrect'].append(question['correct'])
    print(data)

    return jsonify(data)


if __name__ == '__main__':
    app.debug = True
    # DebugToolbarExtension(app)
    app.run(host='0.0.0.0')
