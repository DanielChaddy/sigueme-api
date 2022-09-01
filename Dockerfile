FROM node:16.14.2-bullseye-slim
WORKDIR /workspace
COPY package.json yarn.lock /workspace/
COPY prisma ./prisma/
RUN yarn
RUN npx prisma generate
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]