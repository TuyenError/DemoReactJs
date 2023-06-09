import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class ShowTiki extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
        this.onSubmitHandle = this.onSubmitHandle.bind(this);


    }
    openModalAdd = () => {
        this.setState({ showModal: true });
    };

    closeModalAdd = () => {
        this.setState({ showModal: false });
    };

    async componentDidMount() {
        await axios.get("http://127.0.0.1:8000/api/get-productmid").then((res) => {
            this.setState(() => ({ products: res.data }));
        });
    }

    previewImage() {
        $(document).ready(function (e) {
            $("#inputImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-upload").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    }


    async onSubmitHandle(e) {
        e.preventDefault();

        const fd = new FormData();
        fd.append("uploadImage", this.state.fileUpload);

        if ($("#inputImage").val().split("\\")[2]) {
            await axios
                .post(`http://localhost:8000/api/upload-imagemid`, fd)
                .then((res) => {
                    alert('Bạn có chắc cập nhập sản phẩm');
                });
        }
        await axios
            .post(`http://localhost:8000/api/add-productmid`, {
                name: $("#inputName").val(),
                description: $("#inputDescription").val(),
                price: $("#inputPrice").val(),
                image: $("#inputImage").val().split("\\")[2],
                sale: $("#inputSale").val(),
                sold: $("#inputSold").val(),
            })
            .then((res) => {
                $("#inputImage").val("")
                alert("Thêm thành công");
                $("#closeModalAddBtn").click();
                this.componentDidMount();
            })
            .catch("Thêm không thành công");
    }


    handleChange = (file) => {
        this.setState({ fileUpload: file[0] });
    };


    render() {
        return (
            <div>
                {/* add product */}
                <div>
                    <div
                        className="modal"
                        id="modelAddProduct"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modelTitleId"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal Add Product</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        id="closeModalAddBtn"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form
                                        onSubmit={this.onSubmitHandle}
                                        encType="multipart/form-data"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="inputName">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="inputName"
                                                id="inputName"
                                                placeholder="Enter name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputPrice">Price</label>
                                            <input
                                                type="number"
                                                min={10000}
                                                className="form-control"
                                                name="inputPrice"
                                                id="inputPrice"
                                                placeholder="Enter price"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputSold">Sold</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="inputSold"
                                                id="inputSold"
                                                placeholder="Enter Sold"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputSale">Sale</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="inputSale"
                                                id="inputSale"
                                                placeholder="Enter Sale"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputImage">Image file</label>
                                            <input
                                                type="file"
                                                className="form-control-file"
                                                name="inputImage"
                                                id="inputImage"
                                                onChange={(e) => this.handleChange(e.target.files)}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <img
                                                id="preview-image-before-upload"
                                                src="https://www.riobeauty.co.uk/images/product_image_not_found.gif"
                                                alt="xem trước"
                                                style={{ maxHeight: 250 }}
                                            />
                                            {this.previewImage()}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="inputDescription">Description</label>
                                            <input
                                                type="text"
                                                name="inputDescription"
                                                id="inputDescription"
                                                className="form-control"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* show product */}
                <div className="container">
                    <button
                        type="button"
                        data-toggle="modal"
                        data-target="#modelAddProduct"
                        className="btn btn-primary"
                        style={{ width: 80 }}
                    >
                        Add
                    </button>
                    <div class="container">
                        <h1>Data Display</h1>
                        <div class="row">
                            {this.state.products.map((product) => (
                                <div class="col-md-3">
                                    <img src={`http://localhost:8000/source/image/product/${product.image}`} style={{ width: '200px', height: '200px' }}></img>
                                    <h2>{product.name}</h2>
                                    <p>{product.price}</p>
                                    <p>{product.sale}%</p>
                                    <p>{product.description}</p>
                                    <p>Đã bán: {product.sold}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ShowTiki;								
