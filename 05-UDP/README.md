# UDP User Datagram Protocol
- UDP is a connectionless protocol. It is a simple protocol that is used when the amount of data to be transferred is small and the reliability of the data transfer is not important.

- UDP is used when the application requires fast, efficient transmission of data, such as games. It is also used in the Domain Name System (DNS) and in Voice over IP (VoIP) applications.

## Run and Test UDP Server and Client
- Open two terminal windows.
- In the first terminal window, run the UDP server:
  ```javascript
  $ node index.js 
  ```

- In the second terminal window, connect to the server and send message:
  ```bash
    $ nc -u 127.0.0.1 5500
    $ Hello UDP Server
    ```

- You should see the message received by the server in the first terminal window.


## Features of UDP
- Connectionless: UDP is a connectionless protocol. It does not establish a connection before sending data.
- Unreliable: UDP is an unreliable protocol as it does not guarantee the delivery of packets.
- No flow control: UDP does not provide flow control. It does not control the rate at which data is sent.
- No error checking: UDP does not provide error checking. It does not check for errors in the data.
- No congestion control: UDP does not provide congestion control. It does not control the rate at which data is sent.
- No retransmission of lost packets: UDP does not retransmit lost packets. It does not guarantee the delivery of packets.
- No sequencing of packets: UDP does not provide sequencing of packets. It does not guarantee the order of packets.
- No acknowledgment of received packets: UDP does not provide acknowledgment of received packets. It does not guarantee the delivery of packets.

## Advantages of UDP
- Fast: UDP is faster than TCP as it does not establish a connection before sending data.
- Efficient: UDP is more efficient than TCP as it does not provide flow control, error checking, congestion control, retransmission of lost packets, sequencing of packets, and acknowledgment of received packets.
- Lightweight: UDP is lightweight as it does not provide flow control, error checking, congestion control, retransmission of lost packets, sequencing of packets, and acknowledgment of received packets.
- Simple: UDP is simple as it does not provide flow control, error checking, congestion control, retransmission of lost packets, sequencing of packets, and acknowledgment of received packets.

## Disadvantages of UDP
- Unreliable: UDP is unreliable as it does not guarantee the delivery of packets.
- No flow control: UDP does not provide flow control. It does not control the rate at which data is sent.
- No error checking: UDP does not provide error checking. It does not check for errors in the data.
- No congestion control: UDP does not provide congestion control. It does not control the rate at which data is sent.
- No retransmission of lost packets: UDP does not retransmit lost packets. It does not guarantee the delivery of packets.
- No sequencing of packets: UDP does not provide sequencing of packets. It does not guarantee the order of packets.

## Applications of UDP
- Games: UDP is used in games as it provides fast, efficient transmission of data.
- Domain Name System (DNS): UDP is used in DNS as it provides fast, efficient transmission of data.
- Voice over IP (VoIP): UDP is used in VoIP applications as it provides fast, efficient transmission of data.
- Streaming media: UDP is used in streaming media applications as it provides fast, efficient transmission of data.
- Real-time communication: UDP is used in real-time communication applications as it provides fast, efficient transmission of data.
- Network management: UDP is used in network management applications as it provides fast, efficient transmission of data.
- Network monitoring: UDP is used in network monitoring applications as it provides fast, efficient transmission of data.

