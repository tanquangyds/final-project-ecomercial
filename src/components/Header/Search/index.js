import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default function Search() {
    const [keyWord, setKeyWord] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const onChangeKeyWord = e => {
        setKeyWord(e.target.value);
        if (e.target.value.trim() === '') {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }
    return (
        <div className="ground-search">
            <div className="main-search">
                <div className="from-search">
                    <div className="search">
                        <form>
                            <input
                                className="keyword-search"
                                onChange={onChangeKeyWord}
                                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                            />
                            <Link to={`/search/${keyWord.trim()}`} >
                                <button
                                    htmlType="submit"
                                    type="primary"
                                    disabled={isFormValid}
                                    className='btn-search'
                                >
                                    Search
                                </button>
                            </Link>
                        </form>
                    </div>
                    <div className="show-menu-1000" style={{ 'display': 'none' }}>
                        <i className="fa fa-search btn-show-search" />
                    </div>
                </div>
            </div>
        </div>
    )
}
