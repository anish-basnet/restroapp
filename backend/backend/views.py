from backend import app
from mysql.connector import connect, Error
from backend.models import RestaurantModel
from backend import sql_config
from flask import request, jsonify, g


def connect_db(params=sql_config):
    if 'db' not in g:
        g.db = connect(**params)
    return g.db


@app.teardown_appcontext
def teardown_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()


@app.route('/getRestaurantInfo')
def get_Restaurant_Info():
    restaurant_id = request.args.get('id')
    model = RestaurantModel(connect_db().cursor(dictionary=True))
    info = model.get_restaurant_info(restaurant_id)
    return info


@app.route('/getProductCategories')
def get_product_categories():
    model = RestaurantModel(connect_db().cursor(dictionary=True))
    result = model.get_all_product_categories()
    return result


@app.route('/getProductInfo')
def get_product_info():
    category_name = request.args.get('categories')
    categories =[category for category in category_name.split('@:-:@') if category]
    print(categories)
    model = RestaurantModel(connect_db().cursor(dictionary=True))
    result = model.get_all_product_of_category(categories)
    return result
