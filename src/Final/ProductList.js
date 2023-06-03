import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    const getProduct = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <React.Fragment>
            <div>
                <div id="wrapper">
                    {/* <Wrapper /> */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="contentt">
                            {/* <Banner /> */}
                            <div className="btn-group mt-2 float-left a">
                                <NavLink className="navbar-brand mb-5 ml-4" to="/add-product">
                                    <button type="button" className="btn btn-warning" >
                                        <Link to={`/Add`}>Thêm Sản Phẩm</Link>
                                    </button>
                                </NavLink>
                            </div>
                            <div className="mt-3 float-left">

                            </div>
                            <table className="table table-bordered table-hover mt-6 ml-5">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Tên Sản Phẩm</th>
                                        <th className="text-center">Loại Sản Phẩm</th>
                                        <th className="text-center">Hình ảnh</th>
                                        <th className="text-center">Xuất xứ</th>
                                        <th className="text-center">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td className="text-center">{index + 1}</td>
                                            <td className="text-center">{product.name}</td>
                                            <td className="text-center">{product.name_category}</td>
                                            <td className="text-center">
                                                <img src={product.image} alt="Product" />
                                            </td>
                                            <td className="text-center">{product.origin}</td>
                                            <td>

                                                <button className='btn btn-warning'>
                                                    <Link to={`/Edit/${product.id}`}>Edit</Link>
                                                </button>

                                                <button className='btn btn-danger'>
                                                    <Link to={`/Delete/${product.id}`}>Delete</Link>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </React.Fragment>
    );
};

export default ProductList;
