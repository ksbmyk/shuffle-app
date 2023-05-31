import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [memberName, setMemberName] = useState('');
    const [members, setMembers] = useState([]);
    const [shuffledMembers, setShuffledMembers] = useState([]);
    const [isShuffled, setIsShuffled] = useState(false);

    const onChangeMenberName = (event) => {
        setMemberName(event.target.value);
    };
    const onClickAdd = () => {
        if (memberName === '') return;
        const newMembers = [...members, memberName];
        setMembers(newMembers);
        setMemberName('');
    };

    const onClickDelete = (index) => {
        const newMembers = [...members];
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    const onClickshuffle = () => {
        setShuffledMembers([]);
        const resultMembers = [...members].sort(() => Math.random() - 0.5);
        setShuffledMembers(resultMembers);

        if (isShuffled === false) {
            setIsShuffled(true);
        };
    };

    const onClickReset = () => {
        setMembers([]);
        setShuffledMembers([]);
        setIsShuffled(true);
    }

    return (
        <>
            <div className="input-area">
                <input placeholder="なまえ" value={memberName} onChange={onChangeMenberName}></input>
                <button id="add-button" onClick={onClickAdd}><FontAwesomeIcon icon={faEdit} />エントリー</button>
                <button id="add-button" onClick={onClickReset}><FontAwesomeIcon icon={faTrash} />リセット</button>
            </div>
            <div className="member-area">
                <div className='list-row'>
                    <p className='title'>参加一覧</p>
                    <button onClick={onClickshuffle}>
                        <FontAwesomeIcon icon={faRetweet} />
                        {isShuffled ? "もう一回" : "シャッフル"}
                    </button>
                </div>
                <ul>
                    {members.map((member, index) => {
                        return (
                            <li key={member}>
                                <div className='list-row'>
                                    <p>{member}</p>
                                    <button onClick={()=> onClickDelete(index)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='shuffled-area'>
                <p className='title'>順番</p>
                <ul>
                    {shuffledMembers.map((member, index) => {
                        return (
                            <li key={member}>
                                <p style={{fontWeight: 'bold'}}>{index+1}. {member}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default App;
