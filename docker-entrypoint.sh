#!/bin/sh

echo "Waiting for PG to start..."
echo "==========================="
sleep 10
./wait-for trackable-db-1:5432 

echo "Migrating the DB..."
echo "==========================="
sleep 10
npx prisma migrate deploy
npx prisma generate

echo "Starting the App..."
echo "==========================="
sleep 10
npm run build
npm run start


