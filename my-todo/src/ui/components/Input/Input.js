import React from 'react';

// Style
import { input } from './input.module.scss'

function Input(props) {
    const { placeholder } = props;
    return (
        <div className="input-group">
        <input className="form-control text-capitalize" type="text" id="itemInput" placeholder="Name..."/>
        </div>

        <div className={input-group-append}>
            <button className={button button-green text-capitalize} type="submit">Add item</button>
        </div>

    <div className="item-list my-5">
        <div className="item my-3">
            <h5 className="item-name text-capitalize">js</h5>
            <div className="item-icons">
                <a href="#" className="complete-item mx-2 item-icon">
                    <i className="far fa-check-circle">
                        ::before
                    </i>
                </a>
                <a href="#" className="edit-item mx-2 item-icon">
                    <i className="far fa-edit">
                        ::before
                    </i>
                </a>
                <a href="#" className="delete-item item-icon">
                    <i className="far fa-times-circle">
                        ::before
                    </i>
                </a>
            </div>
        </div>
    </div>

    <button type="button" className="button button-green my-3 text-capitalize" id="clear-list">Clear Items</button>

);
}

export default Input;