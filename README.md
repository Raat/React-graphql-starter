
###### Installation
```
git clone git@github.com:Raat/boilerplate.git
npm i
npm run storybook
```

###### start express server with webpack-dev-middleware
```
npm run start
```

###### Dockerfile is included!!
build docker inside the folder
```
docker build -t my-app .
```
start the container
```
docker run -d --name my-app -p 9000:9000 my-app
```

###### run tests
```
npm run mocha
```
