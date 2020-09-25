# docker-test
## How to Use it
```bash
$ git clone https://github.com/anthonyzng/docker-test.git
$ cd docker-test
$ docker build -t ant:1.0.0 .
$ docker run -dp 8888:8888 --name ant ant:1.0.0
```

Then go to http://localhost:8888 and see the result.
