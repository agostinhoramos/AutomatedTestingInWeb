class Fn:

    def __init__(self):
        pass

    def smart_path(self, dir = '', file = __file__):
        from pathlib import Path
        all_path = str(Path(__file__).parent.absolute()).lower()
        dir_path = str(Path().absolute()).lower()
        path = all_path.replace(dir_path,'')
        path = path.replace('\\', '/')[1:]
        if len(path) > 0:
            path = path+'/'
        return path + dir