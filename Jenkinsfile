pipeline {
  agent any
  environment {
    KUBECONFIG = '/var/jenkins_home/.kube_rw/config'
  }
  stages {
    stage('Clone Repo') {
      steps {
        echo 'Code cloned from SCM'
        checkout scm
      }
    }
    stage('Build Docker Image') {
      steps {
        sh 'docker build -t devops-app .'
      }
    }
    stage('Load into Minikube') {
      steps {
        sh 'minikube image load devops-app'
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
    stage('Verify Deployment') {
      steps {
        sh 'kubectl get pods'
        sh 'kubectl get services'
        sh 'kubectl rollout status deployment/devops-app'
      }
    }
  }
  post {
    success {
      echo '✅ Pipeline completed successfully!'
    }
    failure {
      echo '❌ Pipeline failed - check logs above'
    }
  }
}
