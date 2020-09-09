from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import analyze

import time
import random

# Create your views here.
def home(request):
    return render(request, "home.html")

@csrf_exempt
def post(request):
    OBJ = {
        "type_process" : ""
    }
    an = analyze()
    URL = request.POST["url"]
    AW = an.web(URL, OBJ)
    return render(request, AW[0], context=AW[1])