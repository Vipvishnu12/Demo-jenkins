pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'wsl docker build -t demo-app .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'wsl docker rm -f demo-container || true'
            }
        }

        stage('Run Container') {
            steps {
                bat 'wsl docker run -d -p 3000:3000 --name demo-container demo-app'
            }
        }

        stage('Verify') {
            steps {
                bat 'wsl docker ps'
            }
        }
    }
}