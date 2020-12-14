from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from rest_framework.views import APIView
from django.views.decorators.cache import cache_page
from django.utils.decorators import method_decorator
import requests, json

STACKOVERFLOW_URL = "https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow"
CACHE_TIMEOUT = 60 * 60

# with open("dummy.json") as f:
# 	DUMMY_DATA = json.load(f)

class AnonRateThrottlePerMin(AnonRateThrottle):
	scope = 'anon_min'

class AnonRateThrottlePerDay(AnonRateThrottle):
	scope = 'anon_day'

class QuestionApiView(APIView):

	renderer_classes = [JSONRenderer]
	throttle_classes = [AnonRateThrottlePerMin, AnonRateThrottlePerDay]

	@method_decorator(cache_page(CACHE_TIMEOUT))
	def get(self, request, format=None):
		query = ""
		for _ in request.GET:
			query += f'&{_}={request.GET[_]}'
		res = requests.get(STACKOVERFLOW_URL + query)
		return Response(res.json())
		# return Response(DUMMY_DATA)