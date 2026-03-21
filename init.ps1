npx --yes create-vite@latest myapp --template react
Move-Item -Path "myapp\*" -Destination . -Force
Move-Item -Path "myapp\.*" -Destination . -Force
Remove-Item -Path "myapp" -Recurse -Force
npm install
npm install react-router-dom lucide-react
