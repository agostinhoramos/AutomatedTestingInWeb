from urllib.request import urlopen
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import time

from selenium import webdriver

class web_tools:
    def __init__(self, url):
        self.driver = webdriver.Chrome('app\chromedriver.exe')
        self.driver.get(url)
        self.html = self.driver.page_source
        self.url = url
        self.driver.close()

    def info(self, type):
        values = []

        soup = BeautifulSoup(self.html, features="html.parser")

        origin_url = self.url

        css_files = []
        for css in soup.find_all("link"):
            if css.attrs.get("href"):
                css_url = urljoin(origin_url, css.attrs.get("href"))
                css_files.append(css_url)

        js_files = []
        for js in soup.find_all("script"):
            if js.attrs.get("src"):
                js_url = urljoin(origin_url, js.attrs.get("src"))
                js_files.append(js_url)

        values = css_files + js_files
        url_all = ''
        for value in values:
            url_all += value + '<br/>'
        return [url_all]