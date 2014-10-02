import glob
import json

from flask.ext.restful import Resource


class Spider(Resource):

    def get(self, spider_name):
        data = json.load(open('acs/fixtures/%s.json' % spider_name, 'r'))
        return json.dumps(data), 200


class SpiderList(Resource):

    def get(self):
        spiders = []
        for fixture_file in glob.glob('acs/fixtures/*.json'):
            data = json.load(open(fixture_file, 'r'))
            spiders.append(data)
        return spiders
