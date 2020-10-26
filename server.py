from flask import render_template, jsonify, redirect, request

import os
import json
import random

# instantiate Flask class
app = Flask(__name__, static_url_path='/',
                  static_folder='build',
                  template_folder='build')

