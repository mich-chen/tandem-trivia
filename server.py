from flask import render_template, jsonify, redirect, request

import os
import json
import random

# instantiate Flask class
app = Flask(__name__, static_url_path='/',
                  static_folder='build',
                  template_folder='build')

# catch all
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    """Catch all URL routes that don't match specific path."""

    return render_template('root.html')

@app.route('/')
def homepage():
    """Show homepage."""

    return render_template('root.html')

