# Safe Boda NodeJs Take Home Assignment

## Indices

- [Auth](#auth)

  - [Create a new system User](#1-create-a-new-system-user)
  - [Get Admin User Details](#2-get-admin-user-details)
  - [Login user](#3-login-user)

- [Driver](#driver)

  - [Create a Driver](#1-create-a-driver)
  - [Get All Drivers](#2-get-all-drivers)
  - [Get All Drivers and select specific fields](#3-get-all-drivers-and-select-specific-fields)
  - [Get All Drivers and select specific fields with parameters](#4-get-all-drivers-and-select-specific-fields-with-parameters)
  - [Suspend a driver](#5-suspend-a-driver)
  - [Suspend a driver Reversal](#6-suspend-a-driver-reversal)

- [Passenger](#passenger)

  - [Create a Passenger](#1-create-a-passenger)
  - [Get all Passengers](#2-get-all-passengers)
  - [Get all Passengers and all URL parameters](#3-get-all-passengers-and-all-url-parameters)
  - [Get all Passengers and select parameters](#4-get-all-passengers-and-select-parameters)

- [Ride](#ride)

  - [Create a Ride](#1-create-a-ride)
  - [Get all Rides](#2-get-all-rides)
  - [Get all onGoing Rides](#3-get-all-ongoing-rides)

---

## Auth

### 1. Create a new system User

http://localhost:4000/api/v1/auth

Send the payload with user details and the roles can be defined in the enum of the User model

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:4000/api/v1/auth
```

**_Body:_**

```js
{
    "username":"axoblade",
    "contact":"0708379861",
    "password": "password",
    "email":"batte@mail.com"
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Create a new system User

**_Body:_**

```js
{
    "username":"axoblade",
    "contact":"0708379861",
    "password": "password",
    "email":"batte@mail.com"
}
```

##### I. Example Response: Create a new system User

```js
{
    "success": true,
    "msg": "SUCCESS",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQyMWNiOTk4N2ZmMWNhNjZlNzBiZCIsImlhdCI6MTY0OTY4MDg0NCwiZXhwIjoxNjUyMjcyODQ0fQ.gw_R06UfhYrNfRZ4Bz3fzYPCD5vpem3cifmOdAcuiBE"
    }
}
```

**_Status Code:_** 200

<br>

### 2. Get Admin User Details

http://localhost:4000/api/v1/auth/me

Supply a Bearer Token.
Token expiry can be configured in the env file

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/auth/me
```

**_More example Requests/Responses:_**

##### I. Example Request: Get Admin User Details

##### I. Example Response: Get Admin User Details

```js
{
    "success": true,
    "data": {
        "photo": "no-photo.png",
        "role": "admin",
        "_id": "625421cb9987ff1ca66e70bd",
        "contact": "0708379861",
        "email": "batte@mail.com",
        "createdAt": "2022-04-11T12:40:43.995Z",
        "__v": 0
    }
}
```

**_Status Code:_** 200

<br>

### 3. Login user

http://localhost:4000/api/v1/auth/login

You can login by either phone or email

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:4000/api/v1/auth/login
```

**_Headers:_**

| Key          | Value            | Description       |
| ------------ | ---------------- | ----------------- |
| Content-type | application/json | JSON Type headers |

**_Body:_**

```js
{
    "password": "password",
    "email": "batte@mail.com"
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Login user

**_Headers:_**

| Key          | Value            | Description       |
| ------------ | ---------------- | ----------------- |
| Content-type | application/json | JSON Type headers |

**_Body:_**

```js
{
    "password": "password",
    "email": "batte@mail.com"
}
```

##### I. Example Response: Login user

```js
{
    "success": true,
    "msg": "success",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTQyMWNiOTk4N2ZmMWNhNjZlNzBiZCIsImlhdCI6MTY0OTY4NTcwMywiZXhwIjoxNjUyMjc3NzAzfQ.CO4pk906lWArxcrnQkbFRjQb0qCO0t4NUwVi6_tsOaQ"
    }
}
```

**_Status Code:_** 200

<br>

## Driver

### 1. Create a Driver

http://localhost:4000/api/v1/driver

Provide a Bearer Token with the request

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:4000/api/v1/driver
```

**_Body:_**

```js
{
    "name" : "Batte Akhsam Driver",
    "contact" : "0708379861"
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Create a Driver

**_Body:_**

```js
{
    "name" : "Batte Akhsam Driver",
    "contact" : "0708379861"
}
```

##### I. Example Response: Create a Driver

```js
{
    "success": true,
    "msg": "SUCCESS",
    "driver": {
        "suspended": false,
        "_id": "62543cea121db7264f6d3efd",
        "name": "Batte Akhsam Driver",
        "contact": "0708379861",
        "createdAt": "2022-04-11T14:36:26.373Z",
        "__v": 0
    }
}
```

**_Status Code:_** 201

<br>

##### II. Example Request: Create a Driver Unauthorized Access

**_Body:_**

```js
{
    "name" : "Batte Akhsam Driver",
    "contact" : "0708379861"
}
```

##### II. Example Response: Create a Driver Unauthorized Access

```js
{
    "success": false,
    "msg": "Access Denied for this route"
}
```

**_Status Code:_** 401

<br>

### 2. Get All Drivers

http://localhost:4000/api/v1/driver

Provide Bearer Token in request

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/driver
```

**_More example Requests/Responses:_**

##### I. Example Request: Get All Drivers

##### I. Example Response: Get All Drivers

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 5,
        "records": [
            {
                "suspended": false,
                "available": true,
                "_id": "62543cea121db7264f6d3efd",
                "name": "Batte Akhsam Driver",
                "contact": "0708379861",
                "createdAt": "2022-04-11T14:36:26.373Z",
                "__v": 0
            },
            {
                "suspended": false,
                "available": true,
                "_id": "62543f9ef1267128c0b0a4d2",
                "name": "Batte Akhsam Driver 2",
                "contact": "0708379862",
                "createdAt": "2022-04-11T14:47:58.649Z",
                "__v": 0
            },
            {
                "suspended": false,
                "available": true,
                "_id": "62543fb6f1267128c0b0a4d5",
                "name": "Batte Akhsam Driver 3",
                "contact": "0708379863",
                "createdAt": "2022-04-11T14:48:22.593Z",
                "__v": 0
            },
            {
                "suspended": false,
                "available": true,
                "_id": "62543fbef1267128c0b0a4d8",
                "name": "Batte Akhsam Driver 4",
                "contact": "0708379864",
                "createdAt": "2022-04-11T14:48:30.266Z",
                "__v": 0
            },
            {
                "suspended": false,
                "available": true,
                "_id": "62543fc4f1267128c0b0a4db",
                "name": "Batte Akhsam Driver 5",
                "contact": "0708379865",
                "createdAt": "2022-04-11T14:48:36.767Z",
                "__v": 0
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 3. Get All Drivers and select specific fields

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/driver
```

**_Query params:_**

| Key    | Value          | Description |
| ------ | -------------- | ----------- |
| select | name,suspended |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get All Drivers and select specific fields

**_Query:_**

| Key    | Value          | Description |
| ------ | -------------- | ----------- |
| select | name,suspended |             |

##### I. Example Response: Get All Drivers and select specific fields

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 5,
        "records": [
            {
                "suspended": false,
                "_id": "62543cea121db7264f6d3efd",
                "name": "Batte Akhsam Driver"
            },
            {
                "suspended": false,
                "_id": "62543f9ef1267128c0b0a4d2",
                "name": "Batte Akhsam Driver 2"
            },
            {
                "suspended": false,
                "_id": "62543fb6f1267128c0b0a4d5",
                "name": "Batte Akhsam Driver 3"
            },
            {
                "suspended": false,
                "_id": "62543fbef1267128c0b0a4d8",
                "name": "Batte Akhsam Driver 4"
            },
            {
                "suspended": false,
                "_id": "62543fc4f1267128c0b0a4db",
                "name": "Batte Akhsam Driver 5"
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 4. Get All Drivers and select specific fields with parameters

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/driver
```

**_Query params:_**

| Key       | Value          | Description |
| --------- | -------------- | ----------- |
| select    | name,suspended |             |
| suspended | false          |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get All Drivers and select specific fields with parameters

**_Query:_**

| Key       | Value          | Description |
| --------- | -------------- | ----------- |
| select    | name,suspended |             |
| suspended | false          |             |

##### I. Example Response: Get All Drivers and select specific fields with parameters

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 5,
        "records": [
            {
                "suspended": false,
                "_id": "62543cea121db7264f6d3efd",
                "name": "Batte Akhsam Driver"
            },
            {
                "suspended": false,
                "_id": "62543f9ef1267128c0b0a4d2",
                "name": "Batte Akhsam Driver 2"
            },
            {
                "suspended": false,
                "_id": "62543fb6f1267128c0b0a4d5",
                "name": "Batte Akhsam Driver 3"
            },
            {
                "suspended": false,
                "_id": "62543fbef1267128c0b0a4d8",
                "name": "Batte Akhsam Driver 4"
            },
            {
                "suspended": false,
                "_id": "62543fc4f1267128c0b0a4db",
                "name": "Batte Akhsam Driver 5"
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 5. Suspend a driver

http://localhost:4000/api/v1/driver/<DRIVER_ID>/suspend

**_Endpoint:_**

```bash
Method: POST
Type:
URL: http://localhost:4000/api/v1/driver/62543cea121db7264f6d3efd/suspend
```

**_More example Requests/Responses:_**

##### I. Example Request: Suspend a driver

**_Status Code:_** 204

<br>

##### II. Example Request: Suspend a driver; driver not found

##### II. Example Response: Suspend a driver; driver not found

```js
{
    "success": false,
    "msg": "Driver not found"
}
```

**_Status Code:_** 404

<br>

### 6. Suspend a driver Reversal

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: http://localhost:4000/api/v1/driver/62543cea121db7264f6d3efd/suspend
```

**_More example Requests/Responses:_**

##### I. Example Request: Suspend a driver

**_Status Code:_** 204

<br>

##### II. Example Request: Suspend a driver; driver not found

##### II. Example Response: Suspend a driver; driver not found

```js
{
    "success": false,
    "msg": "Driver not found"
}
```

**_Status Code:_** 404

<br>

## Passenger

### 1. Create a Passenger

http://localhost:4000/api/v1/passenger

Protected route, please provide the Bearer Token

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:4000/api/v1/passenger
```

**_Body:_**

```js
{
    "name" : "Batte Akhsam Passenger 1",
    "contact" : "0708379812"
}
```

### 2. Get all Passengers

http://localhost:4000/api/v1/passenger

Protected route, please provide Bearer Token

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/passenger
```

**_More example Requests/Responses:_**

##### I. Example Request: Get all Passengers

##### I. Example Response: Get all Passengers

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1",
                "contact": "0708379812",
                "createdAt": "2022-04-11T15:29:19.114Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2",
                "contact": "0708379813",
                "createdAt": "2022-04-11T15:30:37.050Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3",
                "contact": "0708379814",
                "createdAt": "2022-04-11T15:30:44.636Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4",
                "contact": "0708379815",
                "createdAt": "2022-04-11T15:30:53.336Z",
                "__v": 0
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 3. Get all Passengers and all URL parameters

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/passenger
```

**_Query params:_**

| Key       | Value          | Description |
| --------- | -------------- | ----------- |
| select    | name,available |             |
| available | true           |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get all Passengers

##### I. Example Response: Get all Passengers

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1",
                "contact": "0708379812",
                "createdAt": "2022-04-11T15:29:19.114Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2",
                "contact": "0708379813",
                "createdAt": "2022-04-11T15:30:37.050Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3",
                "contact": "0708379814",
                "createdAt": "2022-04-11T15:30:44.636Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4",
                "contact": "0708379815",
                "createdAt": "2022-04-11T15:30:53.336Z",
                "__v": 0
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

##### II. Example Request: Get all Passengers and select parameters

**_Query:_**

| Key    | Value          | Description |
| ------ | -------------- | ----------- |
| select | name,available |             |

##### II. Example Response: Get all Passengers and select parameters

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1"
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2"
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3"
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4"
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

##### III. Example Request: Get all Passengers and all URL parameters

**_Query:_**

| Key       | Value          | Description |
| --------- | -------------- | ----------- |
| select    | name,available |             |
| available | true           |             |

##### III. Example Response: Get all Passengers and all URL parameters

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1"
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2"
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3"
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4"
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 4. Get all Passengers and select parameters

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/passenger
```

**_Query params:_**

| Key    | Value          | Description |
| ------ | -------------- | ----------- |
| select | name,available |             |

**_More example Requests/Responses:_**

##### I. Example Request: Get all Passengers

##### I. Example Response: Get all Passengers

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1",
                "contact": "0708379812",
                "createdAt": "2022-04-11T15:29:19.114Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2",
                "contact": "0708379813",
                "createdAt": "2022-04-11T15:30:37.050Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3",
                "contact": "0708379814",
                "createdAt": "2022-04-11T15:30:44.636Z",
                "__v": 0
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4",
                "contact": "0708379815",
                "createdAt": "2022-04-11T15:30:53.336Z",
                "__v": 0
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

##### II. Example Request: Get all Passengers and select parameters

**_Query:_**

| Key    | Value          | Description |
| ------ | -------------- | ----------- |
| select | name,available |             |

##### II. Example Response: Get all Passengers and select parameters

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 4,
        "records": [
            {
                "available": true,
                "_id": "6254494f120fb5310f2ce70d",
                "name": "Batte Akhsam Passenger 1"
            },
            {
                "available": true,
                "_id": "6254499d120fb5310f2ce710",
                "name": "Batte Akhsam Passenger 2"
            },
            {
                "available": true,
                "_id": "625449a4120fb5310f2ce713",
                "name": "Batte Akhsam Passenger 3"
            },
            {
                "available": true,
                "_id": "625449ad120fb5310f2ce716",
                "name": "Batte Akhsam Passenger 4"
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

## Ride

### 1. Create a Ride

http://localhost:4000/api/v1/ride/<PASSENGER_ID>/<DRIVER_ID>

This is a protected route, please supply the Bearer Token.

Pickup and Destination are supplied in the body

**_Endpoint:_**

```bash
Method: POST
Type: RAW
URL: http://localhost:4000/api/v1/ride/6254494f120fb5310f2ce70d/62543cea121db7264f6d3efd
```

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Create a ride successful response

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### I. Example Response: Create a ride successful response

```js
{
    "success": true,
    "msg": "SUCCESS",
    "data": {
        "passenger": [
            "6254494f120fb5310f2ce70d"
        ],
        "driver": [
            "62543cea121db7264f6d3efd"
        ],
        "pickupPoint": [
            32.0001,
            0.8722
        ],
        "destinationPoint": [
            32.0034,
            0.4332
        ],
        "status": "ongoing",
        "_id": "625455b10859e93813bbf600",
        "createdAt": "2022-04-11T16:22:09.934Z",
        "__v": 0
    }
}
```

**_Status Code:_** 201

<br>

##### II. Example Request: A passenger is only allowed one ride at a time

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### II. Example Response: A passenger is only allowed one ride at a time

```js
{
    "success": false,
    "msg": "Passenger Not available at the moment"
}
```

**_Status Code:_** 401

<br>

### 2. Get all Rides

**_Endpoint:_**

```bash
Method: GET
Type:
URL: http://localhost:4000/api/v1/ride
```

**_More example Requests/Responses:_**

##### I. Example Request: Create a ride successful response

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### I. Example Response: Create a ride successful response

```js
{
    "success": true,
    "msg": "SUCCESS",
    "data": {
        "passenger": [
            "6254494f120fb5310f2ce70d"
        ],
        "driver": [
            "62543cea121db7264f6d3efd"
        ],
        "pickupPoint": [
            32.0001,
            0.8722
        ],
        "destinationPoint": [
            32.0034,
            0.4332
        ],
        "status": "ongoing",
        "_id": "625455b10859e93813bbf600",
        "createdAt": "2022-04-11T16:22:09.934Z",
        "__v": 0
    }
}
```

**_Status Code:_** 201

<br>

##### II. Example Request: A passenger is only allowed one ride at a time

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### II. Example Response: A passenger is only allowed one ride at a time

```js
{
    "success": false,
    "msg": "Passenger Not available at the moment"
}
```

**_Status Code:_** 401

<br>

##### III. Example Request: Get all Rides

##### III. Example Response: Get all Rides

```js
{
    "success": true,
    "msg": "SUCCESS",
    "pagination": {},
    "data": {
        "count": 1,
        "records": [
            {
                "passenger": [
                    {
                        "available": false,
                        "_id": "6254494f120fb5310f2ce70d",
                        "name": "Batte Akhsam Passenger 1",
                        "contact": "0708379812"
                    }
                ],
                "driver": [
                    {
                        "available": false,
                        "_id": "62543cea121db7264f6d3efd",
                        "name": "Batte Akhsam Driver",
                        "contact": "0708379861"
                    }
                ],
                "status": "ongoing",
                "_id": "62545c6f66d1173b7dc7b1a7",
                "pickupPoint": [
                    32.0001,
                    0.8722
                ],
                "destinationPoint": [
                    32.0034,
                    0.4332
                ],
                "createdAt": "2022-04-11T16:50:55.185Z",
                "__v": 0
            }
        ]
    }
}
```

**_Status Code:_** 200

<br>

### 3. Get all onGoing Rides

**_Endpoint:_**

```bash
Method: GET
Type: RAW
URL: http://localhost:4000/api/v1/ride/rides/ongoing
```

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

**_More example Requests/Responses:_**

##### I. Example Request: Create a ride successful response

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### I. Example Response: Create a ride successful response

```js
{
    "success": true,
    "msg": "SUCCESS",
    "data": {
        "passenger": [
            "6254494f120fb5310f2ce70d"
        ],
        "driver": [
            "62543cea121db7264f6d3efd"
        ],
        "pickupPoint": [
            32.0001,
            0.8722
        ],
        "destinationPoint": [
            32.0034,
            0.4332
        ],
        "status": "ongoing",
        "_id": "625455b10859e93813bbf600",
        "createdAt": "2022-04-11T16:22:09.934Z",
        "__v": 0
    }
}
```

**_Status Code:_** 201

<br>

##### II. Example Request: A passenger is only allowed one ride at a time

**_Body:_**

```js
{
    "pickupPoint":[32.0001,0.8722],
    "destinationPoint":[32.0034,0.4332]
}
```

##### II. Example Response: A passenger is only allowed one ride at a time

```js
{
    "success": false,
    "msg": "Passenger Not available at the moment"
}
```

**_Status Code:_** 401

<br>

---

[Back to top](#safe-boda-nodejs-take-home-assignment)

> Made with &#9829; by [thedevsaddam](https://github.com/thedevsaddam) | Generated at: 2022-04-11 20:33:03 by [docgen](https://github.com/thedevsaddam/docgen)
