import "./App.css";
import { useState } from "react";

const App = () => {
    const [memberName, setMemberName] = useState('');
    const [members, setMembers] = useState(['Aチーム', 'Bチーム']);
    const [shuffleMembers, setShuffleMembers] = useState(['Bチーム', 'Aチーム']);

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

    return (
        <>
            <div className="input-area">
                <input placeholder="なまえ" value={memberName} onChange={onChangeMenberName}></input>
                <button id="add-button" onClick={onClickAdd}>エントリー</button>
            </div>
            <div className="member-area">
                <div className='list-row'>
                    <p className='title'>参加一覧</p>
                    <button>シャッフル</button>
                </div>
                <ul>
                    {members.map((member, index) => {
                        return (
                            <li key={member}>
                                <div className='list-row'>
                                    <p>{member}</p>
                                    <button onClick={()=> onClickDelete(index)}>やっぱやめ</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='member-area'>
                <p className='title'>順番</p>
                <ul>
                    {shuffleMembers.map((member, index) => {
                        return (
                        <li key={shuffleMembers}>
                            <p>{index + 1}. {member}</p>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default App;
