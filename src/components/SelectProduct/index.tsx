import React from 'react';

interface ISelectProducProps {
	items: Array<any>;
	onChange: (event: any) => void;
}

const SelectProduct = (props: ISelectProducProps) => {
	const { items, onChange } = props;
	return (
		<select onChange={onChange}>
			<option value="0">Lista de Productos</option>
			{items.map((product: any) => {
				return (
					<option key={product.id} value={product.id}>
						{`${product.name} PRECIO: ${product.price}`}
					</option>
				);
			})}
			<option value="500">Consumo</option>
		</select>
	);
};

export default SelectProduct;
