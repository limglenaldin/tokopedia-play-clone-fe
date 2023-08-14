# TokoPlay

TokoPlay is a frontend of Tokopedia Play clone built by ReactJS (Vite) and Chakra UI. For the backend service can be check on [this repo](https://github.com/limglenaldin/tokopedia-play-clone)

## Features
- List of Videos
- Detail of each video
- Live Comment using SocketIO
- Search video
- Dynamic Username

## Database Schema

```mermaid
    erDiagram
        videos {
            ObjectID _id
            string title
            string store
            string thumbnailUrl
            string videoUrl
            number totalView
            timestamp createdAt
            timestamp updatedAt
        }

        products {
            ObjectID _id
            String videoId
            string title
            string link
            string imageUrl
            number price
            timestamp createdAt
            timestamp updatedAt
        }

        comments {
            ObjectID _id
            String videoId
            string username
            string comment
            timestamp createdAt
            timestamp updatedAt
        }
```



## Running the Frontend

### Running directly via terminal (npm)

#### Prerequsited
- Have installed NodeJS v18 on the machine
- Have running backend service on local machine

#### Step to Run
1. Clone the repo to your local machine
   ```
   git clone git@github.com:limglenaldin/tokopedia-play-clone-fe.git
   ```
2. Change the directory
   ```
   cd tokopedia-play-clone-fe
   ```
4. Create `.env` file by running `cp .env.example .env`
5. Install dependencies and start the development server
   ```
   npm install
   npm run dev
   ```
6. Finally, It can be access on `http://localhost:3000`

### Running via Docker Compose

#### Prerequsited
- Have installed docker on the machine
- Have installed `make` on terminal

#### Step to Run
1. Clone the repo to your local machine
   ```
   git clone git@github.com:limglenaldin/tokopedia-play-clone-fe.git
   ```
2. Change the directory
   ```
   cd tokopedia-play-clone-fe
   ```
3. Compose Docker Container and wait until done
   ```
   docker-compose -f docker-compose.yml up --build -d
   ```
   or if has installed `make`
   ```
   make compose-up
   ```
4. Finally, it can be access on `http://localhost:3000`