#!/usr/bin/python

import os
from http.server import HTTPServer
from http.server import SimpleHTTPRequestHandler

path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'src')
print('Serving %s' % path)
os.chdir(path)

server_address = ('', 8080)
print('Listening on %s:%d' % server_address)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.serve_forever()
