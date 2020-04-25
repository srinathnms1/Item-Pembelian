import React from 'react';
import { IItemPembelianFooterProps } from './ItemPembelianComponent';

const ItemPembelianFooter = (props: IItemPembelianFooterProps) => {
    const { onSubmitProducts, onAddProducts } = props;
    return (
        <tr className="submit">
            <td colSpan={5} className="submit">
                <div className="input-icons" >
                    <button type="button" onClick={onSubmitProducts} className="btn btn-success">Submit</button>
                </div>
            </td>
            <td>
                <div className="input-icons" >
                    <button type="button" onClick={onAddProducts} className="btn btn-success">
                        <i className="fa fa-plus"></i>New</button>
                </div>
            </td>
        </tr>
    )
}

export default ItemPembelianFooter;