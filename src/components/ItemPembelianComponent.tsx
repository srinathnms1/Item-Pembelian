import React, { useState } from 'react';
import { IItemPembelian } from '../models/ItemPembelian';
import ItemPembelianRow from './ItemPembelianRow';
import ItemPembelianHeader from './ItemPembelianHeader';
import ItemPembelianFooter from './ItemPembelianFooter';

export interface IItemPembelianRowProps {
    product: IItemPembelian;
    index: number;
    items: string[];
    bys: string[];
    onRemoveProducts: (index: number) => void;
    onProductChange: (index: number, product: any) => void;
}

export interface IItemPembelianFooterProps {
    onSubmitProducts: () => void;
    onAddProducts: () => void;
}

const ItemPembelianComponent = () => {
    const initialValue = [
        {
            item: 'Gunting',
            by: 'Ardin',
            harga: 85000,
            quantity: 1,
            subTotal: 85000
        },
        {
            item: 'Gunting for Man',
            by: 'Fajar',
            harga: 75000,
            quantity: 2,
            subTotal: 150000
        }] as IItemPembelian[];

    const items = ['Gunting', 'Gunting for Man'];
    const bys = ['Ardin', 'Fajar'];

    const [products, setProducts] = useState(initialValue);

    const onAddProducts = () => {
        const product = {
            harga: 0,
            by: '',
            item: '',
            quantity: 0,
            subTotal: 0
        } as IItemPembelian;
        setProducts([...products, product]);
    };

    const onSubmitProducts = () => {
        const total = products.reduce((prev, curr) => prev + curr.subTotal, 0);
        console.log('The total of Products is ' + total);
    };

    const onRemoveProducts = (index: number) => {
        products.splice(index, 1);
        setProducts([...products]);
    };

    const onProductChange = (index: number, product: any) => {
        const currentProduct = products[index];
        const modifiedProduct = { ...currentProduct, ...product };
        modifiedProduct.subTotal = modifiedProduct.harga * modifiedProduct.quantity;
        products[index] = modifiedProduct;
        setProducts([...products]);
    };

    const renderItemPembelianFooterProps = () => {
        const itemPembelianFooterProps = {
            onSubmitProducts: () => onSubmitProducts(),
            onAddProducts: () => onAddProducts(),
        } as IItemPembelianFooterProps;

        return (<ItemPembelianFooter {...itemPembelianFooterProps} />);
    };

    const renderItemPembelianRowProps = (product: IItemPembelian, index: number) => {
        const itemPembelianRowProps = {
            product: product,
            index: index,
            items: items,
            bys: bys,
            onProductChange: (index: number, harga: string) => onProductChange(index, harga),
            onRemoveProducts: (index: number) => onRemoveProducts(index),
        } as IItemPembelianRowProps;

        return (<ItemPembelianRow key={index} {...itemPembelianRowProps} />);
    }
    return (
        <div className="container container-skeleton">
            <div>
                <h1 className="text-left">
                    <i className="fa fa-money money-icon" aria-hidden="true"></i>
                    Item Pembelian
            </h1>
                <table>
                    <ItemPembelianHeader />
                    <tbody>
                        {
                            products.map((product, index) => (renderItemPembelianRowProps(product, index)))
                        }
                        {
                            renderItemPembelianFooterProps()
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemPembelianComponent;
