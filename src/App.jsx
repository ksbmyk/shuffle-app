import "./App.css";
import { useState } from "react";

const App = () => {
    const [menberName, setMenberName] = useState('');
    const [menbers, setMenbers] = useState(['Aチーム', 'Bチーム']);
    const [shuffleMenbers, setShuffleMenbers] = useState(['Bチーム', 'Aチーム']);

    const onChangeMenberName = (event) => {
        setMenberName(event.target.value);
    }

    return (
        <>
            <div className="input-area">
                <input placeholder="なまえ" value={menberName} onChange={onChangeMenberName}></input>
                <button id="add-button">エントリー</button>
            </div>
            <div className="member-area">
                <div className='list-row'>
                    <p className='title'>参加一覧</p>
                    <button>リセット</button>
                </div>
                <ul>
                    {menbers.map((menber) => {
                        return (
                            <li key={menber}>
                                <div className='list-row'>
                                    <p>{menber}</p>
                                    <button>やっぱやめ</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='member-area'>
                <p className='title'>順番</p>
                <ul>
                    {shuffleMenbers.map((menber, index) => {
                        return (
                        <li key={shuffleMenbers}>
                            <p>{index + 1}. {menber}</p>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default App;
