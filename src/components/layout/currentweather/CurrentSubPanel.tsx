type Props = {
    iconClass : string;
    panelName: string;
    panelStat: string;
}

const CurrentSubPanel = ({iconClass, panelName, panelStat}: Props) => {
    return <div className="current-sub-panel">
        <div className="current-sub-panel-left">
            <i className={iconClass}></i>
        </div>
        <div>
            <p className="current-sub-panel-rightop">{panelName}</p>
            <p className="current-sub-panel-righleft" style={{fontSize: "16pt"}}>{panelStat}</p>
        </div>
    </div>
}//const

export default CurrentSubPanel;