pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/Vipvishnu12/Demo-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                bat 'node app.js'
            }
        }
    }
}