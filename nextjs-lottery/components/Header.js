import {ConnectButton} from "web3uikit"


export default function Header(){
    return (
        <div className="p-5 border-b-2 flex flex-row">
            <h1>Decentralized Lottery</h1>
            <ConnectButton moralisAuth={false}/>
        </div>
    )
}