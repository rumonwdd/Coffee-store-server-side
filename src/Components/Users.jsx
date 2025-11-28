import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleLastDelete = (id) => {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      Users :{loadedUsers.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Time</th>
              <th>Last Loffed</th>
              <th>Last Login</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <th>{user._id}</th>
                <td>{user.email}</td>
                <td>{user.userTime}</td>
                <td>
                  {
                    <button
                      onClick={() => handleLastDelete(user._id)}
                      className="btn"
                    >
                      X
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
