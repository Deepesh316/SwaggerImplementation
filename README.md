# SwaggerImplementation

Document an API created with node.js express application using swagger tools

![Swagger UI](https://i.imgur.com/Rtue2ki.png)

![Swagger UI](https://i.imgur.com/kDS4x27.png)

How to create & run dockerized application

docker ps -a => Container Id

docker images -a => Image

docker build --tag="nodeswagdocker:latest" -f Dockerfile . => Build docker image using Dockerfile

docker run -it -p 9000:3000 nodeswagdocker => Run docker container
