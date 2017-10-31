# RPI - WebTorrent

![Raspberry PI+ Docker](raspberry-pi-docker.png)

A Raspberry PI docker container to download torrents. The torrent engine is [TrasmissionBT](https://transmissionbt.com/). I decided to create this UI to be more friendly and a bit more beautiful.

This is an [Arm32V7/NodeJS](https://hub.docker.com/r/arm32v7/node/) container with Transmission installed and a React App + Redux + Material-UI as the web interface.

## Recommendations

I sugest you to read this article(s):
-  [Getting started with Docker on your Raspberry Pi](https://blog.hypriot.com/getting-started-with-docker-on-your-arm-device/?utm_source=rpi-webtorrent)
- [Docker comes to Raspberry Pi](https://www.raspberrypi.org/blog/docker-comes-to-raspberry-pi/?utm_source=rpi-webtorrent)
- [Redux Core Concepts](http://redux.js.org/docs/introduction/CoreConcepts.html)


## Roadmap

- [ ] Handle user login
- [ ] Show in real-time (almost) the torrents progress
- [ ] Handle addTorent
- [ ] Show global dowload / upload stats
- [ ] Handle removeSelectedTorrents
- [ ] Handle pauseSelectedTorrents
- [ ] handle pauseAllTorrents
- [ ] handle startAllTorrents
- [ ] handle stopThisTorrent
- [ ] handle playThisTorrent
- [ ] Get the torrent list from the API
- [ ] Create search filters
- [ ] Create settings dialog
- [ ] Handle torrent informations dialog (double click or button)