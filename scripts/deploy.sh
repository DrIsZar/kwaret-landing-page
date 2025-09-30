#!/bin/bash

# Kwaret TN Landing Page Deployment Script

echo "🚀 Deploying Kwaret TN Landing Page..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "1. Upload the files to your hosting provider"
    echo "2. Make sure to include the .next folder and public folder"
    echo "3. Set up your domain and SSL certificate"
    echo "4. Update social links in lib/socials.ts"
    echo "5. Replace placeholder images in public/ folder"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
