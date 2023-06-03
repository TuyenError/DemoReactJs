import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Delete = () => {
    const { id } = useParams();

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            alert('Đã xóa sản phẩm thành công!');

            setTimeout(() => {
                window.location = 'http://localhost:3001/Show';
            }, 500);
        } catch (error) {
            console.log('Lỗi khi xóa sản phẩm:', error);
        }
    };

    useEffect(() => {
        handleDelete();
    }, []);

    return (
        <div>
        </div>
    );
};

export default Delete;