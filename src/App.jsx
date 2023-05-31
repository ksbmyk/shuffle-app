import "./App.css";

const App = () => {
    return (
        <>
            <div className="input-area">
                <input placeholder="なまえ"></input>
                <button>エントリー</button>
            </div>
            <div className="member-area">
                <div className='list-row'>
                    <p className='title'>参加一覧</p>
                    <button>リセット</button>
                </div>
                <ul>
                    <li>
                        <div className='list-row'>
                            <p>Aチーム</p>
                            <button>やっぱやめ</button>
                        </div>
                    </li>
                    <li>
                        <div className='list-row'>
                            <p>Bチーム</p>
                            <button>やっぱやめ</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='member-area'>
                <p className='title'>順番</p>
                <ul>
                    <li>
                        <p>1. Bチーム</p>
                    </li>
                    <li>
                        <p>2. Aチーム</p>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default App;
