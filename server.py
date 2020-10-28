from flask import Flask, render_template, jsonify, redirect, request

import os
import json
from random import randint

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
        question['choices'] = question['incorrect'] + [question['correct']]

    # generate 10 random indices and return these 10 questions to client
    questions = []
    while len(questions) < 10:
        idx = randint(0, 20)
        selected = data[idx]
        selected['choices'] = selected['incorrect'] + [selected['correct']]
        questions.append(selected)
    
    # print(questions)

    return jsonify(questions)


if __name__ == '__main__':
    app.debug = True
    # DebugToolbarExtension(app)
    app.run(host='0.0.0.0')
