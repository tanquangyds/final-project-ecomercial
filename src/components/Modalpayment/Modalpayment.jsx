import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import {
    Empty,
    Tooltip,
    message,
    Drawer,
    Button,
    Form,
    Input,
    Select,
    InputNumber,
  } from "antd";


export default function Modal(props) {
    const { Option } = Select;
    const { TextArea } = Input;
    const [form] = Form.useForm();
  
    const dataCity = ["Hà Nội", "Đà Nẵng", "TP HCM"];
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const [city, setCity] = useState("");
  
    const [district, setDistrict] = useState("");
    const onFinish = (values) => {
      const {
        city,
        district,
        commune,
        incubation,
        numberPhome,
        payment,
      } = values;
      alert(values);
    };
    const onClose = () => {
      setVisible(false);
    };
    const onChangeCity = (City) => {
      setCity(City);
    };
    const onChangeDistrict = (District) => {
      setDistrict(District);
    };
    return (
        <div>
            <Drawer     
            title="Thông tin nhận hàng"
            width={600}
            placement="right"
            closable={false}
            onClose={props.checkclose}
            visible={props.checkvisible}>
                  <Form form={form} onFinish={onFinish}>
                          <Form.Item
                            name="city"
                            label="Tỉnh/Thành phố"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message:
                                  "Vui lòng chọn tỉnh hoặc thành phố bạn ở !",
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              placeholder="Tỉnh/Thành phố"
                              optionFilterProp="children"
                              onChange={onChangeCity}
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {dataCity.map((city, index) => (
                                <Option value={city.name} key={index}>
                                  {city.name}
                                </Option>
                              ))}
                            </Select>
                          </Form.Item>
                          <Form.Item
                            name="district"
                            label="Quận/Huyện"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message:
                                  "Vui lòng chọn quận hoặc huyện nơi bạn !",
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              placeholder="Quận/Huyện"
                              optionFilterProp="children"
                              onChange={onChangeDistrict}
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {dataCity.map(
                                (city, index) => (
                                  <Option value={city} key={index}>
                                    {city}
                                  </Option>
                                )
                                // (itemCity, index) =>
                                //   itemCity.name === city &&
                                //   itemCity.huyen.map((huyen) => (
                                //     <Option value={huyen.name} key={index}>
                                //       {huyen.name}
                                //     </Option>
                                //   ))
                              )}
                            </Select>
                          </Form.Item>
                          <Form.Item
                            name="commune"
                            label="Xã/Thị Trấn"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng chọn xã bạn ở !",
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              placeholder="Xã/Thị Trấn"
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                option.children
                                  .toLowerCase()
                                  .indexOf(input.toLowerCase()) >= 0
                              }
                            >
                              {dataCity.map(
                                (city, index) => (
                                  <Option value={city} key={index}>
                                    {city}
                                  </Option>
                                )
                                // (itemCity) =>
                                //   itemCity.name === city &&
                                //   itemCity.huyen.map(
                                //     (huyen) =>
                                //       huyen.name === district &&
                                //       huyen.xa.sort().map((xa, index) => (
                                //         <Option value={xa.name} key={index}>
                                //           {xa.name}
                                //         </Option>
                                //       ))
                                //   )
                              )}
                            </Select>
                          </Form.Item>
                          <Form.Item
                            name="incubation"
                            label="Ấp/Số Nhà/Tên Đường"
                            rules={[
                              {
                                required: true,
                                message: "Địa chỉ cụ thể !",
                              },
                            ]}
                          >
                            <TextArea
                              placeholder="địa chỉ cụ thể: ấp, số nhà, tên đường..."
                              rows={4}
                            />
                          </Form.Item>
                          <Form.Item
                            name="numberPhome"
                            label="Số Điện Thoại"
                            className="group-phone"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng nhập đúng số điện thoại !",
                              },
                            ]}
                          >
                            <InputNumber type="number" />
                          </Form.Item>
                          <Form.Item
                            name="payment"
                            label="Thanh toán"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Vui lòng chọn phuong thức thanh toán",
                              },
                            ]}
                          >
                            <Select placeholder="Thanh toán khi nhận hàng">
                              <Option value="Thanh toán khi nhận hàng">
                                Thanh toán khi nhận hàng
                              </Option>
                            </Select>
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              className="btn-register"
                            >
                              Hoàn tất
                            </Button>
                          </Form.Item>
                        </Form>
            </Drawer>
        </div>
    )
}
