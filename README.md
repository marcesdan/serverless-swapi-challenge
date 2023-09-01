# Serverless SWAPI Code Challenge

This repository contains the code challenge for building a serverless application using Serverless Framework, TypeScript, AWS Lambda, and DynamoDB.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (16 LTS)
- [AWS CLI](https://aws.amazon.com/cli/) with AWS credentials configured

### Clone the Repository

```bash
git clone https://github.com/marcesdan/serverless-swapi-challenge
```

### Install Dependencies

```bash
    cd serverless-swapi-challenge
    npm install
```

### Run Locally

To run the application locally using serverless-offline and a local instance of DynamoDB, use the following command:

```bash
    npm run dev
```

This will start the local development server with.

- GET | http://localhost:3000/dev/vehicle
- GET | http://localhost:3000/dev/starship
- PUT | http://localhost:3000/dev/vehicle/{id}
- PUT | http://localhost:3000/dev/starship/{id}

## Deployment

Before deploying your application to AWS, make sure you have AWS credentials configured. If you haven't already, you can configure them using:

```bash
aws configure
```

### Deploy to AWS

Once your AWS credentials are configured, you can deploy the application using the following commands:

```bash
    npm run deploy
```

This will package and deploy your serverless application to AWS Lambda and set up the necessary resources.

Congratulations! Your serverless SWAPI code challenge application is now deployed and ready to use.
