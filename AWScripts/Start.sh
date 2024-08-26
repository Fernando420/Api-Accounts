#!/bin/bash

chmod -R 777 /home/ubuntu/ms-stp
chmod -R 777 /home/ubuntu/awslogs

if [ -e /home/ubuntu/awslogs/foreman.log ]
then
   rm /home/ubuntu/awslogs/foreman.log
fi

if [ -e /home/ubuntu/awslogs/foreman.err ]
then
   rm /home/ubuntu/awslogs/foreman.err
fi

cd /home/ubuntu/ms-stp

echo "En directorio de la app..."

source ~/.bashrc
source /etc/environment
source /etc/profile

if [ -n "$STAGING_MODE" ] ; then
   echo "Cargando variables de staging"
   set -a
   . ./.env_staging
   set +a  
else
   echo "Cargando variables de production"
   set -a
   . ./.env_production 
   set +a
fi

echo "Se cargaron variables..."

npm install
 echo "Ya se instalo dependencias..."

nohup nf start dev=1  > /home/ubuntu/awslogs/foreman.log 2> /home/ubuntu/awslogs/foreman.err < /dev/null &

echo "Ya corrio..."
chmod -R 777 /home/ubuntu/awslogs
service awslogs restart  

