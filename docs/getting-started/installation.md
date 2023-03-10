---
sidebar_position: 2
---

# 🌱 Install FHIR Auth Server

### Clone the repository

First clone the repository using `git clone`

```bash
git clone https://github.com/zemantic/fhir-auth.git
```

### Install the dependencies

Install the necessary dependencies needed to run FHIR Auth

```bash
npm install
```

### Editing configuration settings

There are few more `.env` parameters that you will have to edit before running `FHIR Auth`. Find and rename the `env_example` file as `.env`, and add the following values.

| **Value**        | Description                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PORT**         | Set the port number where FHIR Auth server will be running, default `3000`                                                                                                                                       |
| **JWT_KEY**      | The JWT key that will be used to generate JWT string for authorization requests from the **clients**. Set a strong random string that is at least 48 characters strong.                                          |
| **JWT_USER_KEY** | This is the JWT key that will use to generate JWT string for users making API requests to the FHIR Auth server. Set a string random string that is at least 48 characters long and not similar to the `JWT_KEY`. |

### Connecting to the database

You will need to have `postgresql` installed on your computer and and empty database setup before running FHIR Auth. Open the `.env.` file using your favorite text editor and replace the `DATABASE_URL` parameter with the postgresql database connection string.

The database connection can be generated by replacing the values below with your database parameters.

```
postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
```

Learn more about database connection string this [StackOverflow](https://stackoverflow.com/questions/3582552/what-is-the-format-for-the-postgresql-connection-string-url) question.

After changing the `DATABASE_URL`, run the following commands to generate the tables in the database.

```bash
npx prisma generate
npx prisma migrate dev --name 'init'
```

### Running FHIR Auth

After above steps are complete, run FHIR Auth server by running the following command.

```bash
npm run serve
```

This will start the FHIR Auth server for development purposes on the desired port. You can access FHIR Auth server on `http://127.0.0.1:PORT`
