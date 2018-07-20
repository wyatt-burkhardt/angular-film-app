#/bin/bash

#upload files
aws s3 cp ./dist/angular-film-app s3://burkhardt-household --recursive --acl public-read