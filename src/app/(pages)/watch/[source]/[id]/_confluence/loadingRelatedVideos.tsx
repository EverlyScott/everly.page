const LoadingRelatedVideos: React.FC = () => {
  return (
    <>
      <p id="loading-related">Loading...</p>
      <noscript>
        <style dangerouslySetInnerHTML={{ __html: "#loading-related { display: none }" }} />
      </noscript>
    </>
  );
};

export default LoadingRelatedVideos;
