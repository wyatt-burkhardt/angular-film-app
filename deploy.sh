#/bin/bash

#upload files
aws s3 cp ./dist s3://burkhardt-household --recursive --acl public-read