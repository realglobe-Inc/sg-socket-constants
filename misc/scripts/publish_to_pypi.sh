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
cd ${SHIM_DIR}

USERNAME=$(sugos-secrets get -r pypi:username)
PASSWORD=$(sugos-secrets get -r pypi:password)

twine upload -u ${USERNAME} -p ${PASSWORD} dist/*
