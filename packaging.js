name: Industrialisation continue sur le serveur AWS (Tomcat)
on: push
jobs:
  Deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - run: |
          jar cvf group3.war * && ls
  
