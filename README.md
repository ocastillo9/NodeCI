# AdvancedNodeStarter
Starting project for a course on Advanced Node @ Udemy

docker run --name node-mongo -p 27017:27017 -v /home/ocastillo/IdeaProjects/intive/nodeCourse/mongo-demo/db:/data/db -d mongo
docker run --name node-redis -p 6379:6379 redis:latest



docker start node-mongo
docker start node-redis