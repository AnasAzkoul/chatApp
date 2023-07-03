# cookie based authentication work flow:

## Main set up
- make sure to include the cookie-parser middleware in your api and don't forget to install cookie-parser lib and @types if you're using Typescript.
- make sure to instal jsonwebtoken lib and @types if you're using typescript.
- make sure to include the "origin" option and "credentials" option on the "cors" middleware.

## generate the cookie; 
- write the generateCookie function, using jsonwebtoken to generate a token and then attach the token as payload on the res.cookie;
  - set the option on the cookie as follows:
    - httpOnly: true,
    - maxAge: "to be determined",
    - sameSite: "strict",
    - secure: false <!--if you are not using https-->
- use the function in the register and sign-in controllers after:
    a- validate the body from the request
    b- hash the password
    c- create the user on the database
    d- check if the user is created, generate the cookie and attach it to the response
    e- send 201 response with some data if you want
- make sure to send requests from the client with "credentials" option enabled whether you're using the fetch api or axios.

## Now it's time to write the middleware that will check for the cookie with the incoming requests
