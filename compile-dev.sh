docker build -t blueapp/web:0.0.2 . &&
kubectl scale --replicas=0 deployment deployment --namespace=web &&
kubectl scale --replicas=2 deployment deployment --namespace=web
