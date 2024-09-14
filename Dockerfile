# Usar una imagen base de Node.js
FROM node:20

# Establecer el directorio de trabajo
WORKDIR /home/app 

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Instalar las dependencias
RUN npm install 

# Comando para iniciar la aplicación
CMD ["node", "--watch", "app.js"]