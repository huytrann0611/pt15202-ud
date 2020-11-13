import React, { useState } from 'react'

const AddPost = ({ onAdd }) => {
    /*
    - Lấy giá trị của input (onchange) và gán giá trị vào state
    - Bắt sự kiện submit và bắn dữ liệu từ con lên cha
    - Dựa vào data thằng con thêm dữ liệu vào mảng
    */
    const [post, setPost] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value
        });
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        onAdd(post);
    }
    return (
        <div className="mt-10 w-1/2 mx-auto">
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text"
                    placeholder="Title"
                    onChange={onHandleChange}
                    name="title"
                />
                <br />
                <textarea onChange={onHandleChange} name="desc"></textarea>
                <button className="mt-4">Add</button>
            </form>
        </div>
    )
}

export default AddPost
