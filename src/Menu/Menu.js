import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            price: "",
            money: "",
        }
    }

    checkOrder = (money) => {
        if (money >= this.state.price) {
            alert("Đồ uống của bạn đây " + this.state.type + '\n Số tiền dư: ' + (money - this.state.price) + "đ")
        } else {
            alert('Không đủ tiền')
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        if (this.state.type == '') {
            alert("Vui lòng chọn đồ uống");
        } else {
            if (this.state.money =='') {
                alert("Vui lòng nhập số tiền của bạn")
            } else {
                this.checkOrder(this.state.money)
            }
        }
    }

    setHandlel = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == 'money') {
            if (!Number(value)) {
                alert("Nhập số và bạn ơi")
            }
        }
        if (name == 'type') {
            if (value == "Caffee sữa") {
                this.setState({ price: 12000 })
            }
            else if (value == "Caffee đá") {
                this.setState({ price: 10000 })
            }
            else if (value == "Sting dâu") {
                this.setState({ price: 8000 })
            }
            else {
                this.setState({ price: 2000 })
            }
        }
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Mời chọn thức uống: </td>
                                <td>
                                    <select name="type" onChange={this.setHandlel}>
                                        <option selected hidden >Mời chọn</option>
                                        <option value="Caffee sữa" >Caffee Sữa</option>
                                        <option value="Caffee đá" >Caffee đá</option>
                                        <option value="Sting dâu" >Sting dâu</option>
                                        <option value="Trà đá" >Trà đá</option>
                                    </select>
                                </td>
                                <td><label> Price:{this.state.price}</label>
                                </td>
                            </tr>
                            <tr>Mời bạn nhập số tiền của bạn: </tr>
                            <td>
                                <input name="money" type="number" onChange={this.setHandlel}></input>
                            </td>
                        </tbody>
                    </table>
                    <input type="submit" value="Thanh toán"></input>
                </form>
                <h2></h2>
            </div>
        );
    }
}

export default Menu;

// dùng if để sử lý số tiền dựa vào nước uống
//Chọn thực đơn
// giá tiền
// Tiền của bạn:
// Kết quả là giá tiền