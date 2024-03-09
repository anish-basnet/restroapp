from flask import g, make_response


class RestaurantModel:
    def __init__(self, cur):
        self.cur = cur

    def __del__(self):
        self.cur.close()

    def get_restaurant_info(self, id):
        try:
            self.cur.execute(f"SELECT * FROM store WHERE id={int(id)}")
            result = self.cur.fetchone()
            if len(result) > 0:
                res = make_response({'payload': result}, 200)
                return res
            else:
                return make_response({'message': "No Data Found"}, 204)
        except Exception as e:

            print("Error fetching info: ", e)
            return make_response({'message': "SQL error"}, 204)

    def get_all_product_categories(self):
        try:
            self.cur.execute("SELECT * FROM product_category")
            result = self.cur.fetchall()
            if len(result) > 0:
                res = make_response({'payload': result}, 200)
                return res
            else:
                return make_response({'message': "No Data Found"}, 204)
        except Exception as e:
            print("Error fetching info: ", e)
            return make_response({'message': "SQL error"}, 204)

    def get_all_product_of_category(self, categories):
        try:
            result = dict()
            for category in categories:
                self.cur.execute(
                    f"select * from product right join (select * from product_info where product_type=(select id "
                    f"from product_category where category='{category}')) as prod_info on product.product_id = "
                    "prod_info.product_id;")
                result[category] = self.cur.fetchall()

            if len(result) > 0:
                res = make_response({'payload': result}, 200)
                return res
            else:
                return make_response({'message': "No Data Found"}, 204)
        except Exception as e:
            print("Error fetching info: ", e)
            return make_response({'message': "SQL error"}, 204)
