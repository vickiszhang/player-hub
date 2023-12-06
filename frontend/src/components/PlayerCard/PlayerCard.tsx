import "./PlayerCard.css"

interface PlayerDescription {
    name: string;
    message: string;
}

export default function PlayerCard(props: PlayerDescription) {
    return(
        <>
            <div id="player-card">
                <div className="card-left">
                    <div className="player-profile-pic"></div>
                    <div className="card-left-info">
                        <h1 className="player-name">{props.name}</h1>
                        <p className="player-messge">{props.message}</p>
                    </div>
                </div>
                <div className="card-right"></div>
            </div>
        </>
    )
}