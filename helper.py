import random
import json

def open_file(path):
    """Open file and return data."""

    with open(path) as file:
        data = json.load(file)

    return data


def shuffle(data):
    """Shuffle data in a list in place."""

    random.shuffle(data)
    return


def slice_list(lst, x):
    """Return X number of random, non-repeated questions."""

    return lst[:x]


def add_choices_lst(data):
    """Concatenate incorrect and correct answers into a choices list as key in data."""

    for question in data:
        question['choices'] = question['incorrect'] + [question['correct']]

    return 
