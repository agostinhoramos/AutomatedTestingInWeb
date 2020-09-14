from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import analyze

import time
import random
import json

# Create your views here.


def home(request):
    return render(request, "home.html")


@csrf_exempt
def post(request):
    an = analyze()
    URL = request.POST["url"]
    OBJ = {
        "type_process": ""
    }
    AW = an.web(URL, OBJ)
    return render(request, AW[0], context=AW[1])


@csrf_exempt
def send(request):
    an = analyze()
    URL = request.POST["url"]
    DATA = json.loads(request.POST["data"])
    AW = an.web(URL, DATA)
    return render(request, AW[0], context=AW[1])
