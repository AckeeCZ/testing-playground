PipelineReact {
    projectName = 'Playground'
    slackChannel = '#ci-web'
    buildCommand = [
        master: 'npm install && npm run cypress:run && npm test && npm run build:prod',
    ]
    baseURL = 'playground'
    buildDir = 'build'

    bucketURL = [
        master: "gs://${baseURL}.ack.ee/",
    ]
    nodeEnv = '-e NODE_PATH=./app:./config'
    nodeImage = 'node:8'
    excludeDir = '.git'
}
