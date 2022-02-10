###Pipeline Process:
The app is monitored by **`CircleCi`**, whenever new code is pushed
to the GitHub master project `master branch` the `**Pipeline**` of CircleCi **triggers
a series of events**.


####Pipeline triggered events:
* an ubuntu docker image is installed.
* Node, AWS CLI, EB CLI & Chrome browser is installed to support front-end tests.
* Backend Installing Packages & Building.
* Frontend Installing Packages & Testing.
* Frontend Build.
* Deploying Backend inside `AWS Elastic Beanstalk environment`.
* Deploying Frontend inside `AWS S3 Bucket`.