# Udagram Full-Stack App Deployed And Hosted On AWS - Udacity

### App link:
The application's Link [here](http://elasticbeanstalk-us-east-1-332479299337.s3-website-us-east-1.amazonaws.com).

### App Main Parts:

- Front-End runs on  AWS S3 Bucket
- Back-End runs on Elastic Beanstalk 
- RDS micro tier is used for the database `Postgres`.

`CircleCi` for CI & CD is used, as when a new code is pushed the `pipeline` starts to apply the new code and till
the changes will be deployed on the production environment.

### Installation:

Run `npm install` for both frontend part and api part to download the necessary dependencies.

### Run the application locally:

Create a `.env` file in `udagram-api` With the below variables:

POSTGRES_USERNAME
POSTGRES_PASSWORD
POSTGRES_DB
PORT
POSTGRES_HOST
RDS_DIALECT
AWS_REGION
AWS_PROFILE
aws_bucket
AWS_BUCKET
URL
DB_PORT
JWT_SECRET

Open your terminal and split it into 2 windows:
1. cd to `udagram-api` then `npm run dev`
2. cd to `udagram-frontend` then `npm run start`

Open `http://localhost:4200` in the local browser.

####Note:
1- Use this command to free the port if busy (Unix)
```sudo lsof -t -i tcp:3000 | xargs kill -9```

2- Please check the `Doc folder` for more information & clarifying diagrams.