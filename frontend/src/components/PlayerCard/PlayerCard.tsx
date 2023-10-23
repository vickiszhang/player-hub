interface PlayerDescription {
    name: string;
    message: string;
}

export default function PlayerCard(props: PlayerDescription) {
    return(
        <>
            <div id="playerCard">
                <h1 id="playerName">{props.name}</h1>
                <p id="playerMessage">{props.message}</p>
            </div>
        </>
    )
}