from flask import Flask, render_template, jsonify, redirect, request

import json
import random
import helper

# instantiate Flask class
app = Flask(__name__, static_folder='build',
                      template_folder='build',
                      static_url_path = '/')


FILE = 'src/Apprentice_TandemFor400_Data.json'

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

    data = helper.open_file(FILE)
    # shuffle questions
    helper.shuffle(data)
    helper.add_choices_lst(data)
    questions = helper.slice_list(data, 10)

    return jsonify(questions)


if __name__ == '__main__':
    app.debug = True
    # DebugToolbarExtension(app)
    app.run(host='0.0.0.0')
