import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Table = ({ list, deletePlayer }) => {
  const deleteData = (event) => {
    deletePlayer(event.target.id);
  };
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>설명</th>
          <th>백넘버</th>
          <th>키</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.no}</td>
            <td>{item.height}</td>
            <td>
              <button onClick={deleteData} id={item.id}>
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Create = ({ addPlayer }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [no, setNo] = useState("");
  const [height, setHeight] = useState("");
  const Submit = (event) => {
    event.preventDefault();
    addPlayer(name, desc, no, height);
    navigate("/");
    setName("");
    setDesc("");
    setNo("");
    setHeight("");
  };
  return (
    <div>
      <h2>플레이어 추가</h2>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="이름 입력"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">설명:</label>
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder="설명 입력"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">백넘버:</label>
          <input
            type="text"
            id="no"
            name="no"
            placeholder="백넘버 입력"
            value={no}
            onChange={(e) => setNo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">키:</label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="키 입력"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <input type="submit" value="추가" />
      </form>
    </div>
  );
};

const App = () => {
  const [id, setId] = useState(2);
  const [player, setPlayer] = useState([
    {
      id: 1,
      name: "리오넬 메시",
      desc: "바르셀로나 레전드",
      no: 10,
      height: "170cm",
    },
    {
      id: 2,
      name: "호날두",
      desc: "레알마드리드 레전드",
      no: 7,
      height: "185cm",
    },
  ]);

  const addPlayer = (name, desc, no, height) => {
    const newPlayer = {
      id: id + 1,
      name,
      desc,
      no,
      height,
    };
    setId(id + 1);
    setPlayer([...player, newPlayer]);
  };
  const deletePlayer = (id) => {
    const newList = player.filter((item) => item.id !== parseInt(id));
    setPlayer(newList);
  };
  return (
    <BrowserRouter>
      <div>
        <h1>플레이어</h1>
        <ul>
          <li>
            <Link to="/">목록</Link>
          </li>
          <li>
            <Link to="/create">추가</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={<Table list={player} deletePlayer={deletePlayer} />}
          />
          <Route path="/create" element={<Create addPlayer={addPlayer} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
