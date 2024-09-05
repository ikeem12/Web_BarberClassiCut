from flask import render_template
from . import main

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/admin')
def admin():
    return render_template('admin.html')

@main.route('/employee')
def employee():
    return render_template('employee.html')