import videoExam from "../assets/videos/videoExam.mp4";

function VideoComponent({
  src = videoExam,
  width = 480,
  controls = true,
  loop = false,
  autoPlay = false,
  muted = false,
}) {
  return (
    <video
      src={src}
      width={width}
      controls={controls}
      loop={loop}
      autoPlay={autoPlay}
      muted={muted}
      playsInline
    />
  );
}
export default VideoComponent;
