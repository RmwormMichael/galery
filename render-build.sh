#!/usr/bin/env bash
set -o errexit

echo "📦 Instalando dependencias con npm ci..."
npm ci

echo "🏗️ Construyendo la aplicación con react-scripts..."
npm run build
