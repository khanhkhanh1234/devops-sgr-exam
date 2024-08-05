# Build stage
FROM node:18 as build
WORKDIR /
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Production stage
FROM build as production
WORKDIR /
COPY --from=build /dist .
CMD ["pnpm", "start"]