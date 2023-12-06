import React from 'react';
import { VideoPlayer } from './basePlayer';

class Course extends React.Component {
  render() {
    //const { videos } = this.props; // Suponha que 'videos' seja uma array de IDs de vídeo

    return (
      <div>
          <VideoPlayer 
            key={"panda-39e3c9e1-c2b7-422c-8a83-4eb0420b9704"}
            videoId={"panda-39e3c9e1-c2b7-422c-8a83-4eb0420b9704"} 
            src={"https://player-vz-a96feb5d-e2d.tv.pandavideo.com.br/embed/?v=39e3c9e1-c2b7-422c-8a83-4eb0420b9704"} 
          />
      </div>
    )
  }
}

export default Course;