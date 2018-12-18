PipelineReact {
    projectName = 'project-name'
    slackChannel = '#ci-${projectName}'
    buildCommand = [
        master: 'npm install && npm test && npm run build:prod',
        stage: 'npm install && npm run build:stage',
        development: 'npm install && npm run build:dev',
    ]
    baseURL = '${projectName}-frontend'
    buildDir = 'build'

    bucketURL = [
        master: "gs://${baseURL}.ack.ee/",
        stage: "gs://frontend-stage.${projectName}.cz/",
        development: "gs://${baseURL}-development.ack.ee/",
    ]
    nodeEnv = '-e NODE_PATH=./app:./config'
    nodeImage = 'node:8'
    excludeDir = '.git'
}
