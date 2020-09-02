import os
import shutil
from function import Fn

fn = Fn()

def move_file(src, dest):
    src = fn.smart_path(src, file = __file__)
    dest = fn.smart_path(dest, file = __file__)
    src_files = os.listdir(src)
    for file_name in src_files:
        full_file_name = os.path.join(src, file_name)
        if os.path.isfile(full_file_name):
            print('Imported to:' + full_file_name)
            shutil.copy(full_file_name, dest)

move_file(
    src = '../node_modules/bootstrap/js/src/',
    dest = '../static/js/bootstrap/'
)