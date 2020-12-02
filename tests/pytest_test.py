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


# *********************** Test Helper Functions ***************************
