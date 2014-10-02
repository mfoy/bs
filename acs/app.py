from flask import Flask, render_template
from flask.ext.restful import Api

from acs.resources import spiders


app = Flask(__name__, static_url_path='/static', static_folder='/home/vagrant/acs/static')
api = Api(app)

api.add_resource(spiders.SpiderList, '/api/v1/spiders')
api.add_resource(spiders.Spider, '/api/v1/spiders/<string:spider_name>')


@app.route("/")
def index():
    return render_template('app.html')
