# Credix

_Build a simplified e-commerce platform using the CrediPay APIs. The result should be a checkout screen where users can complete their purchase with CrediPay_.

## Dependencies

Before starting, make sure you have the following installed:

- Docker: to manage containers.
- Docker Compose: to handle multi-container Docker applications.
- Node.js: to run npm commands locally if needed.

## Project Structure

```
├── back          # Contains the backend code and Docker configurations
├── front         # Contains the frontend code
├── .gitignore    # Files and directories to be ignored by Git
├── Makefile      # Script to automate commands for ease of use
├── README.md     # Documentation file (this file)
```

## Setting Up Environment Variables

To configure the environment for the backend, copy the following `.env` file content and place it in the root of the `back` directory:

```
CREDIPAY_API_KEY=OTAyNjUyNmUtMGNmZi00NjdmLTg2YzYtY2YxNDc5MjhlMTIyOml3V093ME52V2dUdVp6eUd5SWdqKysybXFGNHFRUXZCUWZOcnRIZnVtZHM9
CREDIPAY_API_URL=https://api.pre.credix.finance/v1/

BUYER_TAX_ID=26900161000125
SELLER_TAX_ID=37154724000108
SELLER_REF=REF-IMAGINARY-SELLER
TAX_AMOUNT_CENTS=5000
SHIPPING_COSTS_CENTS=5000

PORT=3000

DB_HOST=db
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=admin
DB_NAME=database

NODE_ENV=development

TYPEORM_CONNECTION=postgres
TYPEORM_HOST=${DB_HOST}
TYPEORM_PORT=${DB_PORT}
TYPEORM_USERNAME=${DB_USERNAME}
TYPEORM_PASSWORD=${DB_PASSWORD}
TYPEORM_DATABASE=${DB_NAME}
TYPEORM_SYNCHRONIZE=false
TYPEORM_LOGGING=true
```

To configure the environment for the frontend, copy the following `.env` file content and place it in the root of the `front` directory:
```
VITE_API_URL=http://localhost:3000
VITE_TAX_AMOUNT_CENTS=5000
VITE_SHIPPING_COSTS_CENTS=5000
```
## Setup
After cloning the repository and creating `.env` files on both folders:
### Backend
1. **Build up containers**: ``make back-up``
2. **Run migrations**: `m̀ake back-migrate`
3. **Run seeds**: `make back-seed`
4. **_Optional_**: Access `http://localhost:3000/api` route to get a swagger documentation

### Frontend
1. **Install dependencies**: ``make front-install``
2. **Run application**: `make front-dev`

## Considerations
In case of any questions or issues when running the application, please feel free to contact me through any means (email/phone)

Thanks! :)
