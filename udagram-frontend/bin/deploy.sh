#!/bin/bash
aws s3 cp --recursive --acl public-read ./www s3://elasticbeanstalk-us-east-1-332479299337/