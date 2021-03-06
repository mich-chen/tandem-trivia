import pytest
# from pytest_mock import mocker

import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

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

@pytest.mark.usefixtures("setup_method")
class TestFlask:

    # setup Flask test client and file path
    @pytest.fixture(autouse=True)
    def setup_method(self):
        self.client = app.test_client()
        app.config['TESTING'] = True
        self.data = helper.open_file(server.FILE)

    def test_setup(self):
        assert self.data != None

    def test_homepage(self):
        result = self.client.get('/')
        assert b'<!doctype html>' in result.data, 'no return html template'

    def test_status_code(self):
        result = self.client.get('/api/questions')
        print(result.status_code)
        assert result.status_code == 200

    def test_get_questions(self):
        result = self.client.get('/api/questions')
        # check returned questions are not same as original data file
        assert self.data != result.json, 'result is same as data file'

    def test_questions_length(self):
        result = self.client.get('/api/questions')
        # check return 10 questions
        assert len(result.json) == 10, 'should return 10 Qs, result is not 10 Qs'

    def test_choices(self):
        result = self.client.get('/api/questions')
        # check 'choices' property added to each question
        assert all('choices' in q for q in result.json), 'choices property not added to questions'


# *********************** Test Helper Functions ***************************

class TestHelpers:

    def setup_method(self):
        self.data = helper.open_file(server.FILE)

    def test_open_file(self):
        assert isinstance(self.data, list), 'Not a list, should be list'

    def test_shuffle_patch(self, mocker):
        # need to test side effect which is in-place change
        # random.shuffle does not have return value
        mocker.patch('random.shuffle', side_effect=lambda x: x.reverse())
        # set up spy
        # spy = mocker.spy(random, 'shuffle')
        # call helper function
        lst = [1, 2, 3, 4, 5]
        # helper.shuffle(lst)
        random.shuffle(lst)
        assert lst == [5, 4, 3, 2, 1] , 'did not shuffle' 
        # check function called and returned value is shuffled
        # spy.assert_called_once_with(self.data)
        # assert spy.spy_return != self.data, 'did not shuffle spy'

    def test_slice_list(self):
        result = helper.slice_list(self.data, 10)
        assert len(result) == 10, 'not sliced 10'

    def test_add_choices(self):
        helper.add_choices_lst(self.data)
        # check choices is a list with length 4 for each question
        assert all(len(q['choices']) == 4 for q in self.data)

if __name__ == '__main__':
    
    # args is List[str] of command line args
    pytest.main(['-v']) 
