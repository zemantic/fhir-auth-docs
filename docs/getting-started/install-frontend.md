---
sidebar_position: 3
---

# Install FHIR Auth Frontend

Due to ease maintainability, FHIR Auth server does not ship with a front end. The FHIR Auth frontend has to be installed and configured from a seperate repository.

FHIR Auth frontend is developed using VueJs and Vite.

### Clone the repositroy

Clone the repository from GitHub using `git clone`

```bash
git clone http://github.com/zemantic/fhir-auth-frontend
```

### Configure

Open the `example_env` file and rename it as `.env` and change the environment variables.

| **Value**         | Description                                     |
| ----------------- | ----------------------------------------------- |
| **VITE_SITE_URL** | Replace with the where you run FHIR Auth server |

### Run

```bash
npm run dev
```
