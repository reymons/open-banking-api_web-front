#!/bin/sh

set -eu
set -o pipefail

npm run lint
npm run format
