from flask import Flask

app = Flask(__name__)

from mysql.connector import connect

sql_config = {
    'host': 'localhost',
    'port': '3306',
    'username': 'root',
    'password': '',
    'database': 'db_restro',
    'connect_timeout': 28800,
}

from backend import views
