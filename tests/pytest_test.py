import pytest
from mock import patch

import server
from server import app

import random
import helper

@pytest.fixture(autouse=True)
def file_path():
    server.FILE = 'tests/test_data.json'
    return server.FILE

@patch('server.FILE', 'tests/test_data.json')
def test_file_path():
    assert server.FILE == 'tests/test_data.json'

def test_file_path_fixture(file_path):
    assert server.FILE == 'tests/test_data.json'
