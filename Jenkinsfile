pipeline {
  agent any
  stages {
      stage('Verifying environment') {
          steps {
              sh 'bash ./scripts/node.sh'
          }
      }
      stage('Stopping old container') {
          steps {
              sh 'bash ./scripts/stop.sh'
          }
      }
      stage('Building the pages') {
          steps {
              sh 'bash ./scripts/build.sh'
          }
      }
      stage('Deploy') {
          steps {
              sh 'docker build .'
              sh 'docker-compose up'
          }
      }
  }
}