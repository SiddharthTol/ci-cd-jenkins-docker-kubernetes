pipeline {
  agent any
  environment {
    KUBECONFIG = '/var/jenkins_home/.kube_rw/config'
    PATH = "/usr/local/bin:/usr/bin:/bin:${PATH}"
    MINIKUBE_HOME = '/tmp'
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
        sh '''
          docker save devops-app | \
          docker exec -i minikube docker load
        '''
      }
    }
    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl apply -f k8s/'
      }
    }
    stage('Verify Deployment') {
      steps {
        sh 'kubectl rollout status deployment/devops-app'
        sh 'kubectl get pods'
        sh 'kubectl get services'
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
