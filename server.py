from flask import render_template, jsonify, redirect, request

import os
import json
import random

# instantiate Flask class
app = Flask(__name__)

