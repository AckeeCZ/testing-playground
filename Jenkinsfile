PipelineReact {
    projectName = 'Playground'
    slackChannel = '#ci-${projectName}'
    buildCommand = [
        master: 'npm install && npm test && npm run build:prod',
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
