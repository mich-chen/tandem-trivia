import pytest

import server
from server import app

import random
import helper

# ******************* Globally define test data file **********************

@pytest.fixture(autouse=True)
def file_path():
    server.FILE = 'tests/test_data.json'
    yield server.FILE

def test_file_path_fixture(file_path):
    assert server.FILE == 'tests/test_data.json'

# ************************** Test Flask App *******************************

class TestFlask:

    # setup Flask test client and file path
    def setup_method(self):
        self.client = app.test_client()
        app.config['TESTING'] = True
        self.data = helper.open_file('tests/test_data.json')

    def test_setup(self):
        assert self.data != None

    def test_homepage(self):
        result = self.client.get('/')
        assert b'<!doctype html>' in result.data

    def test_get_questions(self):
        result = self.client.get('/api/questions')
        # check returned questions are not same as original data file
        assert self.data != result.json, 'result is same as data file'

    def test_questions_length(self):
        result = self.client.get('/api/questions')
        # check return 10 questions
        assert len(self.data) != len(result.json), 'should return 10 Qs, result is not 10 Qs'

    def test_choices(self):
        result = self.client.get('/api/questions')
        # check 'choices' property added to each question
        assert all('choices' in q for q in result.json), 'choices property not added to questions'


# *********************** Test Helper Functions ***************************