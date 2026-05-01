pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t demo-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f demo-container || true'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p 3000:3000 --name demo-container demo-app'
            }
        }
    }
}