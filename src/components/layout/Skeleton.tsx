const Skeleton = () => {
    return <>
        <div className="container" id="div_skeleton">
            <p><i className="bi bi-hourglass" id="skeleton_spinner"></i> </p>
            <p>Loading weather data...</p>
        </div>
    </>
}

export default Skeleton;