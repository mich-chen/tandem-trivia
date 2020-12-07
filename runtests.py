# !/usr/bin/env python3
import subprocess

# *************** Script to run Pytest and Unittest files ***************

# change working directory to tests/, run files
subprocess.run(["python3","pytest_test.py"], cwd="tests/")
