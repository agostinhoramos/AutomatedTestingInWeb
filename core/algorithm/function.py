from urllib.request import urlopen, urljoin
from bs4 import BeautifulSoup
import urllib.parse

class Fn:
    def get_page_url(self, url, main_url=True):
        all_url = []
        html = urlopen(url)
        soup = BeautifulSoup(html.read(), features="html.parser")
        values = soup.find_all('a', href=True)
        for value in values:
            new_url = value.get('href')
            new_url = urllib.parse.urljoin(url, new_url)
            all_url.append(new_url)
        return all_url

f = Fn()
d = f.get_page_url('http://localhost:8000')
print(d)