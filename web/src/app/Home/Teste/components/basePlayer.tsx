import React from 'react';

type VideoPlayerProps = {
    videoId: string;
    src: string
  };

export class VideoPlayer extends React.Component<VideoPlayerProps> {
    
  player: any;
  interval: NodeJS.Timeout | undefined = undefined
  script: HTMLScriptElement | undefined

  componentDidMount() {
    const { videoId } = this.props;
    
    this.script = document.createElement('script');
    this.script.async = true;

    //@ts-ignore
    window.pandascripttag = window.pandascripttag || [];
    //@ts-ignore
    window.pandascripttag.push(() => {
        //@ts-ignore
      this.player = new PandaPlayer(videoId, {
        onReady: () => {
            this.interval = setInterval(() => {
            const currentTime = this.player.getCurrentTime();
            console.log(`O tempo atual do vídeo ${videoId} é ${currentTime}`);
          }, 5000)
        }	
      })
    })

    document.body.appendChild(this.script);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    //@ts-ignore
    document.body.removeChild(this.script);
  }

  render() {
    const { videoId, src } = this.props;

    return (
      <iframe 
        id={videoId}
        src={src} 
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        className="w-30 h-full"
        allowFullScreen>
      </iframe>
    )
  }
}