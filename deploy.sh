set -e

echo "Pulling latest code ..."
git pull origin main

echo "installing dependencies..."
npm install 

echo "Buillding app..."
npm run build 

echo "Reloading nginx..."
sudo systemctl reload nginx 

echo "Deploy finished"
