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
            pages = wt.info('css')[0]
            PM = "models/options_web.html"
            OBJ = {
                "numInputs" : str(random.randint(0, 100)),
                "totalPages" : str(pages)
            }
        elif True:
            PM = "models/final_result.html"
            PERCENTAGE = str(random.randint(0, 100))
            OBJ = {
                "url" : url,
                "percentage" : PERCENTAGE
            }
        return [PM, OBJ]