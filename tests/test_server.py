from unittest import TestCase
from mock import patch
import random

# import server module from parent directory
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
import server
from server import app
import helper


@patch('server.FILE', 'tests/test_data.json')
class FlaskTests(TestCase):

    def setUp(self):

        # get Flask test client
        self.client = app.test_client()
        # show Flask errors that happen during tests
        app.config['TESTING'] = True
        # FILE = 'tests/test_data.json'
        self.data = helper.open_file('tests/test_data.json')

    def test_file_path(self):

        self.assertEqual('tests/test_data.json', server.FILE)

    def test_homepage(self):

        result = self.client.get('/') # get request to homepage
        self.assertIn(b'<title>React App</title>', result.data)

    def test_get_questions(self):

        results = self.client.get('/api/questions')
        self.assertNotEqual(self.data, results.json)
        self.assertTrue(all('choices' in q for q in results.json))


class HelperTests(TestCase):

    def setUp(self):

        self.data = helper.open_file('tests/test_data.json')

    def test_open_file(self):

        self.assertIsInstance(self.data, list)
        self.assertEqual(14, len(self.data))

    @patch.object(random, 'shuffle')
    def test_shuffle(self, mock):

        helper.shuffle(self.data)
        # mock.called to spy if random.shuffle() was called
        self.assertTrue(mock.called)
        self.assertEqual(14, len(self.data))

    def test_slice_list(self):

        results = helper.slice_list(self.data, 10)
        self.assertEqual(10, len(results))

    def test_add_choices_lst(self):

        helper.add_choices_lst(self.data)
        self.assertTrue(all(len(q['choices'])==4 for q in self.data))

if __name__ == '__main__':
    
    import unittest

    unittest.main(verbosity=2)

