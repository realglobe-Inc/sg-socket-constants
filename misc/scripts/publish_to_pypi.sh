#!/bin/bash

##
# Publish python package into pypi
#
# https://pypi.python.org/pypi
# https://twinery.org/
# https://github.com/realglobe-Inc/sugos-secrets
##

ROOT_DIR=$(cd "$(dirname $0)/../.." && pwd)
SHIM_DIR="${ROOT_DIR}/shim/python"

cd ${ROOT_DIR}

node ./ci/build.js

cd ${SHIM_DIR}

rm -rf dist

python setup.py sdist

USERNAME=$(sugos-secrets get -r pypi:username)
PASSWORD=$(sugos-secrets get -r pypi:password)

twine upload -u ${USERNAME} -p ${PASSWORD} dist/*
