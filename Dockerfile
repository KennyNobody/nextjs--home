FROM node:20.19.1

WORKDIR /app

# Копируем package.json файлы
COPY package*.json ./

# Очищаем npm кэш и устанавливаем все зависимости
RUN npm cache clean --force
RUN npm ci

# Копируем исходный код
COPY . .

# Открываем порт
EXPOSE 3000

# Устанавливаем environment variables
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Запускаем в dev режиме
CMD ["npm", "run", "dev"]
