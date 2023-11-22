FROM node:18-alpine as build

# Nastavení pracovního adresáře
WORKDIR /app

# Nakopírování souboru package.json a package-lock.json
COPY package*.json ./

# Instalace závislostí
RUN npm install

# Nakopírování zbytku projektu do kontejneru
COPY . .

# Stavba projektu pro produkci
RUN npm run build

# Druhý fáze pro vytvoření menšího image
FROM node:18-alpine

# Nastavení pracovního adresáře
WORKDIR /app

# Nakopírování buildu ze první fáze
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json .
COPY --from=build /app/.env.production .env.production
COPY --from=build /app/data ./data
COPY --from=build /app/node_modules ./node_modules

# Nastavení prostředí na produkční
ENV NODE_ENV production

# Nastavení portu, na kterém bude aplikace běžet
ENV PORT 3000

# Vystavení portu, který používá Next.js
EXPOSE 3000

# Spuštění aplikace
CMD ["npm", "start"]