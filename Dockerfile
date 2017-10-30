FROM arm32v7/node
MAINTAINER herlon214@gmail.com

RUN apt update -y
RUN apt install -y transmission-daemon
RUN npm i -g serve
COPY . /opt/app
WORKDIR /opt/app
CMD /etc/init.d/transmission-daemon start && serve -s build -p 3000
