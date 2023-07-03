#!/usr/bin/env python
"""Device42 API Shenanigans."""

import json
import logging
import pprint

from urllib.request import Request, urlopen
from urllib.error import URLError
from base64 import b64encode
from datetime import datetime, timedelta


# D42 Environment #
D42_API_URL = 'https://device42.cit.cornell.edu'  # make sure to not end in /
D42_CLIENT_KEY = '702ea8960cd24791915174b3fa97f3a5'
D42_CLIENT_SEC = '3f55d3c971fd4784ac73eaba36d4e273_2c417eaa88dc42b0b376733b23d774be'

CODE = str()
MSG = str()
EXPIRES = datetime.now()
TOKEN = str()
TOKEN_ID = str()
TTL = str()

DEBUG = True # Extra output


def basic_auth(username, password):
    """Munge credentials to work with Py3's weird string chicanery."""
    token = b64encode(f"{username}:{password}".encode('utf-8')).decode("ascii")
    return f'Basic {token}'


def debug_print(a):
    """I cannot recall how many times I have written this method in my life."""
    if DEBUG is True:
        pp = pprint.PrettyPrinter(indent=4)
        pp.pprint(a)


# set mark prime
def auth(KEY=None, SECRET=None):
    """Set up auth. Retrieve & return token."""
    if KEY is None or SECRET is None:
        return None
    URL = D42_API_URL + '/tauth/1.0/token/'  # initial endpoint to get token

    request = Request(URL, None)
    request.method = 'POST'
    request.add_header('Authorization', basic_auth(KEY, SECRET))
    request.add_header("Content-Type", 'application/x-www-form-urlencoded')

    payload = str()

    with urlopen(request) as response:
        try:
            payload = json.loads(response.read())
        # response = urlopen(request)
        except URLError as e:
            if hasattr(e, 'reason'):
                print('Failed to reach server.')
                print('Reason: ', e.reason)
            elif hasattr(e, 'code'):
                print('The server couldn\'t fulfill the request.')
                print('Error code: ', e.code)
                print(e.read())
        except json.JSONDecodeError as e:
            print('Failure with json data')
            debug_print(e)
        else:
            # everything is fine
            CODE = payload["code"]
            MSG = payload["msg"]
            EXPIRES = datetime.strptime(payload["expires"], '%Y-%m-%dT%H:%M:%S.%fZ')
            TOKEN = payload["token"]
            TOKEN_ID = payload["token_id"]
            TTL = payload["ttl"]

    debug_print(payload)
    debug_print(CODE)
    debug_print(MSG)
    debug_print(EXPIRES)
    debug_print(TOKEN)
    debug_print(TOKEN_ID)
    debug_print(TTL)

    return TOKEN


# set mark twain

def linux():
    """Do something linuxy."""
    return 0


def post():
    """Post something somehwere."""
    return 0

def query1():
    """Return a list of hostnames of all Windows machines."""
    URL = D42_API_URL + '/api/1.0/operatingsystems/'  # endpoint to get OS deets

    return


def main():
    """Where the magic happens."""
    # If the token will be invalid within one minute of now, reauth
    if EXPIRES < datetime.now() + timedelta(0, 60):

        try:
            auth(D42_CLIENT_KEY, D42_CLIENT_SEC)
        except Exception as e:
            logging.error('Auth didn\'t work as expected')
            debug_print(e)

    # if we've made it this far

    try:
        linux()
    except Exception as e:
        logging.error('Something unexpected happened')
        debug_print(e)


if __name__ == "__main__":
    main()
