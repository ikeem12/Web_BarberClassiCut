from flask import Flask
from flask_login import LoginManager
from flask_mysqldb import MySQL
import config

db = MySQL()
login_manager = LoginManager()

def createApp():
    app = Flask(__name__, template_folder='main/templates', static_folder= 'main/static')
    app.config['SECRET_KEY'] = config.secret_key
    app.config["MYSQL_USER"] = config.user
    app.config["MYSQL_PASSWORD"] = config.password
    app.config["MYSQL_HOST"] = config.host
    app.config["MYSQL_DB"] = config.namedb
    app.config["MYSQL_CURSORCLASS"] = "DictCursor"

    db.init_app(app)
    # login_manager.init_app(app)

    from .main import main
    # from .auth import auth
    # from .api import api

    app.register_blueprint(main)
    # app.register_blueprint(auth)
    # app.register_blueprint(api)
    
    return app