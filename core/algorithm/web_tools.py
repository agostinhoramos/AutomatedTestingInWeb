from urllib.request import urlopen
from urllib.parse import urljoin
from bs4 import BeautifulSoup
import time

from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
#from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By


class web_tools:
    def __init__(self, url):
        self.driver = webdriver.Chrome('app\chromedriver.exe')
        self.driver.get(url)
        self.html = self.driver.page_source
        self.url = url

    def new_task(self, arr):
        driver = self.driver
        arr_result = []
        for obj in arr:
            try:
                if(len(obj['query_selector']) > 0):
                    selector = driver.find_element_by_css_selector(
                        obj['query_selector']
                    )

                if(obj['action_code'] == 'implicitly->wait'):
                    driver.implicitly_wait(int(obj['string']))

                if(obj['action_code'] == 'time->sleep'):
                    time.sleep(int(obj['string']))

                if(obj['action_code'] == 'write->text'):
                    selector.send_keys(obj['string'])

                if(obj['action_code'] == 'action->click'):
                    selector.click()

                if(obj['action_code'] == 'driver->wait'):
                    main = WebDriverWait(driver, 10).until(
                        EC.presence_of_all_elements_located((By.ID, "main"))
                    )
                    print(main.text)

                arr_result.append(True)
            except:
                arr_result.append(False)

        print(arr_result)  # print array
        driver.close()  # close browser...
