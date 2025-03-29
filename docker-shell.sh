#!/bin/bash

set -e

export IMAGE_NAME="frontend-dashboard"

# Build the image based on the Dockerfile
docker build -t $IMAGE_NAME -f Dockerfile .

# Run the container
docker run --rm --name $IMAGE_NAME -ti -v "$(pwd)/:/app/" -p 3001:3000 $IMAGE_NAME

