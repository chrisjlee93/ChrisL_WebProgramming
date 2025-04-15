Consuming APIs (Third party = They)
1) THEY decide on the endpoints
2) THEY decide how data will be sent - JSON and XML
3) THEY decide how much data to send
4) THEY decide what the data will look like - structure

Building (Serving) APIs (We are the ones deciding)
1) WE decide on the endpoints
2) WE decide how data will be sent - JSON and XML
3) WE decide how much data to send
4) WE decide what the data will look like - structure

CRUD functional app (RCUD because reading data is the easiest thing to do)
NOTE: verbs and routes
Create
Read
Update
Delete
4 route handlers minimum

We are going to have the requirements be:
1) Whatever is sent back must be in JSON
2) Only allowed 2 endpoints:
   1) /api/bucket
   2) api/bucket/<id>

READ
1) WE decide on the endpoints - GET /api/bucket/
2) WE decide how data will be sent - JSON (because we said so above)
3) WE decide how much data to send - send back EVERYTHING
4) WE decide what the data will look like - structure - an array of objects

EXAMPLE DATA:
[
    {
        id: 1,
        description: "Learn PostgreSQL!!",
        isComplete: false,
    }
]

CREATE
1) Endpoints - POST /api/bucket
2) JSON
3) ONE thing - "receipt" from the DB
4) return ONE object

{
id: 1,
description: "Learn PostgreSQL!!",
isComplete: false,
}

DELETE
1) DELETE - /api/bucket/<id>
2) JSON
3) ONE thing - "receipt" from the DB
4) return ONE object

UPDATE
1) PUT - /api/bucket/<id>
2) JSON
3) ONE thing - "receipt" from the DB
4) return ONE object
