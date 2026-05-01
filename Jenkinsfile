pipeline {
    agent any

    stages {

        stage('Verify Files') {
            steps {
                bat 'wsl sh -c "cd /mnt/c/ProgramData/Jenkins/.jenkins/workspace/demoforpipeline && ls -l"'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'wsl sh -c "cd /mnt/c/ProgramData/Jenkins/.jenkins/workspace/demoforpipeline && docker build -t demo-app ."'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'wsl sh -c "docker rm -f demo-container || true"'
            }
        }

        stage('Run Container') {
            steps {
                bat 'wsl sh -c "docker run -d -p 3000:3000 --name demo-container demo-app"'
            }
        }

        stage('Verify Running') {
            steps {
                bat 'wsl sh -c "docker ps"'
            }
        }
    }
}