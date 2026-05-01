pipeline {
    agent any

    environment {
        IMAGE_NAME = "demo-app"
        CONTAINER_NAME = "demo-container"
        WORKSPACE_PATH = "/mnt/c/ProgramData/Jenkins/.jenkins/workspace/demoforpipeline"
    }

    stages {

        stage('Verify Files') {
            steps {
                bat 'wsl sh -c "cd $WORKSPACE_PATH && ls -l"'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'wsl sh -c "docker build -t $IMAGE_NAME -f $WORKSPACE_PATH/Dockerfile $WORKSPACE_PATH"'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'wsl sh -c "docker rm -f $CONTAINER_NAME || true"'
            }
        }

        stage('Run Container') {
            steps {
                bat 'wsl sh -c "docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME"'
            }
        }

        stage('Verify Running') {
            steps {
                bat 'wsl sh -c "docker ps"'
            }
        }
    }
}