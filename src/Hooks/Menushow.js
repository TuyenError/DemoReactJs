import React, { useState } from 'react';

const Menushow = () => {
    const [type, setType] = useState("");
    const [price, setPrice] = useState(0);
    const [money, setMoney] = useState(0);

    const checkOrder = (money) => {
        if (money >= price) {
            alert("Đồ uống của bạn đây " + type + '\n Số tiền dư: ' + (money - price) + "đ")
        } else {
            alert('Không đủ tiền')
        }
    }

    const submitForm = (event) => {
        event.preventDefault();
        if (price == 0) {
            alert("Vui lòng chọn đồ uống");
        } else {
            if (money == 0) {
                alert("Vui lòng nhập số tiền của bạn")
            } else {
                checkOrder(money)
            }
        }
    }

    const setHandlel = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name == 'money') {
            if (!Number(value)) {
                alert("Nhập số và bạn ơi")
            }
        }
        if (name === 'type') {
            if (value == "Caffee sữa") {
                setPrice(12000);
            }
            else if (value == "Caffee đá") {
                setPrice(10000);
            }
            else if (value == "Sting dâu") {
                setPrice(8000);
            }
            else {
                setPrice(2000);
            }
        }
        setType(value);
        setMoney(Number(money));
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <table>
                    <tbody>
                        <tr>
                            <td>Mời chọn thức uống: </td>
                            <td>
                                <select name="type" onChange={setHandlel}>
                                    <option selected hidden >Mời chọn</option>
                                    <option value="Caffee sữa" >Caffee Sữa</option>
                                    <option value="Caffee đá" >Caffee đá</option>
                                    <option value="Sting dâu" >Sting dâu</option>
                                    <option value="Trà đá" >Trà đá</option>
                                </select>
                            </td>
                            <td><label> Price:{price}</label>
                            </td>
                        </tr>
                        <tr>Mời bạn nhập số tiền của bạn: </tr>
                        <td>
                            <input name="money" type="number" onChange={setHandlel}></input>
                        </td>
                    </tbody>
                </table>
                <input type="submit" value="Thanh toán"></input>
            </form>
            <h2></h2>
        </div>
    );
}

export default Menushow;