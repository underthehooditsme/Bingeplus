# Binge+

> Binge+ is a semi-decentralized torrent like streaming network which uses Pravega streams as it's streaming engine. It distributes server load by using peer2peer streaming and provides better latencies by using peers that exist closeby and act as source for stream data.
It makes use of Pravega segments and in order guarantee to make sure the data received is correct and in an event of disconnection from peer streaming can resume from other peer or server from the point where streaming stopped.

#### Build Setup

``` bash
# install dependencies
yarn install

# serve app with hot reload
yarn run dev

# build electron application for production
yarn run build


# lint all JS/Vue component files in `src/`
yarn run lint

```

---

App starts and connects to server and also making a socketio connection with server so as to connect with other Bingeplus Apps.
-Receiing:
 list of videos/shows

User selects the show and makes a request.
-Receving list of active users viewing the same show/movie.

If the active users list for this movie is empty it makes a connects from server and streams from there.


If the active users list is not empty,
with socket connection it tries to make a connection to other nearby peers watching same movie.

If Connection starts it triggers a python script to start a pravega server to get the stream of data from other peers and thus streaming it,which can further be used to stream to other peers joining after some interval.

This network can grow like a mesh.

Thus,making each Client app a CDN reducing load on server and better utilization of resources.
