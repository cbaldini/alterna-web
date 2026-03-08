#!/bin/bash

# Alterna Medios - Local Server Setup
# Este script inicia un servidor local para probar el sitio

echo "🚀 Iniciando servidor local para Alterna Medios..."
echo ""

# Detectar si está instalado Python o Node
if command -v python3 &> /dev/null; then
    echo "✅ Usando Python 3"
    echo "📍 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    python3 -m http.server 8000

elif command -v python &> /dev/null; then
    echo "✅ Usando Python 2"
    echo "📍 Abre tu navegador en: http://localhost:8000"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    python -m SimpleHTTPServer 8000

elif command -v node &> /dev/null; then
    echo "✅ Usando Node.js con http-server"

    # Instalar http-server si no está instalado
    if ! command -v http-server &> /dev/null; then
        echo "Instalando http-server..."
        npm install -g http-server
    fi

    echo "📍 Abre tu navegador en: http://localhost:8080"
    echo ""
    echo "Presiona Ctrl+C para detener el servidor"
    echo ""
    http-server -p 8080 -o

else
    echo "❌ Error: No se encontró Python ni Node.js"
    echo ""
    echo "Por favor, instala uno de los siguientes:"
    echo "  - Python: https://www.python.org"
    echo "  - Node.js: https://nodejs.org"
    exit 1
fi

