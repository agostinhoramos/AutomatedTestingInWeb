@echo off

start python manage.py runserver
start sass --watch node_modules\font-awesome\scss\compiled_main.scss:static\css\font-awesome\main.css
start sass --watch node_modules\bootstrap\scss\compiled_main.scss:static\css\bootstrap\main.css