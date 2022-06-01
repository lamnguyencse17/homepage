docker-compose down
docker stop $(docker ps -aqf name="homepage*") || exit 0
docker rm $(docker ps -aqf name="homepage*")