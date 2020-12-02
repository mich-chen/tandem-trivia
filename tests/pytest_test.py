import pytest
from mock import patch

import server
from server import app

import random
import helper

@pytest.fixture(autouse=True)
def file_path():
    server.FILE = 'tests/test_data.json'
    yield server.FILE

@patch('server.FILE', 'tests/test_data.json')
def test_file_path():
    assert server.FILE == 'tests/test_data.json'

def test_file_path_fixture(file_path):
    assert server.FILE == 'tests/test_data.json'

class TestFlask:

    # setup Flask test client and file path
    def setup_method(self):
        self.client = app.test_client()
        app.config['TESTING'] = True
        self.data = helper.open_file('test_data.json')


    def test_setup(self):
        assert self.data != None
