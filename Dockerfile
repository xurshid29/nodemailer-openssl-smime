ARG BUILD_PYTHON_VERSION=3.13
ARG BUILD_NODE_VERSION=18
ARG RUN_NODE_VERSION=18

###################################################################################################
FROM nikolaik/python-nodejs:python${BUILD_PYTHON_VERSION}-nodejs${BUILD_NODE_VERSION} AS buildstage

RUN apt-get update && \
    apt-get install -y build-essential && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app/
COPY . .

RUN npm ci
RUN npm run build

CMD ["cp", "-rfv", "/usr/src/app/prebuilds/linux-arm64/", "/mnt/prebuilds/"]
