@echo off

start python manage.py runserver
start python extra\update_static_files.py
start sass --watch node_modules\font-awesome\scss\compiled_main.scss:static\css\font-awesome\main.css
start sass --watch node_modules\bootstrap\scss\compiled_main.scss:static\css\bootstrap\main.css