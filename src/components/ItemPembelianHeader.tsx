import React from 'react';

const ItemPembelianHeader = () => {
    return (
        <thead>
            <tr>
                <th className="text-left" scope="col">Item</th>
                <th className="text-left" scope="col">By</th>
                <th className="text-left" scope="col">Harga</th>
                <th className="text-left" scope="col">Qty</th>
                <th className="text-left" scope="col">Sub Total</th>
                <th scope="col">Act</th>
            </tr>
        </thead>
    )
}

export default ItemPembelianHeader;