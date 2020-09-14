from django.db import models

import requests
from bs4 import BeautifulSoup

from pathlib import Path
import random

from core.algorithm.web_tools import web_tools

# Create your models here.


class analyze:
    def web(self, url, obj):
        if True:
            wt = web_tools(url)
            wt.new_task(obj)
            PM = "models/options_web.html"
        elif True:
            PM = "models/final_result.html"
            PERCENTAGE = str(random.randint(0, 100))
            OBJ = {
                "url": url,
                "percentage": PERCENTAGE
            }
        OBJ = {
            "numInputs": str(random.randint(0, 100)),
            "totalPages": 'NONE_DATA'
        }
        return [PM, OBJ]
