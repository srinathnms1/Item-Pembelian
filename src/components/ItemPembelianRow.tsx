import React from 'react';
import { IItemPembelianRowProps } from './ItemPembelianComponent';
import { v4 as uuid } from 'uuid';

const ItemPembelianRow = (props: IItemPembelianRowProps) => {
    const { product, index, items, bys, onRemoveProducts, onProductChange } = props;
    return (
        <tr key={index}>
            <td>
                <div className="input-group mb-3">
                    <div className="btn-group">
                        <input type="text" name="item" readOnly value={product.item ? product.item : items[0]} className="form-controls custom-selection" />
                        <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="fa fa-angle-down black-angle"></span>
                        </button>
                        <div className="dropdown-menu">
                            {items.map((item) => (
                                <button key={uuid()} onClick={() => onProductChange(index, { item: item })} className="dropdown-item">{item}</button>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="input-group mb-3">
                    <div className="btn-group">
                        <input type="text" name="by" readOnly value={product.by ? product.by : bys[0]} className="form-controls custom-selection" />
                        <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="fa fa-angle-down black-angle"></span>
                        </button>
                        <div className="dropdown-menu">
                            {bys.map((by) => (
                                <button key={uuid()} onClick={() => onProductChange(index, { by: by })} className="dropdown-item">{by}</button>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="input-group mb-3">
                    <input type="text" name="harga" value={product.harga} pattern="[0-9]" onChange={(e) => !isNaN(Number(e.target.value)) && onProductChange(index, { harga: Number(e.target.value) }) } className="form-controls custom-selection" placeholder="Harga" aria-label="Harga" aria-describedby="basic-addon1" />
                </div>
                <div className="invalid-feedback">Please choose a username.</div>
            </td>
            <td>
                <div className="input-group mb-3">
                    <input type="text" name="quantity" value={product.quantity} onChange={(e) => !isNaN(Number(e.target.value)) &&onProductChange(index, { quantity: Number(e.target.value) })} className="form-controls quantity-width" placeholder="Quantity" aria-label="Quantity" aria-describedby="basic-addon1" />
                </div>
            </td>
            <td>
                <div className="input-group mb-3">
                    <input type="text" name="subTotal" readOnly value={product.subTotal} className="form-controls" placeholder="SubTotal" aria-label="SubTotal" aria-describedby="basic-addon1" />
                </div>
            </td>
            <td>
                <div className="col-2 text-right mb-3">
                    <button type="button" className="btn btn-failure" onClick={() => onRemoveProducts(index)}>
                        <i className="fa fa-minus-circle icon delete-icon"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ItemPembelianRow;