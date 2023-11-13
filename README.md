# COMP445-Lab1b
## Description

#### The client side code is the index.html. This source file is an HTML file that serves as the front-end for a live video streaming application. It includes a video player and some JavaScript code to handle media recording and streaming to a server. The JavaScript code uses the MediaRecorder API to record video from the user's camera and sends the recorded video chunks to the server using a POST request. It also registers the MediaSource API to play the video in the third lab.
#### The getName() function generates a unique name for the stream based on the current time, which is used to identify the stream on the server. The permittedGetUserMedia() function checks if the user has granted access to the media devices on their device. The registerRecord() function registers the MediaRecorder to record the live video stream and sends the recorded chunks to the server using sendFile() function. It also sets the video codec to h264 and the bitrate to 5 Mbps.The processStream() function processes the live video stream and registers the media recorder. Lastly, the navigator.mediaDevices.getUserMedia() method is used to get access to the user's media devices, and the liveVideo element is set to the stream obtained from the user's camera. 

#### The server side code is contained in indes.js. This is a Node.js source file that creates an API for uploading and downloading video chunks. The file includes several required modules for handling file uploads, HTTP requests, and CORS. It sets up an Express app on port 3000 and defines two routes, one for uploading video chunks and another for downloading video chunks. The app uses middleware to enable CORS, body parsing, and file uploads. When a video chunk is uploaded, the server creates a directory with the given name (if it doesn't already exist) and saves the chunk as an MP4 file. When a video chunk is downloaded, the server reads the file and streams it back to the client.
## Getting Started
### Executing program

* Clone the repository
* Move the index.html outside the directory
* Install the dependencies 
* Run node index.js for the server 
* Run the index.html using live server
## Authors

| Name  | Student ID |
| ----- | ---------- |
| Antonio Reda  | 40155615  |
| Hamna Akhter | 40078011  |
