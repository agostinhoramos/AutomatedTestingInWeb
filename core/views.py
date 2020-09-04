from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
#from .models import *
import time

# Create your views here.
def home(request):
    return render(request, "home.html")

@csrf_exempt
def post(request):
    URL = request.POST["url"]
    TYPE = request.POST["type"]
    time.sleep(5)
    RESPONSE = URL
    return render(request, "response.html", {"RESPONSE" : RESPONSE})